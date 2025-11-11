// src/lib/api.ts

export interface FetchOptions extends RequestInit {
  auth?: boolean; // whether to include JWT token
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

export async function apiFetch<T = any>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access") : null;

  // ✅ Ensure headers is a mutable object (not a tuple array)
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers instanceof Headers
      ? Object.fromEntries(options.headers.entries())
      : (options.headers as Record<string, string> || {})),
  };

  if (options.auth && token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status === 401 && token) {
    // attempt refresh token
    const refresh = localStorage.getItem("refresh");
    if (refresh) {
      const newAccess = await refreshAccessToken(refresh);
      if (newAccess) {
        localStorage.setItem("access", newAccess);
        return apiFetch(endpoint, options); // retry once
      }
    }
  }

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API Error: ${response.status} - ${error}`);
  }

  return response.json() as Promise<T>;
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
