import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-center pt-20 space-y-2">
        <h1>KNOWLEDGE TEST FULL STACK ENGINEER PT WIDYA INFORMASI NUSANTARA</h1>
        <p>by: Shofiyatunnisa</p>

        <Link
          href="/login"
          className="bg-amber-400 px-20 py-2 rounded-lg cursor-pointer"
        >
          Login
        </Link>

        <p className="text-sm text-center mt-2">
          Don&apos;t have an account?
          <Link href="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
