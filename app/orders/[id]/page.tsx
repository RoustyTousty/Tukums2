import OrderTicket from "@/components/pages/OrderView/OrderTicket";
import OrderEdit from "@/components/pages/OrderView/OrderEdit";
import { createClient } from "@supabase/supabase-js";
import NavBar from "@/components/NavBar";
import { Order } from "@/types";
import { useEffect, useState } from "react";

type Params = Promise<{ id: String }>;

export default async function page({params}: {params: Params}) {

    const {id} = await params;

    const supabase = await createClient(
        process.env.NEXT_PUBLIC_PROJECT_URL!,
        process.env.NEXT_PUBLIC_ANON_KEY!
    );

    const {data, error} = await supabase.from("Orders").select().eq("id", id).single();
    if (error) {
        return <div>Error: No data found!</div>
    };

    return (
        <div className="flex flex-col w-full h-full bg-base-300">
            <NavBar />
            <OrderTicket data={data} />
            <OrderEdit />
        </div>
    );
}