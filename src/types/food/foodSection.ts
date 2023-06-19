import type { FoodCardItem } from '../food/foodCardItem'

export type FoodSectionItem = {
  id: string
  title: string
  foodCards: FoodCardItem[]
}
