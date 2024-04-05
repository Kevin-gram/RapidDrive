import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import '../nav.css';
export default function Navbar() {
    return (
        <div className="text-white font-xyz px-10 items-center justify-between w-full flex flex-row fixed top-0 right-0 left-0 z-10">
            <div className="w-1/2">
                <h1 className="text-xl font-abc">Rapidriv</h1>
            </div>
            <div className="hidden md:flex gap-10 lg:justify-between ">
                <Link to="/" className="border-b border-gray-500 border-dashed">Home</Link>
                <a href="#about"> AboutUs</a>
                <a href="#my-div"> Companies</a>
                <Link to="/Drivers">Drivers</Link>
                <Link to="/Jobs">Jobs</Link>
                <Link to="/login">
                    <button className="bg-navy rounded-sm shadow-xl justify-center w-16 hover:bg-green">
                        Login
                    </button>
                </Link>
            </div>
            <IoMdMenu className="h-10 lg:hidden md:hidden" />
        </div>
    );
}
