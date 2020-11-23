<template>
<div class="content-wrapper">
     <div class="container mt-4">
        <h1>Agregar</h1>
        <form class="form-group" @submit.prevent="addJob(name)">
            <input type="text" v-model="$v.name.$model">   
            <button 
            type="submit" 
            class="btn btn-success"
            :disabled="$v.$invalid || loading"
            >Agregar</button>
            <small class="text-danger d-block" v-if="!$v.name.required">Campo requerido</small>
            <small class="text-danger d-block" v-if="!$v.name.minLength">Minimo 4 caracteres</small>
        </form>
        {{$v.name}}
    </div>
</div>
   
</template>

<script>
import {mapActions, mapState} from 'vuex'
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
    name: 'Add',
    data() {
        return {
            name: ''
        }
    },
    methods: {
        ...mapActions(['addJob'])
    },
    validations: {
        name: {
            required,
            minLength: minLength(4)
        },
    },
    computed: {
        ...mapState(['loading'])
    }
}
</script>