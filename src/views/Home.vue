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

    <b-container fluid="md" class="mb-4">
      <b-row>
        <b-col>
          <h4>"Verdens Ende" - Et meget smukt sted.</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
         Ved Hotel XYZ er der meget smukt og fortjener absolut mere tid i en travl hverdag når muligheden tilbyder sig. Helsingør er en hyggelig by, hvor der ligger nogle fine museer uden for byen. Helsingør har med sit lille tog nogle fantastiske attraktioner og spisesteder. Det virker som om, at man kører til verdens ende hvor tid og sted glemmes.
        </b-col>
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
