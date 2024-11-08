import React from "react"
import Image from "next/image"

export default function orderInputScreen() {
    return (
      <div className="bg-base-100 flex flex-col w-full h-full p-[10%]">
        
        <div className="flex flex-col gap-3">

          <div className="flex flex-row justify-between gap-5">
            <label className="form-control w-full max-w">
              <div className="label">
                <span className="label-text">Vārds</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-secondary input-bordered w-full" />
            </label>

            <label className="form-control w-full max-w">
              <div className="label">
                <span className="label-text">Uzvārds</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-secondary input-bordered w-full" />
            </label>
          </div>

          <label className="form-control w-full max-w">
            <div className="label">
              <span className="label-text">Telefona numurs:</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-secondary input-bordered w-full" />
          </label>

          <div className="flex flex-row gap-5">
            <label className="form-control w-full max-w">
              <div className="label">
                <span className="label-text">Pigadājuma diena:</span>
              </div>
              <input type="date" placeholder="Type here" className="input input-secondary input-bordered w-full" />
            </label>

            <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Izpildes laiks:</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-secondary input-bordered w-full" />
            </label>
          </div>

          <div className="flex flex-row gap-5">
            <label className="form-control w-full max-w-20">
              <div className="label">
                <span className="label-text">Skaits:</span>
              </div>
              <input type="number" placeholder="Type here" className="input input-secondary input-bordered w-full max-w-20" />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Pirkuma tips:</span>
              </div>
              <select className="select select-secondary select-bordered">
                <option>Granulas</option>
                <option>Briketes</option>
              </select>
            </label>
          </div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Samaksas veids:</span>
            </div>
            <select className="select select-secondary select-bordered">
              <option>Skaidrā naudā</option>
              <option>Naudas pārskaitījums</option>
              <option>Uz uzņēmuma</option>
            </select>
          </label>

          <div className="flex flex-row gap-5 justify-center w-full mt-10">
            <button className="btn btn-success text-white">Apstiprināt pasūtījumu</button>
            <button className="btn btn-outline btn-error text-white">
              <Image src={"/trash.png"} width={30} height={30} alt={"Logo"} />
            </button>
          </div>
        </div>
      </div>
    )
} 