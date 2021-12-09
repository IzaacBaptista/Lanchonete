<template>
    <v-card class="mx-auto">
        <v-card-title>Produtos</v-card-title>

        <v-data-table
            :headers="cabecalho"
            :items="produtos"
            disable-pagination
            hide-default-footer
            >

            <template v-slot:[`item.valor`]="{ item }">
               R$ {{item.valor}}     
            </template>    

            <template v-slot:[`item.acoes`]="{ item }">
                <v-icon small class="mr-2" @click="editarProduto(item.id)">mdi-pencil</v-icon>                    
                <v-icon small @click="deletarProduto(item.id)">mdi-delete</v-icon>                    
            </template>    
        </v-data-table>    
    </v-card>    
</template>

<script>
import ProductService from "../../services/ProductService";

export default {
    data() {
        return {
            produtos: [],
            cabecalho: [
                {text: "Nome", align: "start", sortable: true, value: "nome"},
                {text: "Valor", sortable: true, value: "valor"},
                {text: "Ações", sortable: false, value: "acoes"}
            ],
        }
    },
    methods: {
        buscarProdutos(){
            ProductService.getAll().then(response => {
                this.produtos = response.data.map(this.formataProduto);
            }).catch(e => console.log(e));
        },
        formataProduto(produto){
            return {
                id: produto.idprodutos,
                nome: produto.nome,
                valor: produto.valor
            }
        },
        deletarProduto(id){
            ProductService.delete(id).then((response) => {
                console.log(response);
                this.buscarProdutos();
            }).catch(e => {
                console.log(e);
            })
        },
        editarProduto(id){
            this.$router.push({name: "DetailProduct", params: {id: id}});
        }
    },
    mounted(){
        // Chamar no onload da pagina
        this.buscarProdutos();
    }
}
</script>