<template>
    <div>
      <RecipePreviewList :recipes="recipes" :myrecipe=true :columns=2 :amount=4 title="My Recipes" :favorable=false class="Recipes center" />
    </div>
  </template>
  
  <script>
  import RecipePreviewList from "../components/RecipePreviewList";
  
  export default {
    name: 'MyRecipesPage',
    components: {
      RecipePreviewList,
    },
    data() {
      return {
        recipes: []
      };
    },
    mounted() {
      this.updateRecipes();
    },
    methods: {
    async updateRecipes() {
      const response = await this.getmyRecipePreview();
      if (response.status === 200) {
        this.recipes = response.data;
      }
      else
        alert("Error getting my recipes")
    },

    async getmyRecipePreview() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain +"/users/addmyRecipe"
        );
        return response;
      } catch (error) {
        console.error("Error fetching my recipes:", error);
        return { status: error.response.status, response: error.response.data };
      }
    }
  }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  
