import MapDisplay from "@/components/utils/MapDisplay";
import { Order } from "@/types";

type Props = {
    data: Order;
}

export default function orderTicket({ data }: Props) {
    return (
        <div className="w-full h-full p-[10%]">
            <div className="flex flex-col bg-base-200 gap-3 rounded p-[10%]">
                <div className="w-full flex flex-row justify-center text-neutral text-4xl">
                    <p className="font-bold">{data.price}$</p>
                </div>
                <div className="flex flex-row justify-start gap-1 text-lg text-neutral">
                    <p>{data.name}</p>
                    <p>{data.surname}</p>
                </div>
                <div className="text-sm text-neutral">
                    <div className="flex flex-row gap-3">
                        <p>{data.quantity}</p>
                        <p className="text-base-300">(Daudzums)</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <p>{data.purchaseType}</p>
                        <p className="text-base-300">(Pirkuma veids)</p>
                    </div>
                    <div className="flex flex-row gap-3">
                        <p>{data.paymentType}</p>
                        <p className="text-base-300">(Samaksa)</p>
                    </div>
                </div>

                <div className="text-sm text-neutral">
                    <MapDisplay location={data.location} />
                </div>

                <div className="w-full text-center">
                    {data.status ? (
                        <div className="text-success font-bold">Pasūtījums pabeigts!</div>
                    ) : (
                        <div className="text-warning font-bold">Pasūtījums nepabeigts!</div>
                    )}
                </div>
            </div>
        </div>
    );
}