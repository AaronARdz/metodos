<template>
    <div class="content-wrapper">
        <div class="content container">
            <h1>Registro de Usuarios</h1>
            <form @submit.prevent="createUser({email: email,password: passOne})">
            <input 
            type="email" placeholder="Ingrese su correo"
            class="form-control my-2"
            v-model="$v.email.$model">

            <small class="text-danger d-block" v-if="!$v.email.required">Campo Requerido</small>
            <small class="text-danger d-block" v-if="!$v.email.email">Email no valido</small>

            <input 
            type="password" 
            placeholder="Ingrese su contrasena"
            class="form-control my-2"
            v-model="passOne">

            <small class="text-danger d-block" v-if="!$v.passOne.minLength">Campo Requerido</small>

            <input 
            type="password" 
            placeholder="Confirme su contrasena"
            class="form-control my-2"
            v-model="passTwo">

            <small class="text-danger d-block" v-if="!$v.passTwo.sameAs">Campo Requerido</small>

            <button type="sumbit" :disabled='!deactivate' class="btn btn-info" >Registrate</button>
        </form>
        <p v-if="error == 'Error: The email address is already in use by another account.'">Email ya registrado.</p>
        </div>
        
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

export default {
    name: 'Register',
    data() {
        return {
            email: '',
            passOne: '',
            passTwo: '',
        }
    },
    created() {

    },
    methods: {
        ...mapActions(['createUser'])
    },
    computed: {
        ...mapState(['error']),
        deactivate() {
            return this.passOne === this.passTwo && this.passOne.trim() !== '' && this.passOne.length > 5
        }
    },
    validations: {
        email: {required, email},
        passOne: {required, minLength: minLength(6),},
        passTwo: {required, minLength: minLength(6), sameAs: sameAs('passOne')}
    }

}
</script>