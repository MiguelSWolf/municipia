<template>
    <div>
        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <div class="row justify-content-between">
                    <div class="col-sm">
                    <h4 class="m-0 font-weight-bold text-primary">{{user.name}}</h4>
                    </div>
                    <div class="col-sm d-flex justify-content-end">
                        <router-link :to="{name: 'UserList' }" class="ml-auto btn btn-primary">VOLTAR</router-link>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <h6 class="font-weight-bold">Telefone</h6>
                {{user.phone}}
                <h6 class="font-weight-bold mt-4">Email</h6>
                <a :href="`mailto:${user.mail}`" target="_blank">{{user.mail}}</a>
                <h6 class="font-weight-bold mt-4">Morada</h6>
                {{user.district}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["id"],
    computed: {
        user: function() {
            const id = this.id || this.$root._data.ownerId;
            return this.$store.getters.getUserById(id) || {};
        }
    },
    methods: {
        
    },
}
</script>