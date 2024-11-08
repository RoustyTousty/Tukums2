import LoadingScreen from "@/components/LoadingScreen";
import OrderInputScreen from "@/components/OrderInputScreen";
import Test from "@/components/Test";

export default function Home() {
  return (
    <div className="h-screen">
      <Test/>
      <OrderInputScreen/>
    </div>
  );
}
