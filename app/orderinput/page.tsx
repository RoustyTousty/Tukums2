"use client";
import InputFields from "../../components/OrderInput/InputFields";
import NavBar from "@/components/NavBar";
import InputFieldsButton from "@/components/OrderInput/InputFieldsButtons";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Page() {
	const [currentData, setCurrentData] = useState({
		id: undefined,
		name: undefined,
		surname: undefined,
		phoneNumber: undefined,
		time: undefined,
		quantity: undefined,
		purchaseType: undefined,
		price: undefined,
		paymentType: undefined,
		location: undefined,
		status: false,
	});

	function onDataChange(key: keyof typeof currentData, value: string | number) {
		setCurrentData((prevData) => {
			const updatedData = { ...prevData, [key]: value };
			return updatedData;
		});
	}

	async function saveData() {

		const { data, error } = await supabase.from("Orders").insert({
			...currentData,
		});

		if (error) {
			console.error("Error saving data:", error);
		} else {
			console.log("Data saved successfully:", data);
			window.location.href = "/orderlist"
		}
	}

	return (
		<div className="bg-base-300 flex flex-col w-full h-full">
			<NavBar />
			<InputFields data={currentData} onDataChange={onDataChange} />
			<InputFieldsButton saveData={saveData} />
		</div>
	);
}
