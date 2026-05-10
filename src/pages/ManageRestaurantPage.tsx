import { lazy, Suspense, useMemo } from "react";
import {
    useCreateMyRestaurant,
    useGetMyRestaurant,
    useGetMyRestaurantOrders,
    useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderItemCard from "@/components/OrderItemCard";
import SkeletonBase from "@/components/skeletons/SkeletonBase";
import RestaurantFormSkeleton from "@/components/skeletons/RestaurantFormSkeleton";
import OrdersSkeleton from "@/components/skeletons/OrdersSkeleton";

const ManageRestaurantForm = lazy(
    () =>
        import("@/components/forms/manage-restaurant-form/ManageRestaurantForm"),
);

const ManageRestaurantPage = () => {
    const { createRestaurant, isPending: isCreateLoading } =
        useCreateMyRestaurant();
    const { restaurant, isPending: isGetLoading } = useGetMyRestaurant();
    const { updateRestaurant, isPending: isUpdateLoading } =
        useUpdateMyRestaurant();
    const { orders, isPending: isOrdersLoading } = useGetMyRestaurantOrders();

    const groupedOrders = useMemo(() => {
        if (!orders) return { active: [], completed: [] };
        return {
            active: orders.filter((o) => o.status !== "delivered"),
            completed: orders.filter((o) => o.status === "delivered"),
        };
    }, [orders]);

    const isEditing = !!restaurant;

    if (isGetLoading) {
        return (
            <div className="space-y-10">
                <div className="flex gap-2 border-b pb-2">
                    <SkeletonBase className="h-10 w-32" />
                    <SkeletonBase className="h-10 w-32" />
                </div>
                <RestaurantFormSkeleton />
            </div>
        );
    }

    return (
        <Tabs defaultValue="orders">
            <TabsList>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="manage-restaurant">
                    Manage Restaurant
                </TabsTrigger>
            </TabsList>
            <TabsContent
                value="orders"
                className="space-y-5 bg-gray-50 p-10 rounded-lg"
            >
                {isOrdersLoading ? (
                    <OrdersSkeleton />
                ) : (
                    <div className="space-y-5 bg-gray-50 p-10 rounded-lg">
                        <h2 className="text-2xl font-bold underline">
                            Active Orders ({groupedOrders.active.length})
                        </h2>
                        {groupedOrders.active.map((order) => (
                            <OrderItemCard key={order._id} order={order} />
                        ))}

                        {groupedOrders.completed.length > 0 && (
                            <>
                                <h2 className="text-2xl font-bold underline pt-10">
                                    Completed Orders
                                </h2>
                                {groupedOrders.completed.map((order) => (
                                    <OrderItemCard
                                        key={order._id}
                                        order={order}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                )}
            </TabsContent>
            <TabsContent value="manage-restaurant">
                <Suspense fallback={<RestaurantFormSkeleton />}>
                    <ManageRestaurantForm
                        restaurant={restaurant}
                        onSave={isEditing ? updateRestaurant : createRestaurant}
                        isLoading={isCreateLoading || isUpdateLoading}
                    />
                </Suspense>
            </TabsContent>
        </Tabs>
    );
};

export default ManageRestaurantPage;
