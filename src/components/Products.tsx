// Products.tsx
import Image from "next/image";
import chairImage from "@/assets/chair.png";
import sofaImage from "@/assets/chair.png";
import officeImage from "@/assets/chair.png";
import stoolsImage from "@/assets/chair.png";
import lampsImage from "@/assets/chair.png";
import clockImage from "@/assets/chair.png";

export default function Products() {
    return (
        <div id="products" className="bg-white w-full h-screen flex justify-center items-center">
            <div className="grid grid-cols-4 py-64 text-black gap-16 text-center font-bold">
                <div className="flex flex-col items-center">
                    <Image src={chairImage} alt="CHAIR" width={280} height={160} objectFit="contain" />
                    <h1>CHAIR</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={sofaImage} alt="SOFA" width={280} height={160} objectFit="contain" />
                    <h1>SOFA</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={officeImage} alt="OFFICE" width={280} height={160} objectFit="contain" />
                    <h1>OFFICE</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={stoolsImage} alt="STOOLS" width={280} height={160} objectFit="contain" />
                    <h1>STOOLS</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={lampsImage} alt="LAMPS" width={280} height={160} objectFit="contain" />
                    <h1>LAMPS</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={clockImage} alt="CLOCK" width={280} height={160} objectFit="contain" />
                    <h1>CLOCK</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={lampsImage} alt="LAMPS" width={280} height={160} objectFit="contain" />
                    <h1>LAMPS</h1>
                </div>
                <div className="flex flex-col items-center">
                    <Image src={clockImage} alt="CLOCK" width={280} height={160} objectFit="contain" />
                    <h1>CLOCK</h1>
                </div>
            </div>
        </div>
    );
}