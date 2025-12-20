export interface FetchOptions extends RequestInit {
  auth?: boolean;
}

const API_V1 = process.env.NEXT_PUBLIC_API_V1_URL || "http://127.0.0.1:8000/api/v1";
const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT_URL || "http://127.0.0.1:8000";

export async function apiFetch<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const access =
    typeof window !== "undefined" ? localStorage.getItem("access") : null;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers instanceof Headers
      ? Object.fromEntries(options.headers.entries())
      : (options.headers as Record<string, string> || {})),
  };

  if (options.auth && access) {
    headers.Authorization = `Bearer ${access}`;
  }

  const response = await fetch(`${API_V1}/${endpoint}`, {
    ...options,
    headers,
  });

  // 🔁 Handle expired access token
  if (response.status === 401 && options.auth) {
    const refresh = localStorage.getItem("refresh");
    if (refresh) {
      const newAccess = await refreshAccessToken(refresh);
      if (newAccess) {
        localStorage.setItem("access", newAccess);
        headers.Authorization = `Bearer ${newAccess}`;

        const retry = await fetch(`${API_V1}/${endpoint}`, {
          ...options,
          headers,
        });

        if (!retry.ok) {
          throw new Error(await retry.text());
        }

        return retry.json();
      }
    }
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `Request failed with ${response.status}`);
  }

  return response.json();
}


async function refreshAccessToken(refresh: string): Promise<string | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/users/token/refresh/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refresh }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.access;
  } catch {
    return null;
  }
}
