<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home'}"><b-icon icon="house-fill" variant="success"></b-icon> Forside</b-nav-item>
        <b-nav-item :to="{ name: 'Giftcards'}"><b-icon icon="card-text" variant="info"></b-icon> Gavekort</b-nav-item>
        <b-nav-item :to="{ name: 'Login'}"><b-icon icon="person-fill" variant="primary"></b-icon> Login</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

</style>