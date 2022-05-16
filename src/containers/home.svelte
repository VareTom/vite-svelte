<script lang="ts">
  import { connectedUser } from '../store';

  function onLogout(): void {
    connectedUser.set(undefined);
  }

</script>

<h6>Home</h6>
<button type="submit" on:click={onLogout}>Logout</button>

<style lang="scss">
  @import "src/styles";
</style>
