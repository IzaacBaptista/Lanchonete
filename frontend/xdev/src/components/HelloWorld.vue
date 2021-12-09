<template>
  <v-app>
    <!--
    <v-app-bar app color="primary" dark> </v-app-bar>
    -->
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
 
    <v-footer app> </v-footer>
  </v-app>
</template>
 
<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  }),
};
</script>