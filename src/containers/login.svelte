<script lang="ts">
  import { connectedUser } from '../store';

  // Models
  import { User } from '../models/user';

  function onSubmit(): void {
    connectedUser.set(new User({email: 'moi@gmail.com', password: 'hey'}));
  }

</script>

<h6>Login</h6>
<button type="submit" on:click={onSubmit}>coucou</button>

<style lang="scss">
  @import "src/styles";
</style>
