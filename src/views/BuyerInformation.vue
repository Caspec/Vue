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
                    <div>
                      <p class="h4 mb-2">
                        <b-icon icon="gift-fill" variant="primary"></b-icon>
                        {{buyerinformation.selectedSendMode}}
                      </p>
                    </div>
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
                      <b-tbody
                        v-if="buyerinformation.otherfirstname !== '' || buyerinformation.otherlastname !== ''"
                      >
                        <b-tr>
                          <b-td>
                            <h4>Anden modtager</h4>
                          </b-td>
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
                          <b-td>
                            <b-button
                              :to="{ name: 'Giftcard', params: { id: this.buyerinformation.product.product_id, product: this.buyerinformation.product } }"
                              variant="primary"
                              class="m-1"
                            >Tilbage</b-button>
                            <b-button @click="createOrder($event)" variant="success" class="m-1">Køb</b-button>
                          </b-td>
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
import jsPDF from "jspdf";
export default {
  props: {
    buyerinformation: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      orders_other: "",
      orders_buydate: "2020-04-26",
      orders_enddate: "2023-04-26",
      orders_code: 1234,
      orders_folio: 4321

    };
  },
  methods: {
    createPDF() {
      let pdfName = "giftcard";
      let doc = new jsPDF();
      doc.text(
        "Gavekort" +
        "\n\n" +
        "Købsdato: " + 
        this.orders_buydate +
        "\n" +
        "Slutdato: " +
        this.orders_enddate +
        "\n" +
        "Kode: " +
        this.orders_code +
        "\n" +
        "Folio nr. " +
        this.orders_folio +
        "\n" +
        "Måden at få gavekortet på: " +
        this.buyerinformation.selectedSendMode +
        "\n\n" + 
        "Købers oplysninger" +
          "\n\n" +
          this.buyerinformation.product.product_name +
          "\n" +
          "Beløb: " +
          this.buyerinformation.price +
          "\n" +
          "Medfølgende besked: " +
          this.buyerinformation.msg +
          "\n" +
          "Fornavn: " +
          this.buyerinformation.firstname +
          "\n" +
          "Efternavn: " +
          this.buyerinformation.lastname +
          "\n" +
          "Adresse: " +
          this.buyerinformation.address +
          "\n" +
          "Post nr." +
          this.buyerinformation.zipcode +
          "\n" +
          "Email: " +
          this.buyerinformation.email, 
        10,
        10
      );
      doc.save(pdfName + ".pdf");
    },
    createOrder() {
      if (this.buyerinformation.otherfirstname !== "" || this.buyerinformation.otherlastname !== "") {
        this.orders_other = "YES";
      } else {
        this.orders_other = "NO";
      }
      this.$http
        .post("https://followcasper.dk/api/ordersadd", {
          orders_msg: this.buyerinformation.msg,
          orders_firstname: this.buyerinformation.firstname,
          orders_lastname: this.buyerinformation.lastname,
          orders_address: this.buyerinformation.address,
          orders_zipcode: this.buyerinformation.zipcode,
          orders_email: this.buyerinformation.email,
          orders_other: this.orders_other,
          orders_other_firstname: this.buyerinformation.otherfirstname,
          orders_other_lastname: this.buyerinformation.otherlastname,
          orders_other_address: this.buyerinformation.otheraddress,
          orders_other_zipcode: this.buyerinformation.otherzipcode,
          orders_other_email: this.buyerinformation.otheremail,
          orders_price: this.buyerinformation.price,
          orders_buydate: this.orders_buydate,
          orders_enddate: this.orders_enddate,
          orders_status: "success",
          orders_code: this.orders_code,
          orders_folio: this.orders_folio
        })
        .then(res => {
          if (res.status == "200") {
            this.createPDF();
            this.$router.push({
              name: "Fakepaid",
              params: { buyerinformation: this.buyerinformation }
            });
          }
        });
    }
  }
};
</script>

<style scoped>
</style>