<template>
    <div class="product-list">
        <table class="table table-bordered" style="width: 100%;" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Valor</th>
                    <th>Ano</th>
                    <th style="width: 120px">Ações</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Modelo</th>
                    <th>Valor</th>
                    <th>Ano</th>
                    <th>Ações</th>
                </tr>
            </tfoot>
            <tbody>           
                <tr v-for="(product, index) in products" :key="index">
                    <td>{{product.name}}</td>
                    <td>{{product.value | money}}</td>
                    <td>{{product.year}}</td>
                    <td>
                        <router-link :to="{name: 'ProductDetails', params: { id: product.id}}" class="btn btn-primary">
                            Detalhes
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    computed: {
        products: function() {
            return this.$store.state.products;
        }
    }
}
</script>