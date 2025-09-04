import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const res = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.user;
    },
    enabled: !!token,
  });
};
