<template>
  <div class="container">
     <RecipePage :recipe=recipe :favorable="favorable" />
  </div>
</template>

<script>

import RecipePage from "../components/RecipePage.vue";
import axios from 'axios';

export default {
  props: {
    recipeId: {
      type: [String, Number],
      required: true
    },
    myrecipe: {
      type: Boolean,
      required: false,
      default: false
    },
    family: {
      type: Boolean,
      required: false,
      default: false
    },
    recipe: {
      type: Object,
      required: true
    },
    favorable: {
      type: Boolean,
      default: true
    }
  },
  components: {
    RecipePage
  },
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    this.recipeId = this.$route.params.recipeId;
    this.favorable = this.$route.params.favorable;
    if (this.$route.params.myrecipe)
      this.myrecipe = this.$route.params.myrecipe;
    if (this.$route.params.family)
      this.family = this.$route.params.family;
    if (this.$route.params.recipe)
      this.recipe = this.$route.params.recipe;

    try {
      let results, response;
      if (this.family || this.myrecipe){ //if the recipe is from the family or my recipe, so show the recipe sent
        results = this.recipe;
      }
      else{ //else search in the API for more details about the recipe
        results = await axios.get(this.$root.store.server_domain + "/recipes/" + this.recipeId);
        results = results.data;
      }
      this.recipe = results;
    } catch (error) {
      alert(error)
    }
  },
  methods: {
    goToMealPreparationPage() {
      this.$router.push({ name: 'recipePlanning' });
      // this.$router.push({ name: 'MealPreparingPage', params: { recipeId: this.$route.params.recipeId } });

    }
  }
};
</script>
