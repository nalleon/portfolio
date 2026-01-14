import type { BaseCard } from "./BaseCard";

export interface FrameworkIcon {
    src: string;
    alt: string;
}

export interface FrameworkCard extends BaseCard {
    icons: FrameworkIcon[];
}
