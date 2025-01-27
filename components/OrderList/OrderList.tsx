"use client"
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function OrderList() {
	const [orders, setOrders] = useState<any[]>([]);
	const [filteredOrders, setFilteredOrders] = useState<any[]>([]);
	const [filterValue, setFilterValue] = useState("");
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedFilter, setSelectedFilter] = useState("all");

	useEffect(() => {
		fetchOrders();
	}, []);

	async function fetchOrders() {
		const today = new Date();
		const startOfDay = new Date(today.setHours(0, 0, 0, 0)).toISOString();
		const endOfDay = new Date(today.setHours(23, 59, 59, 999)).toISOString();
	  
		const { data, error } = await supabase
			.from("Orders")
			.select("*")
			.gte("time", startOfDay)
			.lte("time", endOfDay)
			.order("time", { ascending: true })
			.limit(10);

		if (error) {
			console.error("Error fetching orders:", error);
		} else {
			setOrders(data || []);
			setFilteredOrders(data || []);
		}
	}

	function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchTerm(e.target.value);
		filterOrders(e.target.value, filterValue);
	}

	function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>) {
		setSelectedFilter(e.target.value);
		filterOrders(searchTerm, e.target.value);
	}

	function filterOrders(search: string, filter: string) {
		let result = orders;
		if (filter && filter !== "all") {
			result = result.filter((order) => order[filter]?.toString().includes(search));
		}
		if (search) {
			result = result.filter((order) =>
				Object.values(order)
					.join(" ")
					.toLowerCase()
					.includes(search.toLowerCase())
			);
		}
		setFilteredOrders(result);
	}

	return (
		<div className="bg-base-300 h-full flex flex-col p-[10%]">
		<div className="flex justify-between mb-5 gap-3">
			<div className="w-full max-w-xs">
				<p>Meklēt</p>
				<input
					type="text"
					placeholder="Search orders..."
					className="input bg-base-100 w-full max-w-xs"
					value={searchTerm}
					onChange={handleSearch}
				/>
			</div>

			<div className="w-full max-w-xs">
				<p>Filtrs</p>
				<select
					className="select bg-base-100 w-full max-w-xs"
					value={selectedFilter}
					onChange={handleFilterChange}
				>
				<option value="all">Viss</option>
				<option value="name">Vārds</option>
				<option value="surname">Uzvārds</option>
				<option value="status">Status</option>
				</select>
			</div>
		</div>

		{filteredOrders.length === 0 ? (
			<p>No orders found for today.</p>
		) : (
			<ul className="list-none">
			{filteredOrders.map((order) => (
				<li key={order.id} className="p-4 mb-3 bg-base-100 rounded shadow-md hover:bg-base-200 cursor-pointer">
					<Link href={`/orders/${order.id}`}>
						<div>
							<p className="font-bold">
								{order.name} {order.surname}
							</p>
							<p>{order.phoneNumber}</p>
							<p>{order.time}</p>
							<p>{order.purchaseType}</p>
							<p>Status: {order.status ? "Completed" : "Pending"}</p>
						</div>
					</Link>
				</li>
			))}
			</ul>
		)}
		</div>
	);
}
