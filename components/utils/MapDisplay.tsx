export default function MapDisplay() {
    return (
        <div className="flex justify-center w-full">
            <label className="flex flex-col justify-center w-full">
                <div className="label justify-center">
                    <span className="label-text text-sm text-neutral font-bold">Tukums, 30 Bulvaris</span>
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