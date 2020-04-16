<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'Home'}"><b-icon icon="house-fill" variant="success"></b-icon> Home</b-nav-item>
        <b-nav-item :to="{ name: 'Giftcard'}"><b-icon icon="card-text" variant="info"></b-icon> Giftcard</b-nav-item>
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