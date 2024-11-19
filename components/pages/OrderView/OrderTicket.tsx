import MapDisplay from "@/components/utils/MapDisplay";
import { Order } from "@/types";

interface OrderTicketProps {
    data: Order;
}

export default function OrderTicket({ data }: OrderTicketProps) {
    return (
        <div className="flex flex-col bg-base-200 border-2 border-accent w-full h-full gap-3 p-[10%] rounded-lg">
            <div className="w-full flex flex-row justify-center gap-3 text-neutral text-4xl">
                <p className="font-bold">{data.price}$</p>
                <p>-</p>
                <p>#{data.id}</p>
            </div>
            <hr className="border-accent" />
            <div className="flex flex-row justify-start gap-1 text-lg text-neutral">
                <p>{data.name}</p>
                <p>{data.surname}</p>
            </div>
            <hr className="border-accent" />
            <div className="text-sm text-neutral">
                <div className="flex flex-row gap-3">
                    <p>{data.quantity}</p>
                    <p className="text-base-100">(Daudzums)</p>
                </div>
                <div className="flex flex-row gap-3">
                    <p>{data.purchaseType}</p>
                    <p className="text-base-100">(Pirkuma veids)</p>
                </div>
                <div className="flex flex-row gap-3">
                    <p>{data.paymentType}</p>
                    <p className="text-base-100">(Samaksa)</p>
                </div>
            </div>
            <hr className="border-accent" />
            <div className="text-sm text-neutral">
                <MapDisplay />
            </div>
        </div>
    );
}