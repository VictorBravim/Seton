// Products.tsx
import Image from "next/image";
import chair from "@/assets/chair.png";
import sofa from "@/assets/sofa.png";
import office from "@/assets/office.png";
import stools from "@/assets/stools.png";
import lamps from "@/assets/lamp.png";
import clock from "@/assets/clock.png";

export default function Products() {
    return (
        <div id="products" className="bg-white w-full h-full lg:h-screen flex justify-center items-center">
            <div className="grid lg:grid-cols-3 py-64 text-black gap-32 text-center font-bold">
                <div className="flex flex-col items-center">
                    <Image src={chair} alt="CHAIR" width={300} height={160} objectFit="contain" />
                    <h1>CHAIR</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={sofa} alt="SOFA" width={300} height={160} objectFit="contain" />
                    <h1>SOFA</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={office} alt="OFFICE" width={300} height={160} objectFit="contain" />
                    <h1>OFFICE</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={stools} alt="STOOLS" width={300} height={160} objectFit="contain" />
                    <h1>STOOLS</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={lamps} alt="LAMPS" width={300} height={160} objectFit="contain" />
                    <h1>LAMPS</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={clock} alt="CLOCK" width={300} height={160} objectFit="contain" />
                    <h1>CLOCK</h1>
                </div>
            </div>
        </div>
    );
}