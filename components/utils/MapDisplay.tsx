type Props = {
    location: String | null;
};

export default function MapDisplay({ location }: Props) {

    if (!location) {
        return <div>No Map location found!</div>;
    }

    function generateGoogleApiUrl(location: String) {
        let newStr = "https://www.google.com/maps/embed/v1/place?key=AIzaSyC9FqoD2L29DAi7v1_-ygWwTkF70FLDjso&q="
        for (let index = 0; index < location.length; index++) {
            if (location[index] == " ") {
                newStr += "+"
            }
            newStr += location[index]
        }
        return newStr
    }
    const API_URL = generateGoogleApiUrl(location)

    return (
        <div className="flex justify-center w-full">
            <label className="flex flex-col justify-center w-full">
                <div className="label">
                    <span className="label-text text-sm text-neutral">{location}</span>
                </div>

                <div className="relative w-full">
                    <div className="top-0 left-0 bg-base-100 rounded-xl w-full h-full">
                        <div className="rounded-xl w-full h-full">
                            <iframe
                            className="w-full h-full rounded-lg"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={API_URL}>
                            </iframe>
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
}
