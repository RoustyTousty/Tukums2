import React from "react"
import Image from "next/image"

export default function InputFields() {
    return (
        <div className="flex flex-col gap-3">

            <div className="flex flex-row justify-between gap-5">
            <label className="form-control w-full max-w">
                <div className="label">
                <span className="label-text text-neutral">Vārds</span>
                </div>
                <input type="text" placeholder="-" className="input bg-base-100 w-full" />
            </label>

            <label className="form-control w-full max-w">
                <div className="label">
                <span className="label-text text-neutral">Uzvārds</span>
                </div>
                <input type="text" placeholder="-" className="input bg-base-100 w-full" />
            </label>
            </div>

            <label className="form-control w-full max-w">
            <div className="label">
                <span className="label-text text-neutral">Telefona numurs:</span>
            </div>
            <input type="text" placeholder="-" className="input bg-base-100 w-full" />
            </label>

            <div className="flex flex-row gap-5">
            <label className="form-control w-full max-w">
                <div className="label">
                <span className="label-text text-neutral">Pigadājuma diena:</span>
                </div>
                <input type="date" placeholder="-" className="input bg-base-100 w-full" />
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-neutral">Izpildes laiks:</span>
                </div>
                <input type="text" placeholder="-" className="input bg-base-100 w-full" />
            </label>
            </div>

            <div className="flex flex-row gap-5">
                <label className="form-control w-full max-w-20">
                    <div className="label">
                    <span className="label-text text-neutral">Skaits:</span>
                    </div>
                    <input type="number" placeholder="-" className="input bg-base-100 w-full max-w-20 a" />
                </label>

                <label className="form-control w-full">
                    <div className="label">
                    <span className="label-text text-neutral">Pirkuma tips:</span>
                    </div>
                    <select className="select bg-base-100">
                    <option>Granulas</option>
                    <option>Briketes</option>
                    </select>
                </label>
            </div>

            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text text-neutral">Samaksas veids:</span>
            </div>
            <select className="select bg-base-100">
                <option>Skaidrā naudā</option>
                <option>Naudas pārskaitījums</option>
                <option>Uz uzņēmuma</option>
            </select>
            </label>

            <div className="flex flex-row gap-5 justify-center w-full mt-10">
            <button className="btn btn-success text-white">Apstiprināt pasūtījumu</button>
            <button className="btn btn-accent text-white">
                <Image src={"/trash.png"} width={30} height={30} alt={"Logo"} />
            </button>
            </div>
        </div>
    )
} 