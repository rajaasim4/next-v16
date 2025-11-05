import Link from "next/link";

const NotFound = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl">404 - Not Found</h2>
        <p className="my-4">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="mt-4  hover:underline bg-blue-500 px-5 py-3 rounded-md text-white"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
