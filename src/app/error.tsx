"use client"; // important!

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>⚠️ Oops! Something went wrong.</h2>
      <p>{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  );
}
