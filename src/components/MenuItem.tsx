import type { MenuItemType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import MenuItemCounter from "./MenuItemCounter";
import { memo } from "react";

type Props = {
    menuItem: MenuItemType;
    count: number;
    onAdd: () => void;
    onRemove: () => void;
};

const MenuItem = ({ menuItem, onAdd, onRemove, count }: Props) => {
    return (
        <Card className="relative">
            <CardHeader>
                <CardTitle>{menuItem.name}</CardTitle>
            </CardHeader>
            <CardContent className="font-bold">
                ₹{(menuItem.price / 100).toFixed(2)}
            </CardContent>
            <MenuItemCounter
                onIncrement={onAdd}
                onDecrement={onRemove}
                count={count}
            />
        </Card>
    );
};

export default memo(MenuItem);
