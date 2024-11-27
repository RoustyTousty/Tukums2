import { useEffect, useState } from "react";
import { Order } from "@/types";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

type Props = {
    location: String | undefined;
};

export default function MapDisplay({ location }: Props) {

    return (
        <div className="flex justify-center w-full">
            <label className="flex flex-col justify-center w-full">
                <div className="label justify-center">
                    <span className="label-text text-sm text-neutral font-bold">{location}</span>
                </div>

                <div className="relative w-full" style={{ paddingBottom: "20%" }}>
                    <div className="top-0 left-0 bg-base-100 rounded-xl w-full h-full p-0.5">
                        <div className="bg-base-100 rounded-xl w-full h-full">
                            <iframe
                            width="600"
                            height="450"
                            className="border:0"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC9FqoD2L29DAi7v1_-ygWwTkF70FLDjso
                                &q=Tukums+Raina+gimnazija">
                            </iframe>
                        </div>
                    </div>
                </div>

                <p>Open in Google</p>
            </label>
        </div>
    );
}
