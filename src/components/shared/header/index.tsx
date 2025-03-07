import Image from "next/image";
import PrimaryNavigation from "./primaryNavigation";

const Header = () => {
    return (
        <header className="py-2 bg-purple-200">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <Image
                    src='/images/6s-logo.png'
                    width={140}
                    height={46}
                    className="object-cover"
                    alt="Butterswipe"/>
                    <PrimaryNavigation />
                </div>
            </div>
        </header>
    )
}

export default Header;