// Card.tsx
import Image from "next/image";
import card from '@/assets/card.png'
import card2 from '@/assets/card2.png'

export default function Card() {
    return (
        <div className="w-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 mt-s" style={{ marginTop: '980px' }}>
            <div className="hidden lg:block">
                <div className="container mx-auto flex flex-col lg:flex-row justify-center lg:space-x-12">
                    <div className="bg-white flex flex-col items-center text-white text-center w-full lg:w-1/3 lg:mb-0">
                        <Image src={card} alt="Texto" width={550} height={32} />
                    </div>
                    <div className="bg-white flex flex-row items-center text-white p-2 px-12 text-center w-full lg:w-1/1 lg:mb-0 shadow-xl">
                        <Image src={card2} alt="Texto" width={150} height={32} />
                        <h1 className="text-xl font-semibold mb-2">Delicious Latte</h1>
                        <h2 className="text-gray-500  text-md  font-semibold mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                        <p className="bg-white text-black p-2 mb-4">DISCOVER MORE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}