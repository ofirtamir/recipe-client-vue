<template>
  <div>
    <b-modal
      id="new-recipe-modal"
      title="Add New Recipe"
      v-model="showModal"
      @hide="resetForm"
    >
      <b-form @submit.prevent="submitForm">
        <!-- Recipe ID
        <b-form-group label="Recipe ID:" label-for="recipe-id">
          <b-form-input
            id="recipe-id"
            v-model="recipe.recipeId"
            required
            placeholder="Enter recipe ID"
          ></b-form-input>
        </b-form-group> -->

        <!-- Recipe Title -->
        <b-form-group label="Recipe Title:" label-for="recipe-title">
          <b-form-input
            id="recipe-title"
            v-model="recipe.title"
            required
            placeholder="Enter recipe title"
          ></b-form-input>
        </b-form-group>

        <!-- Recipe Image -->
        <b-form-group label="Image URL:" label-for="recipe-image">
          <b-form-input
            id="recipe-image"
            v-model="recipe.image"
            required
            placeholder="Enter image URL"
          ></b-form-input>
        </b-form-group>

        <!-- Ready in Minutes -->
        <b-form-group label="Ready in Minutes:" label-for="recipe-readyinminutes">
          <b-form-input
            id="recipe-readyinminutes"
            v-model="recipe.readyInMinutes"
            type="number"
            required
            placeholder="Enter ready time in minutes"
          ></b-form-input>
        </b-form-group>

        <!-- Aggregate Likes -->
        <!-- <b-form-group label="Aggregate Likes:" label-for="recipe-aggregatelikes">
          <b-form-input
            id="recipe-aggregatelikes"
            v-model="recipe.aggregateLikes"
            type="number"
            required
            placeholder="Enter aggregate likes"
          ></b-form-input>
        </b-form-group> -->

        <!-- Servings -->
        <b-form-group label="Servings:" label-for="recipe-servings">
          <b-form-input
            id="recipe-servings"
            v-model="recipe.servings"
            type="number"
            required
            placeholder="Enter servings"
          ></b-form-input>
        </b-form-group>

        <!-- Vegetarian -->
          <b-form-checkbox v-model="recipe.vegetarian">
            Is Vegetarian
          </b-form-checkbox>

        <!-- Vegan -->
          <b-form-checkbox v-model="recipe.vegan">
            Is Vegan
          </b-form-checkbox>

        <!-- Gluten Free -->
          <b-form-checkbox v-model="recipe.glutenFree">
            Is Gluten Free
          </b-form-checkbox>
        </br>
        <!-- Summary -->
        <b-form-group label="Summary:" label-for="recipe-summary">
          <b-form-textarea
            id="recipe-summary"
            v-model="recipe.summary"
            required
            placeholder="Enter summary"
            rows="3"
          ></b-form-textarea>
        </b-form-group>

        <!-- Instructions -->
        <b-form-group label="Instructions:" label-for="recipe-instructions">
          <b-form-textarea
            id="recipe-instructions"
            v-model="recipe.instructions"
            required
            placeholder="Enter instructions"
            rows="3"
          ></b-form-textarea>
        </b-form-group>

        <!-- Analyzed Instructions -->
        <!-- <b-form-group label="Analyzed Instructions:" label-for="recipe-analyzedinstructions">
          <b-form-textarea
            id="recipe-analyzedinstructions"
            v-model="recipe.analyzedInstructions"
            required
            placeholder="Enter analyzed instructions"
            rows="3"
          ></b-form-textarea>
        </b-form-group> -->
        
        <!-- extendedIngredients -->
        <b-form-group label="Ingredients:" label-for="recipe-extendedIngredients">
          <b-form-textarea
            id="recipe-extendedIngredients"
            v-model="recipe.extendedIngredients"
            required
            placeholder="Enter ingredients"
            rows="3"
          ></b-form-textarea>
        </b-form-group>
      </b-form>
      <template #modal-footer="{ cancel }">
        <b-button variant="danger" @click="cancel()">Cancel</b-button>
        <b-button variant="secondary" @click="resetForm">Clear Form</b-button>
        <b-button variant="success" @click="submitForm">OK</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'; // Import axios to handle the HTTP requests

export default {
  name: "Modal",
  data() {
    return {
      showModal: false,
      recipe: {
      // recipeId: '',
      username: '',
      image: '',
      title: '',
      readyInMinutes: '',
      aggregateLikes: 0,
      servings: '',
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      summary: '',
      instructions: '',
      // analyzedInstructions: '',
      extendedIngredients: '' 
    }

    };
  },
  methods: {
    toggleModal() {
      this.recipe.username = this.$root.store.username || 'defaultUsername'; 
      this.showModal = !this.showModal;
    },
    resetForm() {
      this.recipe = {
        // recipeId: '',
        username: '',
        image: '',
        title: '',
        readyInMinutes: '',
        aggregateLikes: 0,
        servings: '',
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        summary: '',
        instructions: '',
        // analyzedInstructions: '',
        extendedIngredients: '' 
      };
    },
    async submitForm() {
  // if (!this.recipe.recipeId) {
  //   this.$bvToast.toast('Please enter the Recipe ID', {
  //     title: 'Missing Recipe ID',
  //     variant: 'warning',
  //     solid: true
  //   });
  //   return;
  // }

  if (!this.recipe.title) {
    this.$bvToast.toast('Please enter the Recipe Title', {
      title: 'Missing Recipe Title',
      variant: 'warning',
      solid: true
    });
    return;
  }

  if (!this.recipe.image) {
    this.$bvToast.toast('Please enter the Image URL', {
      title: 'Missing Image URL',
      variant: 'warning',
      solid: true
    });
    return;
  }

  if (!this.recipe.readyInMinutes) {
    this.$bvToast.toast('Please enter the Ready In Minutes', {
      title: 'Missing Ready In Minutes',
      variant: 'warning',
      solid: true
    });
    return;
  }

  // if (!this.recipe.aggregateLikes) {
  //   this.$bvToast.toast('Please enter the Aggregate Likes', {
  //     title: 'Missing Aggregate Likes',
  //     variant: 'warning',
  //     solid: true
  //   });
  //   return;
  // }

  if (!this.recipe.servings) {
    this.$bvToast.toast('Please enter the Servings', {
      title: 'Missing Servings',
      variant: 'warning',
      solid: true
    });
    return;
  }

  if (!this.recipe.summary) {
    this.$bvToast.toast('Please enter the Summary', {
      title: 'Missing Summary',
      variant: 'warning',
      solid: true
    });
    return;
  }

  if (!this.recipe.instructions) {
    this.$bvToast.toast('Please enter the Instructions', {
      title: 'Missing Instructions',
      variant: 'warning',
      solid: true
    });
    return;
  }

  // if (!this.recipe.analyzedInstructions) {
  //   this.$bvToast.toast('Please enter the Analyzed Instructions', {
  //     title: 'Missing Analyzed Instructions',
  //     variant: 'warning',
  //     solid: true
  //   });
  //   return;
  // }

  if (!this.recipe.extendedIngredients) {
    this.$bvToast.toast('Please enter the Ingredients', {
      title: 'Missing Ingredients',
      variant: 'warning',
      solid: true
    });
    return;
  }

  try {
    const response = await axios.post(this.$root.store.server_domain + "/users/addmyRecipe", this.recipe);
    if (response.status === 201) {
      this.$bvToast.toast('Recipe added successfully', {
        title: 'Success',
        variant: 'success',
        solid: true
      });
      this.toggleModal();
      this.resetForm();
    } else {
      this.$bvToast.toast('Error adding recipe', {
        title: response.data.message || 'Error',
        variant: 'danger',
        solid: true
      });
    }
  } catch (error) {
    console.error('Error:', error);
    this.$bvToast.toast('Error adding recipe', {
      title: 'Error',
      variant: 'danger',
      solid: true
    });
  }
}

  }
};
</script>
