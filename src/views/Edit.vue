<template>
    <div class="container mt-4">

        <div class="card text-white bg-primary mb-3" style="max-width: 40rem;">
            <div class="card-header">Editar</div>
            <div class="card-body">
                <h5 class="card-title">Job ID: {{id}} </h5>
                <p class="card-text">Name: {{job.name}}</p>
            </div>
        </div>
        <form class="form-group" @submit.prevent="editJob(job)">
            <input type="text" class="form-control" placeholder="job.name"
            v-model="$v.job.name.$model" style="max-width: 30em;">
            <button 
            type="submit"
            class="btn btn-success mt-2"
            :disabled="$v.job.$invalid">
            Editar</button>
        </form>
        <small class="text-danger"
        v-if="!$v.job.name.required">
        Campo Requerido</small>
        {{$v.job.name}}
    </div>

</template>

<script>
import {mapActions, mapState} from 'vuex'
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
    name: 'Edit',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getJob(this.id)
    },
    methods: {
        ...mapActions(['getJob', 'editJob'])
    },
    computed: {
        ...mapState(['job'])
    },
    validations: {
        job: {
            name: {required}
        }
    }
}
</script>