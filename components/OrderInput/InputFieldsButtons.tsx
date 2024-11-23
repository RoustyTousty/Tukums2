import Image from "next/image"

type Props = {
    saveData: () => void;
};

export default function InputFieldsButtons({ saveData }: Props) {
    return (
        <div className="flex flex-row gap-5 justify-center w-full mt-10">
            <button className="btn btn-success text-white" onClick={saveData}>Apstiprināt pasūtījumu</button>
            <button className="btn btn-accent text-white">
                <Image src={"/trash.png"} width={30} height={30} alt={"Logo"} />
            </button>
        </div>
    )
} 