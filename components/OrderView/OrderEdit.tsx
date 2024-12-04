"use client"
import { useRouter } from "next/navigation";

export default function OrderEdit() {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-around w-full h-full rounded-lg">
      <button className="btn btn-success w-[40%] text-neutral" onClick={() => router.push("/orderlist")}>
        Atpakaļ
      </button>

      <button className="btn btn-info w-[40%] text-neutral">Edit</button>
    </div>
  );
}