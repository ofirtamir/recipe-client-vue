<template>
  <div class="container">
    <b-jumbotron>
      <template #header>Search</template>
      <template #lead>Here you will find the recipes</template>

      <b-form @submit.prevent="searchRecipes">
        <b-form-group label="Search for recipes">
          <b-form-input v-model="query" placeholder="Enter recipe name"></b-form-input>
        </b-form-group>

        <b-form-group label="Number of recipes to return">
          <b-form-select v-model="numberOfResults" :options="resultOptions"></b-form-select>
        </b-form-group>

        <!-- Select Cuisine -->
        <b-form-group label="Cuisine">
          <b-form-select v-model="selectedCuisine" :options="cuisineOptions"></b-form-select>
        </b-form-group>

        <!-- Select Diet -->
        <b-form-group label="Diet">
          <b-form-select v-model="selectedDiet" :options="dietOptions"></b-form-select>
        </b-form-group>

        <!-- Select Intolerance -->
        <b-form-group label="Intolerance">
          <b-form-select v-model="selectedIntolerance" :options="intoleranceOptions"></b-form-select>
        </b-form-group>
        <b-form-group label="Filter by">
          <b-form-select v-model="selectedFilter" :options="filterOptions"></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Search</b-button>
      </b-form>

      <div v-if="recipes.length">
        <b-form-group label="Sort by">
          <b-form-select v-model="sortOption" :options="sortOptions"></b-form-select>
        </b-form-group>

        <RecipePreviewList
          title="Search Results"
          :fromAPI="true"
          :recipes="sortedRecipes"
          :amount="numberOfResults"
          :columns="2"
        />
      </div>
      <div v-else>
        <p>No relevant results were found.</p>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import axios from 'axios';
import RecipePreviewList from '../components/RecipePreviewList';

export default {
  name: 'SearchPage',
  data() {
    return {
      query: '',
      numberOfResults: 5,
      resultOptions: [5, 10, 15],
      selectedCuisine: '', 
      cuisineOptions: [
        { value: '', text: 'Any' },
        { value: 'italian', text: 'Italian' },
        { value: 'mexican', text: 'Mexican' },
        { value: 'indian', text: 'Indian' },
      ],
      selectedDiet: '', 
      dietOptions: [
        { value: '', text: 'Any' },
        { value: 'vegetarian', text: 'Vegetarian' },
        { value: 'vegan', text: 'Vegan' },
        { value: 'paleo', text: 'Paleo' },
      ],
      selectedIntolerance: '', 
      intoleranceOptions: [
        { value: '', text: 'None' },
        { value: 'gluten', text: 'Gluten' },
        { value: 'dairy', text: 'Dairy' },
        { value: 'peanut', text: 'Peanut' },
      ],
      selectedFilter: '',
      filterOptions: [
        { value: '', text: 'No filter' },
        { value: 'vegetarian', text: 'Vegetarian' },
        { value: 'vegan', text: 'Vegan' },
        { value: 'glutenFree', text: 'Gluten Free' },
      ],
      sortOption: '',
      sortOptions: [
        { value: '', text: 'No sorting' },
        { value: 'time', text: 'Preparation Time' },
        { value: 'popularity', text: 'Popularity' },
      ],
      recipes: [],
    };
  },
  computed: {
    sortedRecipes() {
      if (this.sortOption === 'time') {
        return [...this.recipes].sort((a, b) => a.readyInMinutes - b.readyInMinutes);
      } else if (this.sortOption === 'popularity') {
        return [...this.recipes].sort((a, b) => b.aggregateLikes - a.aggregateLikes);
      }
      return this.recipes;
    },
  },
  components: {
    RecipePreviewList,
  },
  methods: {
    async searchRecipes() {
      const url = `${this.$root.store.server_domain}/recipes/search`;

      try {
        const response = await axios.get(url, {
          params: {
            recipeName: this.query,
            number: this.numberOfResults,
            cuisine: this.selectedCuisine, 
            diet: this.selectedDiet, 
            intolerance: this.selectedIntolerance, 
          },
        });

        this.recipes = response.data;
        // Save the current search state to localStorage
        this.saveState();
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    },
    saveState() {
      const searchState = {
        query: this.query,
        numberOfResults: this.numberOfResults,
        selectedCuisine: this.selectedCuisine,
        selectedDiet: this.selectedDiet,
        selectedIntolerance: this.selectedIntolerance,
        selectedFilter: this.selectedFilter,
        sortOption: this.sortOption,
      };
      
      localStorage.setItem('searchState', JSON.stringify(searchState));
      localStorage.setItem('searchResults', JSON.stringify(this.recipes));
    },
    loadState() {
      const savedState = localStorage.getItem('searchState');
      if (savedState) {
        const { query, numberOfResults, selectedCuisine, selectedDiet, selectedIntolerance, selectedFilter, sortOption } = JSON.parse(savedState);
        this.query = query;
        this.numberOfResults = numberOfResults || 5;
        this.selectedCuisine = selectedCuisine || '';
        this.selectedDiet = selectedDiet || '';
        this.selectedIntolerance = selectedIntolerance;
        this.selectedFilter = selectedFilter || '';
        this.sortOption = sortOption || '';
      }
      this.recipes = JSON.parse(localStorage.getItem('searchResults')) || [];
    },
  },
  mounted() {
    this.loadState();
  },
  beforeDestroy() {
    this.saveState();
  },
};
</script>

