import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
    min?: number;
    max?: number;
};

const MenuItemCounter = ({
    count,
    onIncrement,
    onDecrement,
    min = 0,
    max,
}: Props) => {
    // CASE 1: count === 0 → show Add to Cart
    if (count === 0) {
        return (
            <Button
                onClick={(e) => {
                    e.stopPropagation();
                    onIncrement();
                }}
                className="px-5 py-1 cursor-pointer absolute right-4 top-11"
                variant="outline"
            >
                Add to Cart
            </Button>
        );
    }

    // CASE 2: count > 0 → show counter
    return (
        <div className="flex items-center gap-3 border rounded-full px-3 py-1 absolute right-4 top-11">
            <button
                onClick={onDecrement}
                disabled={count <= min}
                className="p-1 disabled:opacity-40 cursor-pointer"
            >
                <Minus size={16} />
            </button>

            <span className="min-w-[24px] text-center font-medium">
                {count}
            </span>

            <button
                onClick={onIncrement}
                disabled={max !== undefined && count >= max}
                className="p-1 disabled:opacity-40 cursor-pointer"
            >
                <Plus size={16} />
            </button>
        </div>
    );
};

export default MenuItemCounter;
