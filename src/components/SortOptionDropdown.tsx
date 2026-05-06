import React from "react";
import { Loader2 } from "lucide-react";

import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
    onChange: (value: string) => void;
    sortOption: string;
    isLoading: boolean;
};

const SORT_OPTIONS = [
    {
        label: "Best match",
        value: "bestMatch",
    },
    {
        label: "Delivery price",
        value: "deliveryPrice",
    },
    {
        label: "Estimated delivery time",
        value: "estimatedDeliveryTime",
    },
];

const SortOptionDropdown = ({ onChange, sortOption, isLoading }: Props) => {
    const selectedSortLabel =
        SORT_OPTIONS.find((option) => option.value === sortOption)?.label ??
        SORT_OPTIONS[0].label;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    disabled={isLoading}
                    className="gap-2"
                >
                    {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                    Sort by: {selectedSortLabel}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {SORT_OPTIONS.map((option) => (
                    <DropdownMenuItem
                        key={option.value}
                        className="cursor-pointer"
                        onClick={() => onChange(option.value)}
                    >
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default React.memo(SortOptionDropdown);
