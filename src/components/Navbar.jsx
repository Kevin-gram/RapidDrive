import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
    return (
        <div className="text-white font-xyz px-10 items-center justify-between w-full flex flex-row fixed top-0 right-0 left-0 z-10">
            <div className="w-1/2">
                <h1 className="text-xl font-abc">Rapidriv</h1>
            </div>
            <div className=" hidden md:flex gap-10 lg:justify-between ">
                <a href="https://example.com" className="border-b border-gray-500 border-dashed">Home</a>
                <a href="https://example.com">About us</a>
                <a href="https://example.com">Companies</a>
                <a href="https://example.com">People</a>
                <button className="bg-navy rounded-sm shadow-xl justify-center w-16 hover:bg-green">
                    <a href="https://example.com">Login</a>
                </button>
            </div>
            <IoMdMenu className="h-10 lg:hidden md:hidden" />
        </div>
    );
}
