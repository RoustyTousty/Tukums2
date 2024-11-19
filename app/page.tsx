import LoadingScreen from "@/components/LoadingPage"
import OrderInputPage from "./orderinput/page"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-base-300 h-screen">
      <Link href="/orders/1">order 1</Link>
      <Link href="/orderinput">orderinput</Link>
      <Link href="/orderlist">orderlist</Link>
      <LoadingScreen />
    </div>
  );
}
