// src/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <nav className="bg-amber-300 shadow mb-6">
      <div className="mx-10 py-3 flex justify-between items-center">
        <h1 className="text-lg font-bold"></h1>
        <div className="space-x-4 font-bold">
          <Link href="/profile" className="text-black hover:text-amber-800">
            Profile
          </Link>
          <Link href="/products" className="text-black hover:text-amber-800">
            Products
          </Link>
          <button onClick={handleLogout} className="text-White hover:underline">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
