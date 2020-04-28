<template>
  <div class="productadd">
    <h2>Tilføj et produkt</h2>
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
                    <b-table-simple responsive class="table-borderless mt-2">
                    <b-tr>
                        <b-td><b-button
                        @click="goBack"
                        variant="primary"
                        class="ml-1 mt-1"
                      >Til Dashboard</b-button></b-td>
                    </b-tr>
                     <b-tr>
                         <b-td><label for="productname">Produkt navn</label></b-td>
                         <b-td><b-form-input id="productname" name="productname" type="text" placeholder="Produkt navn" v-model="product_name" required></b-form-input></b-td>
                     </b-tr>
                     <b-tr>
                         <b-td><label for="productdesc">Produkt beskrivelse</label></b-td>
                         <b-td><b-form-textarea
                              id="textarea"
                              placeholder="Beskrivelse om gavekortet..."
                              rows="4"
                              v-model="product_desc"
                              maxlength="400"
                            ></b-form-textarea></b-td>
                     </b-tr>
                     <b-tr>
                         <b-td><label for="productcategory">Kategori</label></b-td>
                         <b-td><select v-model="fk_category_id">
                              <option
                                v-for="(category, index) in category"
                                :value="category.category_id"
                                :key="index"
                              >{{ category.category_name }}</option>
                            </select></b-td>
                     </b-tr>
                     <b-tr>
                         <b-td></b-td>
                         <b-td><b-button @click="createProduct($event)" variant="success" class="m-1">Opret produkt</b-button></b-td>
                     </b-tr>
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
    user_name: {
      type: String
    }
  },
  data() {
    return {
      product_name: "",
      product_desc: "",
      product_img: "whatever.png",
      fk_category_id: 0,
      category: []
    };
  },
  methods: {
    createProduct() {
      this.$http
        .post("https://followcasper.dk/api/productadd", {
          product_name: this.product_name,
          product_desc: this.product_desc,
          product_img: this.product_img,
          fk_category_id: this.fk_category_id,
        })
        .then(res => {
          if (res.status == "200") {
            this.$router.push({
              name: "Dashboard",
              params: { id: this.user_name, user_name: this.user_name }
            });
          }
        })
    },
    getCategory() {
      this.$http
        .get("https://followcasper.dk/api/categories")
        .then(res => {
          this.category = res.data;
        })
    },
    goBack(){
         this.$router.push({
              name: "Dashboard",
              params: { id: this.user_name, user_name: this.user_name }})
    }
  },
  mounted() {
    this.getCategory();
  }
};
</script>


<style scoped>

</style>