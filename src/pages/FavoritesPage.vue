<template>
  <div>
    <RecipePreviewList :recipes="recipes" :columns=2 :amount=4 title="Favorites" class="Recipes center" />
  </div>
</template>

<script>
import axios from 'axios';
import RecipePreviewList from "../components/RecipePreviewList";

export default {
  name: 'FavoritesPage',
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
      const response = await this.getFavoritesRecipePreview();
      if (response.status === 200) {
        this.recipes = response.data;
      }
      else
        alert("Error getting favorites recipes")
    },
    async getFavoritesRecipePreview() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain +"/users/favoritesrecipe"
        );
        return response;
      } catch (error) {
        console.error("Error fetching favorites recipes:", error);
        return { status: error.response.status, response: error.response.data };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
