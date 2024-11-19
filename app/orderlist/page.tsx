import OrderList from "@/components/pages/OrderList/OrderList"
import NavBar from "@/components/NavBar";

export default function page() {
    return (
        <div className="flex flex-col w-full h-full">
            <NavBar />
            <OrderList/>
        </div>
    )
}