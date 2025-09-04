import api from "@/utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface DataMutation {
  name: string;
  price: string;
  description?: string;
}

export const useProducts = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await api.get("/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    enabled: !!token,
  });
};
export const useProduct = () => {
  const queryClient = useQueryClient();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return useMutation({
    mutationFn: async (data: DataMutation) => {
      const res = await api.post("/product", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["product"] }),
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: DataMutation }) => {
      const res = await api.patch(`/products/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["product"] }),
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  return useMutation({
    mutationFn: async (id: number) => {
      const res = await api.delete(`/product/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["product"] }),
  });
};
