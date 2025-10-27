import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-8xl">Welcome to the Next Js V 16</h1>
      <ul className="mt-10">
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
