import LoadingScreen from "@/components/LoadingPage";
import OrderInputPage from "@/app/pages/OrderInputPage";
import OrderViewPage from "@/app/pages/OrderViewPage";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="bg-base-300 h-full">
      <NavBar/>
      <OrderInputPage/>
    </div>
  );
}
