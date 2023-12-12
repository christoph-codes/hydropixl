import type { ReactNode } from "react";
import { irrigationContent } from "./content/_irrigation";
import { consultingContent } from "./content/_consulting";
import { landscapeDesignContent } from "./content/_landscapeDesign";
import type { IPageHeader } from "~/components/PageHeader";

export type TContentSet = {
	title?: string;
	description?: string;
};

export type TFeaturedPoint = TContentSet & {
	icon?: string;
};

export type TImagePhotos = {
	src?: string;
	alt?: string;
};

export type TServiceContentItems = {
	header?: IPageHeader;
	leadingTitle?: string;
	leadingDescription?: string;
	featuredPoints?: boolean;
	featuredPointsContent?: TFeaturedPoint[];
	numberedPoints?: boolean;
	numberedPointsContent?: TContentSet[];
	secondaryTitle?: string;
	secondaryDescription?: string;
	serviceGridPhotos?: TImagePhotos[];
	serviceContent?: ReactNode;
	footer: TContentSet;
};

export type TServiceContent = {
	[x: string]: TServiceContentItems;
};

export const servicesContent: TServiceContent = {
	irrigation: irrigationContent,
	landscapeDesign: landscapeDesignContent,
	consulting: consultingContent,
};
