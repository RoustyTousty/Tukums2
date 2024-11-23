import { Order } from "@/types";

type Props = {
    location: String | undefined;
    onDataChange: (field: keyof Order, value: string | number) => void;
};

export default function mapDisplay({ location, onDataChange }: Props) {
    return (
        <div className="flex justify-center w-full">
            <label className="flex flex-col justify-center w-full">
                <div className="label justify-center">
                    <span className="label-text text-sm text-neutral font-bold">{location}</span>
                </div>

                <div className="relative w-full" style={{ paddingBottom: '20%' }}>
                    <div className="top-0 left-0 bg-base-100 rounded-xl w-full h-full p-0.5">
                        <div className="bg-base-100 rounded-xl w-full h-full">
                            {/* Map image */}
                        </div>
                    </div>
                </div>

                <p>Open in google</p>
            </label>
        </div>
    );
} 