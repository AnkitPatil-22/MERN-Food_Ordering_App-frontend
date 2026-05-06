import { Suspense } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
    children: React.ReactNode;
    showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            {showHero && <Hero />}
            <main className="container mx-auto flex-1 py-10 px-4">
                <Suspense
                    fallback={
                        <div className="flex items-center justify-center h-[50vh]">
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-10 w-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                                <span className="text-lg font-medium text-gray-500 animate-pulse">
                                    Loading Page...
                                </span>
                            </div>
                        </div>
                    }
                >
                    {children}
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
