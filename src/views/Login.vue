<template>
    <div>
        <h1>User Login</h1>
        <form @submit.prevent="userLogin({email: $v.email.$model, password: $v.pass.$model})">
            <input type="email"
            placeholder="ingrese email"
            v-model="$v.email.$model"
            class="form-control my-2"
            >

            <small class="text-danger d-block" v-if="!$v.email.required">Campo Requerido</small>

            <input type="password"
            placeholder="ingrese contrasena"
            v-model="$v.pass.$model"
            class="form-control my-2"
            >
            <small class="text-danger d-block" v-if="!$v.pass.required">Campo Requerido.</small>
            <small class="text-danger d-block" v-if="!$v.pass.minLength">Minimo 6 caracteres.</small>

            <button type="submit" 
            class="btn btn-danger"
            :disabled="$v.$invalid">Acceder</button>
        </form>
        <p v-if="error == 'auth/user-not-found'">Usuario Incorrecto</p>
        <p v-if="error == 'auth/wrong-password'">Contraseña Incorrecta</p>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            pass: ''
        }
    },
    methods: {
        ...mapActions(['userLogin'])
    },
    computed: {
        ...mapState(['error'])
    },
    validations: {
        email: {required, email},
        pass: {required, minLength: minLength(6)}
    }
}
</script>