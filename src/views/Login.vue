<template>
    <div class="content-wrapper">
         <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">Bienvenido a mi proyecto de Métodos Númericos</h1>
          </div><!-- /.col -->
        </div><!-- /.row -->
        <div class="row mb-2">
          <div class="col-sm-12 col-md-12">
            <p class="m-0 text-dark">A countinuación te pediré que te registres con tu correo y una contraseña,
                una vez registrado podras acceder a visualizar los métodos de la Unidad temática 1.
            </p>
            <br>
            <p>Para desbloquear la siguiente unidad
                tendrás que contestar correctamente los problemas de la unidad previa</p>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

        <div class="content container-fluid">
              <h1>Inicio de Sesión</h1>
            <form @submit.prevent="userLogin({email: $v.email.$model, password: $v.pass.$model})">
            <input type="email"
            placeholder="Ingresar email"
            v-model="$v.email.$model"
            class="form-control my-2"
            >

            <small class="text-danger d-block" v-if="!$v.email.required">Campo Requerido</small>

            <input type="password"
            placeholder="Ingresar contraseña"
            v-model="$v.pass.$model"
            class="form-control my-2"
            >
            <small class="text-danger d-block" v-if="!$v.pass.required">Campo Requerido.</small>
            <small class="text-danger d-block" v-if="!$v.pass.minLength">Minimo 6 caracteres.</small>

            <button type="submit" 
            class="btn btn-success"
            :disabled="$v.$invalid">Acceder</button>
        </form>
        <p v-if="error == 'auth/user-not-found'">Usuario Incorrecto</p>
        <p v-if="error == 'auth/wrong-password'">Contraseña Incorrecta</p>
        </div>
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