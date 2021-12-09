<template>
  <v-app>
    <!--
    <v-navigation-drawer app> </v-navigation-drawer>
    -->
    <v-app-bar app dark>
      <v-app-bar-nav-icon>
        <v-img
          width="50px"
          src="https://logodownload.org/wp-content/uploads/2014/10/senac-logo-4.png"
        />
      </v-app-bar-nav-icon>
      <!--v-toolbar-title> Site bla bla bla </v-toolbar-title-->
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text to="/createuser">
          <v-icon left dark>mdi-account</v-icon>
          Criar Usuário
        </v-btn>
        <v-btn text name="createproduct" to="/createproduct">
          <v-icon left dark>mdi-food-fork-drink</v-icon>
          Criar Produto
        </v-btn>
        <v-btn text to="/listproducts">
          <v-icon left dark>mdi-clipboard-list</v-icon>
          Listar Produtos
        </v-btn>
        <v-btn text @click="logout">
          <v-icon left dark>mdi-sign-out-alt</v-icon>
          Sair
        </v-btn>        
      </v-toolbar-items>
      <v-spacer />
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>
 
<script>
import AuthService from '../services/AuthService.js'

export default {
  name: "App",
  components: {},
  mounted() {
  },
  methods: {
    logout(){
      AuthService.logOut();
      this.$router.push({name:"Login"});
    },
  },
  data: () => ({
  }),
};
</script>
