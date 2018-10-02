export class Nutrition {
  id: number;
  firstName: string;
  lastName: string;
  currentWeight: number;
  desiredWeight: number;
  protein: number;
  carbs: number;
  fat: number;
  notes: string;
  completed: any;

  constructor(
    id?: number,
    firstName?: string,
    lastName?: string,
    currentWeight?: number,
    desiredWeight?: number,
    protein?: number,
    carbs?: number,
    fat?: number,
    notes?: string) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.currentWeight = currentWeight;
      this.desiredWeight = desiredWeight;
      this.protein = protein;
      this.carbs = carbs;
      this.fat = fat;
      this.notes = notes;
    }
}
