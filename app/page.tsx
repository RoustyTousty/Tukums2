import LoadingScreen from "@/components/LoadingPage"
import OrderInputPage from "./orderinput/page"
import Link from "next/link"
import MapDisplay from "@/components/utils/MapDisplay";

export default function Home() {
  return (
    <div className="flex flex-col h-screen gap-5">
      <Link href="/orders/1">order 1</Link>
      <Link href="/orderinput">orderinput</Link>
      <Link href="/orderlist">orderlist</Link>
      <MapDisplay location={"Tukums"}/>
      <LoadingScreen />
    </div>
  );
}
