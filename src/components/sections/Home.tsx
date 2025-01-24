import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home: FC = () => {
    return (
        <div className="px-5 bg-white">
            <section
                className="relative bg-cover bg-center rounded-[24px]"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('/images/1.jpg')",
                    height: "calc(100vh - 90px)"
                }}
            >
                <div className="md:px-[30%] absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <div className="flex items-center">
                        <div className="relative w-[21px] h-[21px]">
                            <Image
                                src="/icons/logo-white.svg"
                                alt="Mozaik concepts Logo"
                                fill
                            />
                        </div>
                        <h1 className="text-white uppercase text-sm md:text-xl font-semibold ml-3">MOZAIK CONCEPTS</h1>
                    </div>
                    <h1 className="md:text-5xl text-2xl font-bold my-8 uppercase leading-normal">transform your office space with us</h1>
                    <button className="flex text-sm justify-between bg-[#E09F1F] hover:bg-blue-700 text-white font-[600] py-2 md:py-4 px-3 md:px-6 rounded-[8px] capitalize">
                        request free consultation
                        <MdKeyboardArrowRight className='text-xl ml-2' />
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;
