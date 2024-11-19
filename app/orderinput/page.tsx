import InputFields from "../../components/pages/OrderInput/InputFields"
import MapDisplay from "@/components/utils/MapDisplay"
import NavBar from "@/components/NavBar";

export default function page() {
    return (
        <div className="bg-base-300 flex flex-col w-full h-full">
            <NavBar />
            <InputFields/>
            <MapDisplay/>
        </div>
    )
}