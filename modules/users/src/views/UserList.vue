<template>
    <div class="user-list">
        <table class="table table-bordered" style="width: 100%;" width="100%" cellspacing="0">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Distrito</th>
                    <th style="width: 120px">Ações</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Nome</th>
                    <th>Distrito</th>
                    <th>Ações</th>
                </tr>
            </tfoot>
            <tbody>           
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{user.name}}</td>
                    <td>{{user.district}}</td>
                    <td>
                        <router-link :to="{name: 'UserDetails', params: { id: user.id}}" class="btn btn-primary">
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
        users: function() {
            return this.$store.state.users;
        }
    }
}
</script>