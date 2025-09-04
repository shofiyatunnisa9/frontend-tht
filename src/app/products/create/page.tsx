"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useProduct } from "@/app/hook/useProducts";
import Navbar from "@/app/componnents/navbar";

export default function CreateProduct() {
  const { register, handleSubmit } = useForm();
  const createMutation = useProduct();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    await createMutation.mutateAsync(data);
    router.push("/products");
  };

  return (
    <>
      <Navbar />
      <div className="bg-white p-6 rounded-lg shadow  px-70 text-center item-center">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
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
            Create
          </button>
        </form>
      </div>
    </>
  );
}
