<template>
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand :to="{ name: 'MainPage' }">Cristina</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :to="{ name: 'MainPage' }" >Recipes</b-nav-item>
                <b-nav-item :to="{ name: 'SearchPage'}">Search</b-nav-item>
                <b-nav-item :to="{ name: 'AboutPage'}">About</b-nav-item>
                <b-nav-item-dropdown v-if="$root.store.username" text="Personal">
                    <b-dropdown-item :to="{ name: 'FavoritesPage'}">My Favorite Recipes</b-dropdown-item>
                    <b-dropdown-item :to="{ name: 'MyRecipesPage'}">My Recipes</b-dropdown-item>
                    <b-dropdown-item :to="{ name: 'FamilyRecipesPage'}">Family Recipes</b-dropdown-item>
                </b-nav-item-dropdown>
                
                <b-nav-item v-if="$root.store.username" @click="toggleModal">Add New Recipe</b-nav-item>
                

            </b-navbar-nav>

            <!-- user not logged in -->
            <b-navbar-nav class="ml-auto" v-if="!$root.store.username">
                <b-nav-text>Hello Guest</b-nav-text>
                <b-nav-item :to="{ name: 'RegisterPage'}">Register</b-nav-item>
                <b-nav-item :to="{ name: 'LoginPage'}">Login</b-nav-item>
            </b-navbar-nav>

            <!-- user logged in -->
            <b-navbar-nav class="ml-auto" v-else>
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>{{ $root.store.username }}</em>
                </template>
    
                <b-dropdown-item @click="Logout">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <Modal ref="addRecipeModal" />
    </div>
</template>

<script>
import Modal from "./Modal.vue"

export default {
  name: 'Navbar',
  components: {
    Modal
    },
    methods: {
        toggleModal() {
            this.$refs.addRecipeModal.toggleModal();
        },
        Logout() {
            this.$root.store.logout();
            this.$root.toast("Logout", "User logged out successfully", "success");
            this.$router.push("/").catch(() => {
                this.$forceUpdate();
            });
        }
    }
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>