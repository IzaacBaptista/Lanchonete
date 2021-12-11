<template>
  <v-layout flex align-center justify-center fill-height>
    <v-flex xs12 sm4 align-center justify-center>
      <v-card>
        <v-card-text class="pt-2">
          <v-form v-model="formValido">
            <v-text-field
              label="E-mail"
              v-model="email"
              :rules="regrasEmail"
              require
              error-count="2"
            />
            <v-text-field
              label="Senha"
              v-model="senha"
              min="8"
              counter
              type="password"
              :rules="regrasSenha"
              require
              error-count="2"
            />
            <v-select
              :items="itens"
              v-model="tipo"
              :rules="regrasTipo"
              label="Tipo de usuário"
              item-text="nome"
              item-value="valor"
            />
            <v-btn :disabled="!formValido" @click="adicionarUsuario" color="primary"> Criar </v-btn>
          </v-form>
          <v-alert v-if="msgSucesso != ''"
            text
            dense
            color="teal"
            icon="mdi-account-check"
            border="left"
          >
          {{msgSucesso}}
          </v-alert>
          <v-alert v-if="msgErro != ''"
            text
            prominent
            type="error"
            icon="mdi-account-remove"
          >
          {{msgErro}}
          </v-alert>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import UserService from "../../services/UserService";

export default {
  data() {
    return {
      email: "",
      senha: "",
      tipo: "",
      formValido: false,
      msgErro: '',
      msgSucesso: '',
      itens: [
        { nome: "Administração", valor: "1" },
        { nome: "Balcao", valor: "2" },
        { nome: "Cozinha", valor: "3" },
      ],
      regrasEmail: [
          v => !!v || "Email precisa ser preechida",
          v => /.+@.+/.test(v) || "E-mail é inválido"
      ],
      regrasSenha:[
          v => !!v || "Senha precisa ser preechida",
          v => (v && v.length >= 8) || "Senha precisa ter ao menos 8 caracteres"
      ],
      regrasTipo:[
          v=> !!v || "Tipo de usuário precisa ser preenchido"
      ]
    };
  },
    methods: {
      adicionarUsuario: function(){
        this.msgSucesso = '';
        this.msgErro = '';
        let dados = {
          email: this.email,
          senha: this.senha,
          tipo: this.tipo
        }
        UserService.signup(dados).then(response => {
          alert(response.data);
          this.msgSucesso = response.data;
        }).catch(e => {
          alert(e);
          this.msgErro = e;
        })
      }
    }
};
</script>