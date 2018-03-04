export class RecipeModel {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    ingredients: Array<any>;
    constructor(
        id: string,
        name: string,
        description: string,
        imagePath: string,
        ingredients: Array<any>) {
            this.id = id;
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
