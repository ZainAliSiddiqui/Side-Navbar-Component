import { Dispatch, SetStateAction } from "react";

export type TlinksProps = {
    data: {
        title: string,
        index: number,
        href: string;
    };
    className: string;
    isActive: boolean,
    setSelectedIndicator: Dispatch<SetStateAction<string>>;
};