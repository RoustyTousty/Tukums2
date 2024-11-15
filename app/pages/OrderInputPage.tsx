import InputFields from "../../components/pages/OrderInput/InputFields"
import MapDisplay from "@/components/utils/MapDisplay"

export default function OrderInputPage() {
    return (
        <div className="bg-base-300 flex flex-col w-full h-full p-[10%]">
            <InputFields/>
            <MapDisplay/>
        </div>
    )
}