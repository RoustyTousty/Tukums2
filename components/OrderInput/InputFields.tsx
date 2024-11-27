import React from "react";
import { Order } from "@/types";

type Props = {
  data: Partial<Order>;
  onDataChange: (field: keyof Order, value: string | number) => void;
}

export default function InputFields({ data, onDataChange }: Props) {
  console.log("jolo")
  return (
    <div className="flex flex-col gap-3 p-[10%]">
      <div className="flex flex-row justify-between gap-5">
        <label className="form-control w-full max-w">
          <div className="label">
            <span className="label-text text-neutral">Vārds</span>
          </div>
          <input
            type="text"
            placeholder="-"
            className="input bg-base-100 w-full"
            value={data.name || ""}
            onChange={(e) => onDataChange("name", e.target.value)}
          />
        </label>

        <label className="form-control w-full max-w">
          <div className="label">
            <span className="label-text text-neutral">Uzvārds</span>
          </div>
          <input
            type="text"
            placeholder="-"
            className="input bg-base-100 w-full"
            value={data.surname || ""}
            onChange={(e) => onDataChange("surname", e.target.value)}
          />
        </label>
      </div>

      <label className="form-control w-full max-w">
        <div className="label">
          <span className="label-text text-neutral">Telefona numurs:</span>
        </div>
        <input
          type="number"
          placeholder="-"
          className="input bg-base-100 w-full"
          value={data.phoneNumber || ""}
          onChange={(e) => onDataChange("phoneNumber", Number(e.target.value))}
        />
      </label>

      <label className="form-control w-full max-w">
        <div className="label">
          <span className="label-text text-neutral">Lokācīja:</span>
        </div>
        <input
          type="text"
          placeholder="-"
          className="input bg-base-100 w-full"
          value={data.location || ""}
          onChange={(e) => onDataChange("location", e.target.value)}
        />
      </label>

      <div className="flex flex-row gap-5">
        <label className="form-control w-full max-w">
          <div className="label">
            <span className="label-text text-neutral">Piegādes diena:</span>
          </div>
          <input
            type="datetime-local"
            placeholder="-"
            className="input bg-base-100 w-full"
            value={data.time || ""}
            onChange={(e) => onDataChange("time", e.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-row gap-5">
        <label className="form-control w-full max-w-20">
          <div className="label">
            <span className="label-text text-neutral">Skaits:</span>
          </div>
          <input
            type="number"
            placeholder="-"
            className="input bg-base-100 w-full max-w-20"
            value={data.quantity || ""}
            onChange={(e) => onDataChange("quantity", Number(e.target.value))}
          />
        </label>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-neutral">Pirkuma tips:</span>
          </div>
          <select
            className="select bg-base-100"
            value={data.purchaseType || ""}
            onChange={(e) => onDataChange("purchaseType", e.target.value)}
          >
            <option value="">Izvēlieties tipu</option>
            <option value="Granulas">Granulas</option>
            <option value="Briketes">Briketes</option>
          </select>
        </label>
      </div>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text text-neutral">Samaksas veids:</span>
        </div>
        <select
          className="select bg-base-100"
          value={data.paymentType || ""}
          onChange={(e) => onDataChange("paymentType", e.target.value)}
        >
          <option value="">Izvēlieties veidu</option>
          <option value="Skaidrā naudā">Skaidrā naudā</option>
          <option value="Naudas pārskaitījums">Naudas pārskaitījums</option>
          <option value="Uz uzņēmuma">Uz uzņēmuma</option>
        </select>
      </label>
    </div>
  );
};