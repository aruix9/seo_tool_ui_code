import Logo from "./logo";
import PrimaryNavigation from "./primaryNavigation";

const Header = () => {
    return (
        <header className="py-2 bg-purple-200">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <Logo />
                    <PrimaryNavigation />
                </div>
            </div>
        </header>
    )
}

export default Header;