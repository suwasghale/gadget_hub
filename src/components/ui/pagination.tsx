"use client";

import { getPaginationRange } from "@/lib/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  const pages = getPaginationRange(currentPage, totalPages);

  return (
    <nav className="flex items-center justify-center gap-2 mt-10">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded
            ${page === currentPage
              ? "bg-black text-white"
              : "hover:bg-gray-100"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Next
      </button>
    </nav>
  );
}
