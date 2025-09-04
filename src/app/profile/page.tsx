"use client";
import Navbar from "../componnents/navbar";
import { useProfile } from "../hook/useProfile";

export default function Profile() {
  const { data } = useProfile();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="bg-white rounded-lg shadow-md p-6 m-6 w-80">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Profile</h1>
        <div className="space-y-2">
          <p>
            <span className="font-medium text-gray-600">Name:</span>{" "}
            {data?.name}
          </p>
          <p>
            <span className="font-medium text-gray-600">Email:</span>{" "}
            {data?.email}
          </p>
          <p>
            <span className="font-medium text-gray-600">Gender:</span>{" "}
            {data?.gender}
          </p>
        </div>
      </div>
    </div>
  );
}
