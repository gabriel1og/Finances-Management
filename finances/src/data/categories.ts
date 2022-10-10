import { Category } from "../types/Category"

export const categories: Category = {
    food: {
        title: 'Alimentação', color: 'red', expense: true 
    },
    rent: {
        title: 'Aluguel', color: 'orange', expense: true
    },
    salary: {
        title: 'Salário', color: 'green', expense: false
    }
}