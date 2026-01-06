"use client";

const SORT_LIST = [
    {id: 0, name: "Price low to high"},
    {id: 1, name: "Price high to low"},
];

export const SortFilter = () => {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="m-0 p-0 uppercase text-sm tracking-wider font-semibold">SORT</h1>
            <ul className="flex flex-col gap-3">
                {SORT_LIST.map((item, index) => {
                    return (
                        <li key={index}
                            className="text-xs uppercase tracking-wider cursor-pointer hover:opacity-40">
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}