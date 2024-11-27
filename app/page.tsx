import LoadingScreen from "@/components/LoadingPage"
import OrderInputPage from "./orderinput/page"
import Link from "next/link"
import MapDisplay from "@/components/utils/MapDisplay";

export default function Home() {
  return (
    <div className="flex flex-col h-screen gap-5">
      <Link href="/orders/c8085915-3383-4637-8eca-ae2f1f1647ba">order test</Link>
      <Link href="/orderinput">orderinput</Link>
      <Link href="/orderlist">orderlist</Link>
      <LoadingScreen />
    </div>
  );
}
