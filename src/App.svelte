<script lang="ts">
  import { connectedUser } from './store';

  // Components
  import Header from './components/header.svelte';
  import Footer from './components/footer.svelte';

  // Containers
  import Login from './containers/login.svelte';
  import Home from './containers/home.svelte';

  // Models
  import { User } from './models/user';

  let user: User;
  connectedUser.subscribe(u => user = u);

</script>

<main>
  <Header></Header>

  {#if !user}
    <Login></Login>
  {:else}
    <Home></Home>
  {/if}

  <Footer></Footer>
</main>

<style lang="scss">


</style>
