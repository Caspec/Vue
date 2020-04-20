<template>
  <div class="home">
    <h1 class="mt-2 mb-2">Velkommen til Hotel XYZ online gavekort</h1>
    <h4>"Du glemmer tid og sted med all inclusive"</h4>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div>
            <img class="img-fluid mt-2 mb-2" :src="require('../assets/herobig.png')" alt="Image" />
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid="md">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {

  }
};
</script>
