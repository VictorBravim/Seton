// Selectors.tsx
export default function Selectors() {
    return (
        <div className="w-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mt-s" style={{ marginTop: '2750px' }}>
            <div className="hidden lg:block">
                <div className="container mx-auto flex flex-col lg:flex-row justify-center">
                    <div className="bg-transparent flex justify-center items-center text-black text-center w-full lg:w-1/1 lg:mb-0">
                    <button className="bg-yellow-500 py-2 px-16 font-semibold shadow-xl"><h1>NEW</h1></button>
                    </div>
                    <div className="bg-transparent flex justify-center items-center text-black text-center w-full lg:w-1/1 lg:mb-0">
                    <button className="bg-white py-2 px-16 font-semibold shadow-xl"><h1>BEST</h1></button>
                    </div>
                    <div className="bg-transparent flex justify-center items-center text-black text-center w-full lg:w-1/1 lg:mb-0">
                    <button className="bg-white py-2 px-16 font-semibold shadow-xl"><h1>SALE</h1></button>
                    </div>
                </div>
            </div>
        </div>
    );
}