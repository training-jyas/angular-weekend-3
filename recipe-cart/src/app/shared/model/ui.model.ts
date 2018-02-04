export class RecipeModel {
    name: string;
    description: string;
    imagePath: string;
    ingredients: Array<any>;
    constructor(
        name: string,
        description: string,
        imagePath: string,
        ingredients: Array<any>) {
            this.name = name;
            this.description = description;
            this.imagePath = imagePath;
            this.ingredients = ingredients;
    }
}

export class IngredientModel {
    constructor(
        public name: string,
        public quantity: number
    ) {}
}
