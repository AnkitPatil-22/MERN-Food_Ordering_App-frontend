import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "./layouts/layout";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import DetailsSkeleton from "./components/skeletons/DetailsSkeleton";
import HomeSkeleton from "./components/skeletons/HomeSkeleton";

// LAZY IMPORTS (Code Splitting)
const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));
const UserProfilePage = lazy(() => import("./pages/UserProfilePage"));
const ManageRestaurantPage = lazy(() => import("./pages/ManageRestaurantPage"));
const OrderStatusPage = lazy(() => import("./pages/OrderStatusPage"));

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout showHero>
                        <Suspense fallback={<HomeSkeleton />}>
                            <HomePage />
                        </Suspense>{" "}
                    </Layout>
                }
            />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route
                path="/search/:city"
                element={
                    <Layout showHero={false}>
                        <SearchPage />
                    </Layout>
                }
            />
            <Route
                path="/detail/:restaurantId"
                element={
                    <Layout showHero={false}>
                        <Suspense fallback={<DetailsSkeleton />}>
                            <DetailsPage />
                        </Suspense>
                    </Layout>
                }
            />
            <Route element={<ProtectedRoutes />}>
                <Route
                    path="/user-profile"
                    element={
                        <Layout>
                            <UserProfilePage />
                        </Layout>
                    }
                />
                <Route
                    path="/manage-restaurant"
                    element={
                        <Layout>
                            <ManageRestaurantPage />
                        </Layout>
                    }
                />
                <Route
                    path="/order-status"
                    element={
                        <Layout>
                            <OrderStatusPage />
                        </Layout>
                    }
                />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
