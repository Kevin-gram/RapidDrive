export default function Navbar() {
    return(
        <div className="text-white font-xyz px-10 items-center justify-evenly w-full flex flex-row t-0 r-0 l-0 z-1 fixed ">
            <div className=" w-1/2">
                <h1 className="text-2xl font-abc">Rapidriv</h1>
            </div>
            <div className="flex flex-row gap-10 ">
            <a href="https://example.com" className="border-b border-gray-500 border-dashed ">Home</a>
            <a href="https://example.com" className="">About us</a>
            <a href="https://example.com" className=" ">Companies </a>
            <a href="https://example.com" className="">People</a>
            <button className="bg-navy rounded-sm justify-center w-16"><a href="https://example.com" className="  ">Login</a></button>
            </div>
        </div>
    )
}
