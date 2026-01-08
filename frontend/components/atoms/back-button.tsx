"use client";

import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";

export const BackButton = () => {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.back()}
            variant="link"
            size="sm"
            className="flex items-center p-0 text-xs tracking-widest gap-1 uppercase hover:bg-transparent hover:text-gray-600"
        >
            <ChevronLeft className="h-4 w-4"/>
            Back
        </Button>
    );
}