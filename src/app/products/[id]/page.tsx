"use client";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import { useUpdateProduct } from "@/app/hook/useProducts";
import Navbar from "@/app/componnents/navbar";
import React from "react";

export default function EditProduct() {
  const { register, handleSubmit, setValue } = useForm();
  const updateMutation = useUpdateProduct();
  const router = useRouter();
  const params = useParams();
  const productId = Number(params.id);

  const onSubmit = async (data: any) => {
    await updateMutation.mutateAsync({ id: productId, data });
    router.push("/products");
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-6 rounded-lg shadow max-w-md mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
            {...register("name")}
            placeholder="Name"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            {...register("price")}
            placeholder="Price"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            {...register("description")}
            placeholder="Description"
            className="border p-2 rounded w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Edit
          </button>
        </form>
      </div>
    </>
  );
}
