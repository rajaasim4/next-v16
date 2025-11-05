"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center">
      <h2 className="text-2xl">⚠️ Oops! Something went wrong.</h2>
      <button
        className="mt-4  hover:underline bg-blue-500 px-5 py-3 rounded-md text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
