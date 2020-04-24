<template>
  <div class="giftcard">
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="mt-2">
          <div>
            <b-card no-body class="overflow-hidden pt-2 pl-2">
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    fluid
                    :src="require('../assets/whatever2.png')"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body class="text-left">
                    <h1>{{buyerinformation.product.product_name}}</h1>
                    <h3>Din valgte pris: {{buyerinformation.price}}.- DKK</h3>
                    <b-card-text class="mt-4 p-2 border rounded">{{buyerinformation.msg}}</b-card-text>
                    <div><p class="h4 mb-2"><b-icon icon="gift-fill" variant="primary"></b-icon> {{buyerinformation.selectedSendMode}}</p></div>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
          <div>
            <b-card no body class="overflow-hidden pt-2 pl-2 mt-2 mb-2">
              <b-row>
                <b-col>
                  <div class="text-left">
                    <h3>Købers oplysninger</h3>
                    <b-table-simple responsive class="table-borderless">
                      <b-tbody>
                        <b-tr>
                          <b-td>Fornavn</b-td>
                          <b-td>{{buyerinformation.firstname}}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td>Efternavn</b-td>
                            <b-td>{{buyerinformation.lastname}}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td>Adresse</b-td>
                            <b-td>{{buyerinformation.address}}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td>Post nr.</b-td>
                            <b-td>{{buyerinformation.zipcode}}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td>Email</b-td>
                            <b-td>{{buyerinformation.email}}</b-td>
                        </b-tr>
                      </b-tbody>
                      <b-tbody v-if="buyerinformation.otherfirstname !== '' || buyerinformation.otherlastname !== ''">
                        <b-tr>
                            <b-td><h4>Anden modtager</h4></b-td>
                            <b-td></b-td>
                      </b-tr>
                        <b-tr>
                            <b-td>Fornavn</b-td>
                            <b-td>{{buyerinformation.otherfirstname}}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td>Efternavn</b-td>
                            <b-td>{{buyerinformation.otherlastname}}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td>Adresse</b-td>
                            <b-td>{{buyerinformation.otheraddress}}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td>Post nr.</b-td>
                            <b-td>{{buyerinformation.otherzipcode}}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-td>Email</b-td>
                            <b-td>{{buyerinformation.otheremail}}</b-td>
                        </b-tr>
                      </b-tbody>
                      <b-tbody>
                        <b-tr>
                            <b-td></b-td>
                            <b-td><b-button :to="{ name: 'Giftcard', params: { id: this.buyerinformation.product.product_id, product: this.buyerinformation.product } }" variant="primary" class="m-1">Tilbage</b-button> <b-button :to="{ name: 'Fakepaid', params: { buyerinformation: buyerinformation } }" variant="success" class="m-1">Køb</b-button></b-td>
                        </b-tr>
                      </b-tbody>
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
export default {
  props: {
      buyerinformation: {
          type: Object,
          required: true
      }
  },
  data() {
      return {

      };
    }
};
</script>

<style scoped>
</style>