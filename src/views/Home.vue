<template>
    <div class="content-wrapper">
        <div class="content">
            <div class="row">
                <div class="col">
                <h1>Bienvenido</h1>
                    <h3 class="d-inline">Usuario:</h3><p class="ml-2 d-inline">{{user.email}}</p>
                </div>
            </div>
        <hr class="my-4">
        <router-link
        to="/add"
        >
        <button class="btn btn-info">Agregar</button>
        </router-link>
        <form @submit.prevent="finder(text)">
            <input type="text" placeholder="Buscar..."
            class="form-control mt-4 mb-4"
            v-model="text" v-on:keyup="finder(text)">
        </form>
        <div class="text-center mx-auto mt-5" v-if="loading">
            <p>Cargando...</p>
            <pacman-loader :loading="loading" :color="green"></pacman-loader>
        </div>
        <div class="alert alert-success" role="alert">
            Desbloqueado
        </div>
        <div class="alert alert-secondary" role="alert">
            Por desbloquear
        </div>
        <h3>Unidad 1</h3>
        <div class="row">
            <div class="col">
            <ul class="list-group">
                <li class="list-group-item" :class="{'list-group-item-success' : unidades.interpolacion.interpolacion }">Metodo interpolacion Lineal</li>
                <li class="list-group-item" :class="{'list-group-item-success' : unidades.interpolacion.nAdelante }">Metodo Newton hacia adelante</li>
                <li class="list-group-item" :class="{'list-group-item-success' : unidades.interpolacion.nAtras }">Metodo Newton hacia adelante </li>
                <li class="list-group-item" :class="{'list-group-item-success' : unidades.interpolacion.nDivididas }">Metodo Newton Diferencias divididas</li>
                <li class="list-group-item" :class="{'list-group-item-success' : unidades.interpolacion.lagrange }">Metodo Newton Diferencias divididas</li>
            </ul>
            </div>
            <div class="col">
            <ul class="list-group">
                <li class="list-group-item" :class="{'list-group-item-dark' : !unidades.noLineales.grafico }">Metodo Gráfico</li>
                <li class="list-group-item" :class="{'list-group-item-dark' : !unidades.noLineales.bisectriz }">Metodo Bisectriz</li>
                <li class="list-group-item" :class="{'list-group-item-dark' : !unidades.noLineales.puntoFijo }">Metodo Punto Fijo </li>
                <li class="list-group-item" :class="{'list-group-item-dark' : !unidades.noLineales.nRaphson }">Metodo Newton Raphson </li>
                <li class="list-group-item" :class="{'list-group-item-dark' : !unidades.noLineales.falsaposicion}">Metodo Falsa posición </li>
            </ul>
            </div>
        </div>
        <h3 class="mt-4">Unidad 2</h3>
        <div class="row">
            <div class="col">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Metodo interpolacion Lineal : {{unidades.lineales.montante}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Newton hacia adelante : {{unidades.lineales.gaussJordan}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Newton hacia adelante : {{unidades.lineales.eliminacion}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Newton Diferencias divididas : {{unidades.lineales.gaussSeidel}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Newton Diferencias divididas : {{unidades.lineales.jacobi}}</li>
                </ul>
            </div>
            <div class="col">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Metodo Linea recta : {{unidades.minCuadrados.lineaRecta}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Cuadrática : {{unidades.minCuadrados.cuadratica}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Cúbica : {{unidades.minCuadrados.cubica}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Lineal con función : {{unidades.minCuadrados.linealFuncion}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Cuadrática con función: {{unidades.minCuadrados.cuadraticaFuncion}}</li>
                </ul>
            </div>
        </div>
        <h3 class="mt-4">Unidad 3</h3>
        <div class="row">
            <div class="col">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Metodo Regla trapezoidal : {{unidades.integracion.trapezoidal}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Newton-Cotes Cerradas: {{unidades.integracion.cotesCerradas}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Newton-Cotes Abiertas : {{unidades.integracion.cotesAbiertas}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo 1/3 Simpson : {{unidades.integracion.tercioSimpson}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo 3/8 Simpson : {{unidades.integracion.octavoSimpson}}</li>
                </ul>
            </div>
        </div>
        <h3 class="mt-4">Unidad 4</h3>
        <div class="row">
            <div class="col">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark">Metodo Euler : {{unidades.diferenciales.euler}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Euler Hacia Adelante: {{unidades.diferenciales.eulerAdelante}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Euler Hacia atrás : {{unidades.diferenciales.eulerAtras}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Euler Modificado : {{unidades.diferenciales.eulerModificado}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Runge-Kutta Segundo orden : {{unidades.diferenciales.rKSegundo}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Runge-Kutta Tercer orden : {{unidades.diferenciales.rKTercer}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Runge-Kutta 4to orden : {{unidades.diferenciales.rKCuarto}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Runge-Kutta 1/3 Simpson : {{unidades.diferenciales.rKTercioSimpson}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Runge-Kutta 3/8 Simpson : {{unidades.diferenciales.rKOctavoSimpson}}</li>
                    <li class="list-group-item list-group-item-dark">Metodo Runge-Kutta Orden Superior : {{unidades.diferenciales.rKOrdenSuperior}}</li>
                </ul>
            </div>
        </div>

        <!-- <div v-if="!loading" class="mt-4">
            <ul class="list-group">
            <li class="list-group-item" v-for="item of unidades" :key="item.id">
                {{item.name}} {{item.id}}
            <router-link :to="{name: 'Edit', params: {id: item.id}}">
                <button class="btn btn-primary float-right">Editar</button>
            </router-link>
            <button class="btn mr-2 btn-danger float-right" @click="deleteJob(item.id)">Eliminar</button>
            </li>
            </ul>
        </div> -->
        </div>
    </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import PacmanLoader from 'vue-spinner/src/PacmanLoader.vue'

export default {
    components: {
        PacmanLoader
    },
    data() {
        return {
            text: '',
            green: '#009844',
            size: '50px'
        }
    },
    name: 'Home',
    computed: {
        ...mapState(['user','jobs','loading','unidades']),
        ...mapGetters(['filteredArray'])
    },
    methods: {
        ...mapActions(['getJobs', 'deleteJob','finder'])
    },
    created() {
        this.getJobs()
    }
}
</script>