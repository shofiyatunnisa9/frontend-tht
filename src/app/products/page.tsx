"use client";

import Link from "next/link";
import { useDeleteProduct, useProducts } from "../hook/useProducts";
import Navbar from "../componnents/navbar";

export default function ProductList() {
  const { data, isLoading } = useProducts();
  const deleteMutation = useDeleteProduct();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="flex justify-between items-center mb-6 ">
          <h1 className="text-2xl font-bold">Products</h1>
          <Link
            href="/products/create"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            + Add Product
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <table className="min-w-full">
            <thead>
              <tr className="border text-center bg-amber-200">
                <th className="py-2 border">Name</th>
                <th className="py-2 border">Price</th>
                <th className="py-2 border">Description</th>
                <th className="py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((product: any) => (
                <tr key={product.id} className="border hover:bg-gray-50">
                  <td className="py-2 px-3 border">{product.name}</td>
                  <td className="py-2 px-3 border">Rp.{product.price}</td>
                  <td className="py-2 px-3 border">{product.description}</td>
                  <td className="py-2 px-3 border text-center">
                    <Link
                      href={`/products/${product.id}`}
                      className="bg-blue-400 px-5 py-2 text-white rounded-2xl mr-2 cursor-pointer"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteMutation.mutate(product.id)}
                      className="bg-black px-5 py-1 text-white rounded-2xl cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
