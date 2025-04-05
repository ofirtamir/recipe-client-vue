import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: Main,
  },
  {
    path: "/RegisterPage",
    name: "RegisterPage",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/AboutPage",
    name: "AboutPage",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/SearchPage",
    name: "SearchPage",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/RecipeViewPage/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/FavoritesPage",
    name: "FavoritesPage",
    component: () => import("./pages/FavoritesPage"),
  },
  {
    path: "/MyRecipesPage",
    name: "MyRecipesPage",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/FamilyRecipesPage",
    name: "FamilyRecipesPage",
    component: () => import("./pages/FamilyRecipesPage"),
  },
  {
    // path: "/recipePreparingPage/:recipeId",
    path: "/recipePreparingPage",
    name: "recipePlanning",
    component: () => import("./pages/RecipePreparingPage"),
  },
  {
    path: "/mealPlanningPage",
    name: "mealPlanning",
    component: () => import("./pages/MealPlanningPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
