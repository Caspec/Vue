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
                            <select v-model="buyerinformation.price">
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
                              v-model="buyerinformation.msg"
                              maxlength="400"
                            ></b-form-textarea>
                            <p class="font-weight-bold">Max. 400 tegn.</p>
                          </b-td>
                        </b-tr>
                        <b-tr>
                          <b-td class="font-weight-bold">Vælg måden at få gavekortet</b-td>
                          <b-td><b-form-radio v-model="buyerinformation.selectedSendMode" name="some-radios" value="Email" checked>Email</b-form-radio><b-form-radio v-model="buyerinformation.selectedSendMode" name="some-radios" value="GLS">GLS</b-form-radio><b-form-radio v-model="buyerinformation.selectedSendMode" name="some-radios" value="Post Nord" checked>Post Nord</b-form-radio><b-form-radio v-model="buyerinformation.selectedSendMode" name="some-radios" value="Hotel">Afhentes på hotellet</b-form-radio></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><h4>Købers Oplysninger</h4></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="firstname">Fornavn</label></b-td>
                          <b-td><b-form-input id="firstname" name="firstname" type="text" placeholder="Fornavn" v-model="buyerinformation.firstname"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="lastname">Efternavn</label></b-td>
                          <b-td><b-form-input id="lastname" name="lastname" type="text" placeholder="Efternavn" v-model="buyerinformation.lastname"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="address">Adresse</label></b-td>
                          <b-td><b-form-input id="address" name="address" type="text" placeholder="Adresse" v-model="buyerinformation.address"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="zipcode">Post nr.</label></b-td>
                          <b-td><b-form-input id="zipcode" name="zipcode" type="number" placeholder="Post nr." v-model="buyerinformation.zipcode"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="email">Email</label></b-td>
                          <b-td><b-form-input id="email" name="email" type="email" placeholder="Email" v-model="buyerinformation.email"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td><label for="reemail">Gentag Email</label></b-td>
                          <b-td><b-form-input id="remail" name="remail" type="email" placeholder="Gentag Email" v-model="buyerinformation.remail"></b-form-input></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td class="font-weight-bold"><label for="otherreciver">Anden modtager af gavekortet</label></b-td>
                          <b-td><b-form-checkbox id="otherreciver" name="otherreciver" type="checkbox" v-model="otherreciver" true-value="yes" false-value="no" size="lg"></b-form-checkbox></b-td>
                        </b-tr>
                      </b-tbody>
                      <b-tbody v-if="otherreciver === true">
                      <b-tr>
                          <b-td><h4>Anden Modtager</h4></b-td>
                          <b-td></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otherfirstname">Fornavn</label></b-td>
                          <b-td><b-form-input id="otherfirstname" name="otherfirstname" type="text" placeholder="Fornavn" v-model="buyerinformation.otherfirstname"></b-form-input></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otherlastname">Efternavn</label></b-td>
                          <b-td><b-form-input id="otherlastname" name="otherlastname" type="text" placeholder="Efternavn" v-model="buyerinformation.otherlastname"></b-form-input></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otheraddress">Adresse</label></b-td>
                          <b-td><b-form-input id="otheraddress" name="otheraddress" type="text" placeholder="Adresse" v-model="buyerinformation.otheraddress"></b-form-input></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otherzipcode">Post nr.</label></b-td>
                          <b-td><b-form-input id="otherzipcode" name="otherzipcode" type="number" placeholder="Post nr." v-model="buyerinformation.otherzipcode"></b-form-input></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otheremail">Email</label></b-td>
                          <b-td><b-form-input id="otheremail" name="otheremail" type="email" placeholder="Email" v-model="buyerinformation.otheremail"></b-form-input></b-td>
                      </b-tr>
                      <b-tr>
                          <b-td><label for="otherreemail">Gentag Email</label></b-td>
                          <b-td><b-form-input id="otherreemail" name="otherreemail" type="email" placeholder="Gentag Email" v-model="buyerinformation.otherremail"></b-form-input></b-td>
                      </b-tr>                     
                      </b-tbody>
                      <b-tbody>
                        <b-tr>
                          <b-td></b-td>
                          <b-td><b-button :to="{ name: 'Giftcards' }" variant="primary">Tilbage</b-button> <b-button @click="validate($event)" variant="success">Videre</b-button></b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                    <div>
                      <p  v-if="errors.length">
                        <b>Udfyld følgende fejl:</b>
                          <ul>
                            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                          </ul>
                      </p>
                    </div>
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
      errors: [],
      otherreciver: false,
      options: [
        { text: "100 kr", value: "100" },
        { text: "200 kr", value: "200" },
        { text: "300 kr", value: "300" },
        { text: "400 kr", value: "400" },
        { text: "500 kr", value: "500" }
      ],
      buyerinformation: { price: 100, msg: '', firstname: '', lastname: '', address: '', zipcode: 0, email: '', remail: '', otherfirstname: '', otherlastname: '', otheraddress: '', otherzipcode: 0, othermail: '', otherremail: '',  product: this.product, selectedSendMode: 'Email' }
    };
  },
  methods: {
    addGiftcard(product) {
      Store.addGiftcard(product);
    },
    validate: function (e) {

      if(this.otherreciver)
      {
        if(this.buyerinformation.firstname !== '' && this.buyerinformation.lastname !== '' && this.buyerinformation.address !== '' && (this.buyerinformation.email == this.buyerinformation.remail) && this.buyerinformation.otherfirstname !== '' && this.buyerinformation.otherlastname !== '' && this.buyerinformation.otheraddress !== '' && (this.buyerinformation.otheremail == this.buyerinformation.otherremail) ){
          this.$router.push({ name: 'BuyerInformation', params: { buyerinformation: this.buyerinformation }  });
          return true;
        }
      }

      if(!this.otherreciver){
        if(this.buyerinformation.firstname !== '' && this.buyerinformation.lastname !== '' && this.buyerinformation.address !== '' && (this.buyerinformation.email == this.buyerinformation.remail)){
          this.$router.push({ name: 'BuyerInformation', params: { buyerinformation: this.buyerinformation }  });
          return true;
        }
      }

      this.errors = [];
      
      // buyer
      if (!this.buyerinformation.firstname) {
        this.errors.push('Fornavn hos køber mangler.');
      }
      if (!this.buyerinformation.lastname) {
        this.errors.push('Efternavn hos køber mangler.');
      }

      if (!this.buyerinformation.address) {
        this.errors.push('Adresse hos køber mangler.');
      }

      if (this.buyerinformation.email !== this.buyerinformation.reemail) {
        this.errors.push('Email hos køber mangler eller Email hos køber matcher ikke. Gentag samme email.');
      }
      
      // other reciver
      if(this.otherreciver) {
      if (!this.buyerinformation.otherfirstname) {
        this.errors.push('Fornavn hos anden modtager mangler.');
      }
      if (!this.buyerinformation.otherlastname) {
        this.errors.push('Efternavn hos anden modtager mangler.');
      }
      if (!this.buyerinformation.otheraddress) {
        this.errors.push('Adresse hos anden modtager mangler.');
      }
      if (this.buyerinformation.otheremail !== this.buyerinformation.otherremail) {
        this.errors.push('Email hos anden modtager mangler eller Email hos anden modtager matcher ikke. Gentag samme email.');
      }
    }

      e.preventDefault();
    }
  }
};
</script>

<style scoped>

</style>