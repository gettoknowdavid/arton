"use client";

import {SearchIcon, ShoppingCart} from "lucide-react";
import {cn} from "@/lib/utils";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import React from "react";
import useDebounce from "@/lib/use-debounce";
import searchProducts from "@/lib/queries/search-products";
import {Input} from "@/components/ui/input";
import {ProductItem} from "@/components/molecules/product-item";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export const Actions = () => {
    return (
        <div className="flex flex-row items-center gap-4">
            <SearchBox/>
            <CartButton/>
        </div>
    );
}

const SearchBox = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [open, setOpen] = React.useState<boolean>(false);
    const [query, setQuery] = React.useState<string>('');
    const [results, setResults] = React.useState<any[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const debouncedQuery = useDebounce(query, 300);
    const isInitialMount = React.useRef(true);

    // Initialize query from URL only on mount
    React.useEffect(() => {
        const searchQuery = searchParams.get('search');
        if (searchQuery) {
            setQuery(searchQuery);
            setOpen(true);
        }
        isInitialMount.current = false;
    }, []);

    // Update URL when debounced query changes (skip initial mount)
    React.useEffect(() => {
        if (isInitialMount.current || !open) return;

        const params = new URLSearchParams(searchParams.toString());

        if (debouncedQuery) {
            params.set('search', debouncedQuery);
        } else {
            params.delete('search');
        }

        const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
        router.replace(newUrl, {scroll: false});
    }, [debouncedQuery, open]);

    // Fetch search results
    React.useEffect(() => {
        if (!debouncedQuery) {
            setResults([]);
            return;
        }

        setIsLoading(true);

        searchProducts({query: debouncedQuery})
            .then(products => {
                setResults(products || []);
                setIsLoading(false);
            }).catch(err => {
            console.error(err);
            setIsLoading(false);
        });
    }, [debouncedQuery]);

    // Handle sheet close
    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
        if (!newOpen) {
            const params = new URLSearchParams(searchParams.toString());
            params.delete('search');
            const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
            router.replace(newUrl, {scroll: false});
            setQuery('');
            setResults([]);
        }
    };

    return (
        <Sheet modal={true} open={open} onOpenChange={handleOpenChange}>
            <SheetTrigger>
                <div className="flex items-center justify-center w-full h-full">
                    <SearchIcon className="flex lg:hidden"/>
                    <p className="text-sm text-foreground uppercase hidden lg:flex items-center justify-center">
                        Search
                    </p>
                </div>
            </SheetTrigger>
            <SheetContent side="top" className="top-12 text-center p-0 gap-0">
                <SheetHeader className="p-0">
                    <Input
                        autoFocus={true}
                        className="-mt-px px-3 py-0 border-foreground h-12 placeholder:uppercase"
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="What are you looking for?"
                        type="text"
                        value={query}
                    />
                    <SheetTitle className="hidden"/>
                </SheetHeader>
                <div className="relative">
                    {results.length > 0 && (
                        <ul
                            className="mt-6 px-3 pb-8 h-full flex w-full overflow-x-auto overflow-y-hidden justify-start gap-3 scroll-smooth scrollbar-thin scrollbar-thumb-foreground/20 scrollbar-track-transparent hover:scrollbar-thumb-foreground/40"
                            style={{
                                scrollbarWidth: 'thin',
                                scrollbarColor: 'rgba(0, 0, 0, 0.2) transparent'
                            }}
                        >
                            {results.map((product, index) => (
                                <li key={index} className="shrink-0 w-104">
                                    <ProductItem
                                        onClick={() => setOpen(false)}
                                        product={product}
                                        showPrice={false}
                                    />
                                </li>
                            ))}
                        </ul>
                    )}
                    {!isLoading && debouncedQuery && results.length === 0 && (
                        <div className="flex items-center justify-center h-64 text-foreground/60">
                            <p className="text-sm uppercase">No results found for "{debouncedQuery}"</p>
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}


const CartButton = () => {
    return (
        <div
            className="flex flex-row items-center justify-center w-full h-full gap-0.5 cursor-pointer hover:opacity-40 transition-all duration-500 ease-in-out">
            <ShoppingCart className="flex lg:hidden"/>
            <div
                className={cn(
                    "text-sm text-foreground uppercase",
                    "hidden lg:flex gap-1 items-center justify-center transition-colors duration-500 ease-in-out",
                )}
            >
                <p>CART</p>
                <p className="bg-foreground text-background h-3.5 w-4 flex items-center justify-center font-medium text-[9px]">
                    2
                </p>
            </div>
        </div>
    );
}