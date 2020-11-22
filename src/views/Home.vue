<template>
    <div class="content-wrapper">
        <div class="content">
            <div class="row">
                <div class="col">
                <h1>Ruta protegida</h1>
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

        <div v-if="!loading" class="mt-4">
            <ul class="list-group">
            <li class="list-group-item" v-for="item of filteredArray" :key="item.id">
                {{item.name}} {{item.id}}
            <router-link :to="{name: 'Edit', params: {id: item.id}}">
                <button class="btn btn-primary float-right">Editar</button>
            </router-link>
            <button class="btn mr-2 btn-danger float-right" @click="deleteJob(item.id)">Eliminar</button>
            </li>
            </ul>
        </div>
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
        ...mapState(['user','jobs','loading']),
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