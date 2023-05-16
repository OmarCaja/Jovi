import { type FoodCardItem } from './foodCardItem'

export interface FoodSectionItem {
  id: string
  title: string
  foodCards: FoodCardItem[]
}
