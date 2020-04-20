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
                  <b-card-body>
                    <h4>{{product.product_name}}</h4>
                    <b-card-text>{{product.product_desc}}</b-card-text>
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
                    <h3>Bestil dette gavekort</h3>
                    <b-table-simple responsive class="table-borderless">
                      <b-tbody>
                        <b-tr>
                          <b-td class="font-weight-bold">Vælg et beløb</b-td>
                          <b-td>
                            <select v-model="selected">
                              <option
                                v-for="option in options"
                                v-bind:value="option.value"
                                :key="option.value"
                              >{{ option.text }}</option>
                            </select>
                          </b-td>
                        </b-tr>
                        <b-tr>
                          <b-td class="font-weight-bold">Medfølgende besked til gavekortet</b-td>
                          <b-td>
                            <b-form-textarea
                              id="textarea"
                              placeholder="Skriv en medfølgende besked til gavekortet..."
                              rows="4"
                            ></b-form-textarea>
                          </b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><h4>Oplysninger</h4></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="firstname">Fornavn</label></b-td>
                          <b-td><b-form-input id="firstname" name="firstname" type="text" placeholder="Fornavn"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="lastname">Efternavn</label></b-td>
                          <b-td><b-form-input id="lastname" name="lastname" type="text" placeholder="Efternavn"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="address">Adresse</label></b-td>
                          <b-td><b-form-input id="address" name="address" type="text" placeholder="Adresse"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="zipcode">Post nr.</label></b-td>
                          <b-td><b-form-input id="zipcode" name="zipcode" type="number" placeholder="Post nr."></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="email">Email</label></b-td>
                          <b-td><b-form-input id="email" name="email" type="email" placeholder="Email"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="reemail">Gentag Email</label></b-td>
                          <b-td><b-form-input id="remail" name="remail" type="email" placeholder="Gentag Email"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td class="font-weight-bold"><label for="otherreciver">Anden modtager af gavekortet</label></b-td>
                          <b-td><b-form-checkbox id="otherreciver" name="otherreciver" type="checkbox" v-model="otherreciver" size="lg"></b-form-checkbox></b-td>
                        </b-tr>
                      </b-tbody>
                      <b-tbody v-if="otherreciver === true">
                      <b-tr>
                          <b-td><h4>Anden modtager</h4></b-td>
                          <b-td></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otherfirstname">Fornavn</label></b-td>
                          <b-td><b-form-input id="otherfirstname" name="otherfirstname" type="text" placeholder="Fornavn"></b-form-input></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otherlastname">Efternavn</label></b-td>
                          <b-td><b-form-input id="otherlastname" name="otherlastname" type="text" placeholder="Efternavn"></b-form-input></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otheraddress">Adresse</label></b-td>
                          <b-td><b-form-input id="otheraddress" name="otheraddress" type="text" placeholder="Adresse"></b-form-input></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otherzipcode">Post nr.</label></b-td>
                          <b-td><b-form-input id="otherzipcode" name="otherzipcode" type="number" placeholder="Post nr."></b-form-input></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otheremail">Email</label></b-td>
                          <b-td><b-form-input id="otheremail" name="otheremail" type="email" placeholder="Email"></b-form-input></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otherreemail">Gentag Email</label></b-td>
                          <b-td><b-form-input id="otherreemail" name="otherreemail" type="email" placeholder="Gentag Email"></b-form-input></b-td>
                      </b-tr>                     
                      </b-tbody>
                      <b-tbody>
                        <b-tr>
                          <b-td></b-td>
                          <b-td><b-button variant="success">Videre</b-button></b-td>
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
import { Store } from "../store/store.js";

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      otherreciver: false, 
      selected: "100",
      options: [
        { text: "100 kr", value: "100" },
        { text: "200 kr", value: "200" },
        { text: "300 kr", value: "300" },
        { text: "400 kr", value: "400" },
        { text: "500 kr", value: "500" }
      ]
    };
  },
  methods: {
    addGiftcard(product) {
      Store.addGiftcard(product);
    }
  }
};
</script>

<style scoped>

</style>