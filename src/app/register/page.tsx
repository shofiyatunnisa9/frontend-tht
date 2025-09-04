"use client";
import Link from "next/link";
import { useRegister } from "../hook/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import router from "next/router";
interface RegisterFormData {
  name: string;
  email: string;
  gender: string;
  password: string;
}
export default function Register() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<RegisterFormData>();
  const registerMutation = useRegister();
  const [message, setMessage] = useState("");
  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await registerMutation.mutateAsync(data);
      setMessage(res.message || "Register success!");
      router.push("/login");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Register failed");
    }
  };
  return (
    <div className="text-center pt-20">
      <h1 className="text-2xl font-bold">Register</h1>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Name"
            className="border rounded-lg p-2 w-80 gap-3"
            {...register("name")}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-2 w-80 gap-3"
            {...register("email")}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Gender"
            className="border rounded-lg p-2 w-80 gap-3"
            {...register("gender")}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg p-2 w-80 gap-3"
            {...register("password")}
            disabled={registerMutation.isPending}
          />
        </div>

        <button className="bg-amber-500 text-white w-80 py-2 rounded cursor-pointer">
          {registerMutation.isPending ? "Loading..." : "Register"}
        </button>
        <p className="text-sm text-center -mt-2">
          have an account?
          <Link href="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
