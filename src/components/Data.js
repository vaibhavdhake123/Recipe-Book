const RecipeData = [
    {
        id: 1,
        name: "Vegetarian Chili",
        "category": "Vegetarian",
        ingredients: [
            "1 onion",
            "2 cloves of garlic",
            "1 bell pepper",
            "2 carrots",
            "1 zucchini",
            "1 can black beans",
            "1 can kidney beans",
            "1 can diced tomatoes",
            "2 tbsp chili powder",
            "1 tsp cumin",
            "Salt and pepper",
            "Olive oil"
        ],
        instructions: [
            "Chop the onion, garlic, bell pepper, carrots, and zucchini.",
            "Heat olive oil in a pot and sauté the onion and garlic until soft.",
            "Add the bell pepper, carrots, and zucchini, cook for 5 minutes.",
            "Add the beans, diced tomatoes, chili powder, cumin, salt, and pepper.",
            "Simmer for 20-25 minutes, stirring occasionally.",
            "Serve hot, optionally with toppings like avocado, cheese, or sour cream."
        ],
        image: require('../assets/images/vegan_chill.jpg')
    },
    {
        id: 2,
        name: "Stuffed Bell Peppers",
        "category": "Vegetarian",
        ingredients: [
            "4 bell peppers",
            "1 cup quinoa",
            "1 can black beans",
            "1 cup corn kernels",
            "1 onion",
            "2 cloves of garlic",
            "1 tsp cumin",
            "1 tsp paprika",
            "Salt and pepper",
            "1 cup shredded cheese",
            "Olive oil"
        ],
        instructions: [
            "Preheat the oven to 375°F (190°C).",
            "Cook the quinoa according to package instructions.",
            "Chop the onion and garlic.",
            "Heat olive oil in a pan and sauté the onion and garlic until soft.",
            "Add the black beans, corn, cooked quinoa, cumin, paprika, salt, and pepper. Mix well.",
            "Cut the tops off the bell peppers and remove the seeds.",
            "Stuff the bell peppers with the quinoa mixture and place them in a baking dish.",
            "Top with shredded cheese.",
            "Bake for 25-30 minutes, until the peppers are tender and the cheese is melted.",
            "Serve hot."
        ],
        image: require('../assets/images/stuffed_bell_peppers.jpg')
    },
    {
        id: 3,
        name: "Vegetable Stir Fry",
        "category": "Vegetarian",
        ingredients: [
            "1 broccoli",
            "2 carrots",
            "1 bell pepper",
            "1 onion",
            "2 cloves of garlic",
            "2 tbsp soy sauce",
            "1 tbsp sesame oil",
            "Cooked rice"
        ],
        instructions: [
            "Chop all the vegetables.",
            "Stir fry the garlic and onion in sesame oil.",
            "Add the rest of the vegetables and stir fry for 5-7 minutes.",
            "Add soy sauce and cook for another 2 minutes.",
            "Serve with cooked rice."
        ],
        image: require('../assets/images/vegetable_stir_fry.jpg')
    },
    {
        id: 4,
        name: "Vegetarian Lasagna",
        "category": "Vegetarian",
        ingredients: [
            "12 lasagna noodles",
            "2 cups ricotta cheese",
            "2 cups shredded mozzarella cheese",
            "1/2 cup grated Parmesan cheese",
            "1 egg",
            "2 cups marinara sauce",
            "2 zucchinis",
            "1 eggplant",
            "1 bell pepper",
            "1 onion",
            "2 cloves of garlic",
            "Salt and pepper",
            "Olive oil"
        ],
        instructions: [
            "Preheat the oven to 375°F (190°C).",
            "Chop the zucchinis, eggplant, bell pepper, onion, and garlic.",
            "Heat olive oil in a pan and sauté the vegetables until soft. Season with salt and pepper.",
            "Cook the lasagna noodles according to package instructions.",
            "In a bowl, mix the ricotta cheese, egg, and Parmesan cheese.",
            "Spread a layer of marinara sauce in a baking dish.",
            "Place a layer of lasagna noodles over the sauce.",
            "Spread a layer of the ricotta mixture over the noodles.",
            "Add a layer of sautéed vegetables and a layer of mozzarella cheese.",
            "Repeat the layers until all ingredients are used, ending with a layer of marinara sauce and mozzarella cheese.",
            "Cover with foil and bake for 25 minutes.",
            "Remove the foil and bake for an additional 10 minutes, until the cheese is golden and bubbly.",
            "Let it cool for a few minutes before serving."
        ],
        image: require('../assets/images/vegetarian_lasagna.jpg')
    },
    {
        id: 5,
        name: "Caprese Salad",
        "category": "Salad",
        ingredients: [
            "4 tomatoes",
            "1 ball of fresh mozzarella",
            "1 bunch of fresh basil",
            "2 tbsp balsamic vinegar",
            "3 tbsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Slice the tomatoes and mozzarella.",
            "Arrange the tomato and mozzarella slices on a plate, alternating them.",
            "Tuck fresh basil leaves between the slices.",
            "Drizzle with olive oil and balsamic vinegar.",
            "Season with salt and pepper.",
            "Serve immediately."
        ],
        image: require('../assets/images/caprese_salad.jpg')
    },
    {
        "id": 6,
        "name": "Margarita",
        "category": "Drink",
        "ingredients": [
            "2 oz tequila",
            "1 oz lime juice",
            "1 oz triple sec",
            "Salt for rimming the glass",
            "Lime wedge for garnish"
        ],
        "instructions": [
            "Rub the rim of a glass with a lime wedge and dip in salt.",
            "Combine tequila, lime juice, and triple sec in a shaker with ice.",
            "Shake well and strain into the prepared glass.",
            "Garnish with a lime wedge."
        ],
        "image": require('../assets/images/margarita.jpg')
    },
    {
        "id": 7,
        "name": "Chocolate Cake",
        "category": "Dessert",
        "ingredients": [
            "1 3/4 cups all-purpose flour",
            "1 1/2 cups sugar",
            "3/4 cup cocoa powder",
            "1 1/2 tsp baking powder",
            "1 1/2 tsp baking soda",
            "1 tsp salt",
            "2 eggs",
            "1 cup whole milk",
            "1/2 cup vegetable oil",
            "2 tsp vanilla extract",
            "1 cup boiling water"
        ],
        "instructions": [
            "Preheat oven to 350°F (175°C).",
            "Grease and flour two 9-inch round baking pans.",
            "In a large bowl, combine flour, sugar, cocoa powder, baking powder, baking soda, and salt.",
            "Add eggs, milk, oil, and vanilla; beat on medium speed for 2 minutes.",
            "Stir in boiling water (batter will be thin).",
            "Pour batter into prepared pans.",
            "Bake for 30-35 minutes or until a toothpick inserted in the center comes out clean.",
            "Cool in pans for 10 minutes; remove to wire racks to cool completely."
        ],
        "image": require('../assets/images/chocolate_cake.jpg')
    },
    {
        "id": 8,
        "name": "Strawberry Smoothie",
        "category": "Drink",
        "ingredients": [
            "1 cup strawberries",
            "1 banana",
            "1/2 cup yogurt",
            "1/2 cup milk",
            "1 tbsp honey"
        ],
        "instructions": [
            "Combine all ingredients in a blender.",
            "Blend until smooth.",
            "Pour into a glass and serve immediately."
        ],
        "image": require('../assets/images/strawberry_smoothie.jpg')
    },
    {
        "id": 9,
        "name": "Vanilla Ice Cream",
        "category": "Dessert",
        "ingredients": [
            "2 cups heavy cream",
            "1 cup whole milk",
            "3/4 cup sugar",
            "1 tbsp vanilla extract",
            "Pinch of salt"
        ],
        "instructions": [
            "In a medium bowl, whisk together cream, milk, sugar, vanilla extract, and salt until the sugar is dissolved.",
            "Pour the mixture into an ice cream maker and churn according to the manufacturer's instructions.",
            "Transfer to a container and freeze for at least 2 hours before serving."
        ],
        "image": require('../assets/images/vanilla_ice_cream.jpg')
    },
    {
        "id": 10,
        "name": "Caesar Salad",
        "category": "Salad",
        "ingredients": [
            "1 head romaine lettuce",
            "1/2 cup grated Parmesan cheese",
            "1 cup croutons",
            "1/2 cup Caesar dressing",
            "Salt and pepper"
        ],
        "instructions": [
            "Wash and chop the romaine lettuce.",
            "In a large bowl, combine lettuce, Parmesan cheese, and croutons.",
            "Add Caesar dressing and toss to coat.",
            "Season with salt and pepper to taste.",
            "Serve immediately."
        ],
        "image": require('../assets/images/caesar_salad.jpg')
    },
    {
        "id": 11,
        "name": "Mojito",
        "category": "Drink",
        "ingredients": [
            "10 fresh mint leaves",
            "1/2 lime, cut into 4 wedges",
            "2 tbsp white sugar",
            "1 cup ice cubes",
            "1 1/2 oz white rum",
            "1/2 cup club soda"
        ],
        "instructions": [
            "Muddle mint leaves and 1 lime wedge in a sturdy glass.",
            "Add 2 more lime wedges and sugar, and muddle again to release the lime juice.",
            "Fill the glass with ice and pour the rum over the ice.",
            "Fill the glass with club soda, stir well, and garnish with the remaining lime wedge."
        ],
        "image": require('../assets/images/mojito.jpg')
    },
    {
        "id": 12,
        "name": "Blueberry Muffins",
        "category": "Dessert",
        "ingredients": [
            "1 1/2 cups all-purpose flour",
            "3/4 cup sugar",
            "1/2 tsp salt",
            "2 tsp baking powder",
            "1/3 cup vegetable oil",
            "1 egg",
            "1/3 cup milk",
            "1 cup fresh blueberries"
        ],
        "instructions": [
            "Preheat oven to 400°F (200°C).",
            "Grease a muffin tin or line with paper liners.",
            "In a large bowl, combine flour, sugar, salt, and baking powder.",
            "In another bowl, combine oil, egg, and milk; add to flour mixture and stir just until moistened.",
            "Fold in blueberries.",
            "Fill muffin cups 2/3 full and bake for 20-25 minutes, or until a toothpick inserted into the center comes out clean."
        ],
        "image": require('../assets/images/blueberry_muffins.jpg')
    },
    {
        "id": 13,
        "name": "Greek Salad",
        "category": "Salad",
        "ingredients": [
            "3 tomatoes, diced",
            "1 cucumber, sliced",
            "1/2 red onion, sliced",
            "1/2 cup Kalamata olives",
            "1/2 cup feta cheese, crumbled",
            "3 tbsp olive oil",
            "1 tbsp red wine vinegar",
            "Salt and pepper",
            "1 tsp dried oregano"
        ],
        "instructions": [
            "In a large bowl, combine tomatoes, cucumber, red onion, olives, and feta cheese.",
            "In a small bowl, whisk together olive oil, red wine vinegar, salt, pepper, and oregano.",
            "Pour dressing over the salad and toss to combine.",
            "Serve immediately."
        ],
        "image": require('../assets/images/greek_salad.jpg')
    },
    {
        "id": 14,
        "name": "Pina Colada",
        "category": "Drink",
        "ingredients": [
            "2 oz white rum",
            "1 oz coconut cream",
            "1 oz heavy cream",
            "6 oz fresh pineapple juice",
            "1/2 cup crushed ice"
        ],
        "instructions": [
            "Combine all ingredients in a blender.",
            "Blend until smooth.",
            "Pour into a chilled glass and garnish with a pineapple slice and maraschino cherry."
        ],
        "image": require('../assets/images/pina_colada.jpg')
    },
    {
        "id": 15,
        "name": "Avocado Toast",
        "category": "Breakfast",
        "ingredients": [
            "2 slices of bread, toasted",
            "1 ripe avocado",
            "Salt and pepper",
            "1 tbsp olive oil",
            "1 tsp lemon juice",
            "Red pepper flakes (optional)"
        ],
        "instructions": [
            "Mash the avocado in a bowl and add salt, pepper, olive oil, and lemon juice.",
            "Spread the avocado mixture onto the toasted bread.",
            "Sprinkle with red pepper flakes, if desired.",
            "Serve immediately."
        ],
        "image": require('../assets/images/avocado_toast.jpg')
    },
    {
        "id": 16,
        "name": "Grilled Cheese Sandwich",
        "category": "Vegetarian",
        "ingredients": [
            "4 slices of bread",
            "2 cups shredded cheese",
            "2 tbsp butter"
        ],
        "instructions": [
            "Butter one side of each slice of bread.",
            "Place two slices, buttered side down, in a skillet over medium heat.",
            "Add 1 cup of shredded cheese to each slice in the skillet.",
            "Top with the remaining slices of bread, buttered side up.",
            "Cook until the bread is golden brown and the cheese is melted, flipping once.",
            "Serve immediately."
        ],
        "image": require('../assets/images/grilled_cheese_sandwich.jpg')
    },
    {
        "id": 17,
        "name": "Lemonade",
        "category": "Drink",
        "ingredients": [
            "1 cup lemon juice",
            "1 cup sugar",
            "5 cups water",
            "Ice cubes",
            "Lemon slices for garnish"
        ],
        "instructions": [
            "In a pitcher, combine lemon juice and sugar. Stir until the sugar is dissolved.",
            "Add water and stir to combine.",
            "Serve over ice and garnish with lemon slices."
        ],
        "image": require('../assets/images/lemonade.jpg')
    },
    {
        "id": 18,
        "name": "Pancakes",
        "category": "Breakfast",
        "ingredients": [
            "1 1/2 cups all-purpose flour",
            "3 1/2 tsp baking powder",
            "1 tsp salt",
            "1 tbsp sugar",
            "1 1/4 cups milk",
            "1 egg",
            "3 tbsp butter, melted"
        ],
        "instructions": [
            "In a large bowl, sift together the flour, baking powder, salt, and sugar.",
            "Make a well in the center and pour in the milk, egg, and melted butter; mix until smooth.",
            "Heat a lightly oiled griddle or frying pan over medium-high heat.",
            "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
            "Brown on both sides and serve hot."
        ],
        "image": require('../assets/images/pancakes.jpg')
    },

];

export default RecipeData;
