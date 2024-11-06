import React from "react"

export default function orderInputScreen() {
    return (
      <div className="bg-primary flex flex-col w-full h-full">
        <div>

          <label className="form-control w-full max-w">
            <div className="label">
              <span className="label-text">Vārds</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full max-w">
            <div className="label">
              <span className="label-text">Uzvārds</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full max-w">
            <div className="label">
              <span className="label-text">Telefona numurs:</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full max-w">
            <div className="label">
              <span className="label-text">Pigadājuma diena:</span>
            </div>
            <input type="date" placeholder="Type here" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Izpildes laiks:</span>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full max-w-20">
            <div className="label">
              <span className="label-text">Skaits:</span>
            </div>
            <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-20" />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pirkuma tips:</span>
            </div>
            <select className="select select-bordered">
              <option>Granulas</option>
              <option>Briketes</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Samaksas veids:</span>
            </div>
            <select className="select select-bordered">
              <option>Skaidrā naudā</option>
              <option>Naudas pārskaitījums</option>
              <option>Uz uzņēmuma</option>
            </select>
          </label>

          <button className="btn btn-success">Apstiprināt pasūtījumu</button>
          <button className="btn btn-outline btn-error">Dzēst pasūtījumu</button>

        </div>
      </div>
    )
} 