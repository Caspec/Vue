<template>
  <div class="dashboard">
    <h2>Velkommen til CMS for hotellet</h2>
    <p>
      Du er logged ind som:
      <span class="font-weight-bold">{{ user_name }}</span>
    </p>
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="mt-2">
          <div>
            <b-card no body class="overflow-hidden pt-2 pl-2 mt-2 mb-2">
              <b-row>
                <b-col>
                  <div class="text-left">
                    <div>
                      <b-button
                        :to="{ name: 'ProductAdd', params: { id: user_name, user_name: user_name  } }"
                        variant="success"
                        class="m-1"
                      >+ Tilføj produkt</b-button>
                    </div>
                    <b-table-simple responsive class="table-borderless mt-2" :giftcards="giftcards">
                      <div v-for="(product, index) in giftcards" :key="index">
                        <b-tr>
                          <b-td>{{ product.product_name }}</b-td>
                          <b-td>{{ product.product_desc }}</b-td>
                          <b-td>
                              <b-button
                        :to="{ name: 'ProductEdit', params: { id: product.product_id, product: product, user_name: user_name  } }"
                        variant="primary"
                        class="ml-1 mt-1"
                      >Rediger produkt</b-button>
                        <b-button
                        :to="{ name: 'ProductDelete', params: { id: product.product_id, product: product, user_name: user_name  } }"
                        variant="danger"
                        class="ml-1 mt-1"
                      >Slet produkt</b-button>
                          </b-td>
                        </b-tr>
                      </div>
                    </b-table-simple>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Store } from "../store/store.js";
export default {
  props: {
    user_name: {
      type: String
    }
  },
  data() {
    return {
      giftcards: Store.$data.products
    };
  },
  methods: {
    getGiftcardData() {
      fetch("https://followcasper.dk/api/products")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.giftcards = data;
        });
    }
  },
  mounted() {
    this.getGiftcardData();
  }
};
</script>

<style scoped>
</style>