// Card.tsx
import Image from "next/image";
import card from '@/assets/card.webp'
import card2 from '@/assets/card2.webp'

export default function Card() {
    return (
        <div className="w-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40" style={{ marginTop: '980px' }}>
            <div className="hidden lg:block">
                <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:space-x-12">
                    <div className="bg-white flex flex-col items-center text-white text-center w-full lg:w-1/3 lg:mb-0">
                        <Image src={card} alt="Texto" width={550} height={32} />
                    </div>
                    <div className="bg-white flex flex-row items-center text-white p-2 px-12 text-center w-full lg:w-1/1 lg:mb-0 shadow-xl">
                        <div className="w-1/3 ml-12">
                            <Image src={card2} alt="Texto" width={200} height={32} />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <h2 className="text-gray-500 text-md text-left font-semibold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur id nisl vel placerat. Donec scelerisque orci eget convallis condimentum. Phasellus ullamcorper tristique arcu, at iaculis metus. Nulla tristique, massa et fermentum finibus, ligula lacus porta odio, at faucibus dolor urna at augue.</h2>
                            <p className="bg-black text-white p-2 mb-4">DISCOVER MORE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}