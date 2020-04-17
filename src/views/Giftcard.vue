<template>
  <div class="login">
    <h1>Dette er gavekort specifikke side</h1>
     <h1>{{ product.product_id }}</h1>
  </div>
</template>


<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>