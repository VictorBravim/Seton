// Icons.tsx
import { PiArmchair, PiChair, PiOfficeChair, PiStoolDuotone, PiLampPendant } from "react-icons/pi";
import { GoClock } from "react-icons/go";

export default function Icons() {
    return (
        <div className="bg-white w-full h-full flex justify-center pt-32">
            <div className="grid grid-cols-6 py-64 text-black gap-12 text-center font-bold">
                <div className="border border-black p-12 flex flex-col justify-center items-center rounded-sm">
                <PiChair className="text-7xl mb-4"/>
                    <h1 className="text-2xl">CHAIR</h1>
                </div>
                <div className="border border-black p-8  flex flex-col justify-center items-center rounded-sm">
                <PiArmchair className="text-7xl mb-4"/>
                    <h1 className="text-2xl">SOFA</h1>
                </div>
                <div className="border border-black p-8  flex flex-col justify-center items-center rounded-sm">
                <PiOfficeChair className="text-7xl mb-4"/>
                    <h1 className="text-2xl">OFFICE</h1>
                </div>
                <div className="border border-black p-8  flex flex-col justify-center items-center rounded-sm">
                <PiStoolDuotone className="text-7xl mb-4"/>
                    <h1 className="text-2xl">STOOLS</h1>
                </div>
                <div className="border border-black p-8  flex flex-col justify-center items-center rounded-sm">
                <PiLampPendant className="text-7xl mb-4"/>
                    <h1 className="text-2xl">LAMPS</h1>
                </div>
                <div className="border border-black p-8  flex flex-col justify-center items-center rounded-sm">
                <GoClock className="text-7xl mb-4"/>
                    <h1 className="text-2xl">CLOCK</h1>
                </div>
            </div>
        </div>
    );
}