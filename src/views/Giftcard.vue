<template>
  <div class="giftcard">
    <b-container class="bv-example-row">
      <b-row>
          <b-col class="mt-2">
             <div>
              <b-card no-body class="overflow-hidden pt-2 pl-2">
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img fluid
                    :src="require('../assets/whatever2.png')"
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
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </div>
            <div>
              <b-card no body class="overflow-hidden pt-2 pl-2 mt-2">
                <b-row>
                  <b-col>
                    <div class="text-left">
                      asdasdasddas
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
    product: {
      type: Object,
      required: true
    }
  },
   methods: {
    addGiftcard(product) {
      Store.addGiftcard(product)
    }
  },
}
</script>

<style scoped>

</style>