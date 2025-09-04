"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useLogin } from "../hook/useAuth";
import { useState } from "react";
import router from "next/router";
interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const loginMutation = useLogin();
  const [message, setMessage] = useState("");

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await loginMutation.mutateAsync(data);
      localStorage.setItem("token", res.token);
      setMessage("Login success!");
      router.push("/profile");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };
  return (
    <div className="text-center pt-20">
      <h1 className="text-2xl font-bold">Login</h1>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
            type="password"
            placeholder="Password"
            className="border rounded-lg p-2 w-80"
            {...register("password")}
            disabled={loginMutation.isPending}
          />
        </div>
        <button className="bg-amber-500 text-white w-80 py-2 rounded cursor-pointer">
          {loginMutation.isPending ? "Loading..." : "Login"}
        </button>
        <p className="text-sm text-center -mt-2">
          Don&apos;t have an account?
          <Link href="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </form>
      {message && (
        <p className="mt-4 text-center text-amber-950 font-bold">{message}</p>
      )}
    </div>
  );
}
