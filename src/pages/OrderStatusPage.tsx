import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import OrderStatusSkeleton from "@/components/skeletons/OrderStatusSkeleton";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
    const { orders, isPending } = useGetMyOrders();

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
        <div className="space-y-10">
            {orders.map((order) => (
                <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
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
            ))}
        </div>
    );
};

export default OrderStatusPage;
