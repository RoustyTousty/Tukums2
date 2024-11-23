import OrderList from "@/components/OrderList/OrderList"
import NavBar from "@/components/NavBar";

export default function page() {
    return (
        <div className="flex flex-col w-full h-full">
            <NavBar />
            <OrderList/>
        </div>
    )
}