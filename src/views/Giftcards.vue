<template>
  <div class="giftcard">
    <h1 class="mt-2 mb-2">Gavekort til Hotel XYZ ferieparadis</h1>
    <b-container class="bv-example-row">
      <b-row>
        <div v-for="(product, index) in giftcard" :key="index">
          <b-col class="mt-2">
            <div>
              <b-card no-body class="overflow-hidden max pt-2 pl-2">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img fluid
                    :src="require('../assets/whatever.png')"
                      alt="Image"
                      class="rounded-0"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <h4>{{product.product_name}}</h4>
                      <b-card-text>
                        {{product.product_desc}}
                      </b-card-text>
                       <b-button :to="{ name: 'Giftcard', params: { id: product.product_id, product: product }}" variant="success">Vælg dette gavekort</b-button>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
          </b-col>
        </div>
      </b-row>
    </b-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      giftcard: []
    };
  },
  methods: {
    getGiftcardData() {
      fetch("https://followcasper.dk/api/products")
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          this.giftcard = data;
        });
    }
  },
  mounted() {
    this.getGiftcardData();
  }
};
</script>

<style scoped>
.max{
  max-width: 500px;
}
</style>