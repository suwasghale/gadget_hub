export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  maxVisible = 5
): number[] {
  const half = Math.floor(maxVisible / 2);

  let start = Math.max(currentPage - half, 1);
  let end = Math.min(start + maxVisible - 1, totalPages);

  if (end - start + 1 < maxVisible) {
    start = Math.max(end - maxVisible + 1, 1);
  }

  const pages: number[] = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
}
