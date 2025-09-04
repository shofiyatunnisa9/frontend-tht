"use client";
import Navbar from "../componnents/navbar";
import { useProfile } from "../hook/useProfile";

export default function Profile() {
  const { data, isLoading, isError } = useProfile();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading profile</p>;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p>Name : {data?.name}</p>
        <p>Email : {data?.email}</p>
        <p>Gender: {data?.gender}</p>
      </div>
    </div>
  );
}
