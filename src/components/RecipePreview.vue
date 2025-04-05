<template>
  <div class="card-container"> 
    <b-card
      :to="{ name:'recipe', params: { recipeId: recipe.id, myrecipe:myrecipe, family:family, recipe:recipe } }"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-1 card"
    >
      <template #header>
        <b-link :to="{ name:'recipe', params: { recipeId: recipe.recipeid, myrecipe: myrecipe, family:family, recipe:recipe, favorable:favorable } }"><button @click="markAsViewed" class="text-dark invisible-button">{{ recipe.title }}</button></b-link>
      </template>
      <b-link :to="{ name:'recipe', params: { recipeId: recipe.recipeid, myrecipe: myrecipe, family:family, recipe:recipe } }">
          <b-card-img 
            :src="recipe.image"
            alt="Image"
            top
            class="card-image"
            @click="markAsViewed"
          ></b-card-img>
        </b-link>
      <b-list-group flush>
        <b-list-group-item>Ready in {{ recipe.readyInMinutes }} minutes</b-list-group-item>
        <b-list-group-item>{{ recipe.aggregateLikes }} likes</b-list-group-item>
      </b-list-group>
      <template #footer>
        <icons :favorable="favorable" :recipe="recipe"></icons>
      
      </template>
    </b-card>
  </div>
</template>

<script>

import icons from './Icons.vue';
export default {
  // mounted() {
  //   this.axios.get(this.recipe.image).then((i) => {
  //     this.image_load = true;
  //   });
  // },
  

  name: 'RecipePreviewCard',
  components: {
    icons
  },
  props: {
    recipe: {
      type: Object,
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
    favorable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    markAsViewed() {
        let viewedRecipes = JSON.parse(localStorage.getItem('viewedRecipes')) || [];
        if (!viewedRecipes.includes(this.recipe.recipeid)) {
            viewedRecipes.push(this.recipe.recipeid);
            localStorage.setItem('viewedRecipes', JSON.stringify(viewedRecipes));
            this.isViewed = true; 
        }
    }
  }
};
</script>

<style scoped>

.footer-icons {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  gap: 5px; /* Space between icons */
}

.card-image {
  height: 10rem; /* Adjust height as needed */
}

.card {
  width: 21rem;
  height: 28rem;
}



.invisible-button {
  background-color: transparent; /* Makes button background invisible */
  border: none; /* Removes button border */
  padding: 0; /* Removes button padding (optional) */
  color: inherit; /* Inherits text color from parent */
  font-weight: bold;
  font-size: 1rem;
  
}

</style>
