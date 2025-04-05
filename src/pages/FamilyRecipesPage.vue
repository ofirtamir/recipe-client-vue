<template>
  <div>
    <RecipePreviewList :recipes="recipes" :columns="2" :amount="4" :family=true title="Family Recipe" class="Recipes center" :favorable=false />
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import axios from 'axios';

export default {
  name: 'FamilyRecipesPage',
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
      const response = await this.getFamilyRecipePreview();
      if (response.status === 200) {
        this.recipes = response.data;
      }
      else
        alert("Error getting family recipes")
    },

    async getFamilyRecipePreview() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain +"/users/familyRecipes"
        );
        return response;
      } catch (error) {
        console.error("Error fetching family recipes:", error);
        return { status: error.response.status, response: error.response.data };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
