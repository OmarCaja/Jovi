import { FoodCardItem } from "./foodCardItem";

export interface FoodSectionItem {
	id: string;
	tittle: string;
	foodCards: FoodCardItem[];
}
