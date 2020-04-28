<template>
  <div class="login">
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="mt-2">
          <div>
            <b-card no body class="overflow-hidden pt-2 pl-2 mt-2 mb-2">
              <b-row>
                <b-col>
                  <div class="text-left">
                    <b-table-simple responsive class="table-borderless">
                      <b-tbody>
                        <b-tr>
                          <b-td>
                            <label for="email">Email</label>
                          </b-td>
                          <b-td>
                            <b-form-input
                              id="email"
                              name="email"
                              type="text"
                              placeholder="Email"
                              v-model="user_email"
                            ></b-form-input>
                          </b-td>
                          <b-td></b-td>
                        </b-tr>
                        <b-tr>
                          <b-td>
                            <label for="password">Password</label>
                          </b-td>
                          <b-td>
                            <b-form-input
                              id="password"
                              name="password"
                              placeholder="Password"
                              v-model="user_password"
                              :type="passwordFieldType"
                            ></b-form-input>
                          </b-td>
                          <b-td>
                            <b-button
                              class="showHide"
                              type="password"
                              @click="showHidePassword"
                            >Vis / Skjul</b-button>
                          </b-td>
                        </b-tr>
                        <b-tr>
                          <b-td></b-td>
                          <b-td>
                            <b-button @click="login($event)" variant="success" class="m-1">Login</b-button>
                          </b-td>
                          <b-td></b-td>
                        </b-tr>
                      </b-tbody>
                    </b-table-simple>
                    <b-table-simple responsive class="table-borderless">
                      <b-tbody>
                        <b-tr>
                          <b-td>
                            <p
                              v-if="err"
                              class="font-weight-bold text-danger"
                            >Email eller Password er ikke korrekt, prøv igen !</p>
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
export default {
  data() {
    return {
      user_email: "",
      user_password: "",
      passwordFieldType: "password",
      err: false
    };
  },
  methods: {
    login() {
      this.$http
        .post("https://followcasper.dk/api/login", {
          user_email: this.user_email,
          user_password: this.user_password
        })
        .then(res => {
          if (res.status == "200") {
            this.$router.push({
              name: "Dashboard",
              params: { id: this.user_name, user_name: this.user_email }
            });
          }
        })
        .catch(() => {
          this.err = true;
        });
    },
    showHidePassword() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    }
  }
};
</script>

<style scoped>
</style>