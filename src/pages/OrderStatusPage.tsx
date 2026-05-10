import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import OrderStatusSkeleton from "@/components/skeletons/OrderStatusSkeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useMemo } from "react";

const OrderStatusPage = () => {
    const { orders, isPending } = useGetMyOrders();

    const groupedOrders = useMemo(() => {
        if (!orders) return { active: [], completed: [] };
        return {
            active: orders.filter((o) => o.status !== "delivered"),
            completed: orders.filter((o) => o.status === "delivered"),
        };
    }, [orders]);

    if (isPending) {
        return <OrderStatusSkeleton />;
    }

    if (!orders || orders.length == 0) {
        return (
            <div className="text-center py-10">
                <h2 className="text-xl font-semibold">No orders found</h2>
                <p className="text-gray-500">Go order some delicious food!</p>
            </div>
        );
    }

    return (
        <div className="space-y-16">
            {groupedOrders.active.length > 0 && (
                <div className="space-y-10">
                    <h2 className="text-2xl font-bold">Active Orders</h2>
                    {groupedOrders.active.map((order) => (
                        <OrderCard key={order._id} order={order} />
                    ))}
                </div>
            )}

            {groupedOrders.completed.length > 0 && (
                <div className="space-y-10">
                    <h2 className="text-2xl font-bold border-t pt-10">
                        Order History
                    </h2>
                    {groupedOrders.completed.map((order) => (
                        <OrderCard key={order._id} order={order} />
                    ))}
                </div>
            )}
        </div>
    );
};

const OrderCard = ({ order }: { order: any }) => (
    <div className="space-y-10 bg-gray-50 p-10 rounded-lg shadow-sm border">
        <OrderStatusHeader order={order} />
        <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
                <img
                    src={order.restaurant.imageUrl}
                    className="rounded-md object-cover h-full w-full"
                />
            </AspectRatio>
        </div>
    </div>
);

export default OrderStatusPage;
