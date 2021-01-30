<template>
    <div>
        <div class="row">
            <div class="col-sm">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <div class="row justify-content-between">
                            <div class="col-sm">
                            <h4 class="m-0 font-weight-bold text-primary">{{product.name}}</h4>
                            </div>
                            <div class="col-sm d-flex justify-content-end">
                                <router-link :to="{name: 'ProductList' }" class="ml-auto btn btn-primary">VOLTAR</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h6 class="font-weight-bold">Ano de produção</h6>
                        {{product.year}}
                        
                        <h6 class="mt-4 font-weight-bold">Valor da venda</h6>
                        {{product.value | money }}
                    </div>
                </div>
            </div>
            <div class="col-sm">
                <owner-details :ownerId="product.owner_id" />
            </div>
        </div>
    </div>
</template>
<script>
import OwnerDetails from './OwnerDetails';
export default {
    props: ["id"],
    components: {
        OwnerDetails
    },
    computed: {
        product: function() {
            return this.$store.getters.getProductById(this.id);
        }
    },
    methods: {
        
    },
}
</script>