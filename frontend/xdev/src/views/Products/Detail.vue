<template>
    <div class="form-produto mt-3 mx-auto">
        <p class="headline">Alterar Produto</p>

        <div>
            <v-form v-model="formValidado">
                <v-text-field
                    v-model="produto.nome"
                    :rules="[(v) => !!v || 'Nome é um campo Obrigatório']"
                    label="Nome"
                    required />
                <v-text-field
                    v-model="produto.valor"
                    :rules="[(v) => !!v || 'Valor é um campo Obrigatório']"
                    label="Valor"
                    type="number"
                    required /> 

                <v-divider class="my-5" />
                <v-btn color="success" small class="mr-2" @click="atualizarProduto">
                    Atualizar
                </v-btn> 
                <!--
                <v-btn color="error" small class="mr-2" @click="deletarProduto">
                    Excluir
                </v-btn>    
                -->
                
            <v-alert
                text
                v-if="msgSucesso != ''"
                color="teal"
                icon="mdi-account-check">
            {{msgSucesso}}
            </v-alert>    
            <v-alert
                text
                v-if="msgErro != ''"
                color="teal"
                type="error"
                icon="mdi-account-remove">
            {{msgErro}}
            </v-alert>                    
        </v-form> 
        </div>            
    </div>    
</template>

<script>
import ProductService from "../../services/ProductService.js";

export default {
    data() {
        return {
            produto: [],
            msgSucesso: "",
            msgErro: "",
            formValidado:false
        }
    },
    methods: {
        buscarProduto(id){
            ProductService.get(id).then(response => {
                this.produto = response.data;
                console.log(response.data);
            }).catch(e => console.log(e));
        },
        atualizarProduto(){
            ProductService.update(this.produto.idprodutos, this.produto).then(response => {
                this.msgSucesso = response.data;
                //this.$router.push({name: "ListProducts"});
            }).catch(e => {
                this.msgErro = e;
                console.log(e);
            });
        },
        deletarProduto(){
            alert("excluir");
        }
    },
    mounted(){
        this.buscarProduto(this.$route.params.id);
    }
}
</script>