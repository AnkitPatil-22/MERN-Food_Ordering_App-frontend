import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Header = () => {
    const { getAccessTokenSilently, logout, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            getAccessTokenSilently().catch((err) => {
                console.error("Session invalid/expired", err);
                // This force-clears the 'isAuthenticated' state you are using below
                logout({ logoutParams: { returnTo: window.location.origin } });
            });
        }
    }, [isAuthenticated, getAccessTokenSilently, logout]);

    return (
        <div className="border-b-2 border-b-orange-500 py-6 px-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link
                    to="/"
                    className="text-3xl font-bold tracking-tight text-orange-500"
                >
                    MernEats. com
                </Link>
                <div className="md:hidden">
                    <MobileNav />
                </div>
                <div className="hidden md:block">
                    <MainNav />
                </div>
            </div>
        </div>
    );
};

export default Header;
