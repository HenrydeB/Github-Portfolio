<template>
  <div>
    <h1>GithubApp</h1>
    <GitHubTokenForm />
    <User />
    <Repos />
  </div>
  
</template>

<script>
import GitHubTokenForm from './components/GitHubTokenForm.vue';
import Repos from './components/Repos.vue';
import User from './components/User.vue'

export default {
  name: 'App',
  components: {
    GitHubTokenForm,
    Repos,
    User,
  },
};
// public/rest.js-16.43.1
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

