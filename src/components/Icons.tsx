// Icons.tsx
import { PiArmchair, PiChair, PiOfficeChair, PiStoolDuotone, PiLampPendant } from "react-icons/pi";
import { GoClock } from "react-icons/go";

export default function Icons() {
    return (
        <div className="bg-white w-full h-full lg:h-screen flex justify-center lg:pt-32">
            <div className="grid grid-cols-2 lg:grid-cols-6 py-64 text-black gap-12 text-center font-bold">
                <div className="border border-black p-12 flex flex-col justify-center items-center">
                <PiChair className="text-7xl mb-4"/>
                    <h1 className="text-2xl">CHAIR</h1>
                </div>
                <div className="border border-black p-8  flex flex-col justify-center items-center">
                <PiArmchair className="text-7xl mb-4"/>
                    <h1 className="text-2xl">SOFA</h1>
                </div>
                <div className="border border-black p-8  flex flex-col justify-center items-center">
                <PiOfficeChair className="text-7xl mb-4"/>
                    <h1 className="text-2xl">OFFICE</h1>
                </div>
                <div className="border border-black p-8  flex flex-col justify-center items-center">
                <PiStoolDuotone className="text-7xl mb-4"/>
                    <h1 className="text-2xl">STOOLS</h1>
                </div>
                <div className="border border-black p-8  flex flex-col justify-center items-center">
                <PiLampPendant className="text-7xl mb-4"/>
                    <h1 className="text-2xl">LAMPS</h1>
                </div>
                <div className="border border-black p-8  flex flex-col justify-center items-center">
                <GoClock className="text-7xl mb-4"/>
                    <h1 className="text-2xl">CLOCK</h1>
                </div>
            </div>
        </div>
    );
}