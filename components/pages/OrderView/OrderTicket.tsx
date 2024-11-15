import MapDisplay from "@/components/utils/MapDisplay";

export default function OrderTicket() {
    return (
        <div className="flex flex-col w-full h-full p-[10%] rounded-lg">
            {/* Display orders - Name, Id, Daudzumu, Pirkuma veids, Cena, Samaksas veids */}


            {/* Map and location info */}
            <MapDisplay/>
        </div>
    )
}