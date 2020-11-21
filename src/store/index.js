import Vue from 'vue'
import Vuex from 'vuex'

import {auth, db} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    jobs: [],
    job: {name: '', id: ''},
    loading: false,
    text: ''
  },
  mutations: {
    setUser(state,payload) {
      state.user = payload
    },
    setError(state,payload) {
      state.error = payload
    },
    setJobs(state, payload) {
      state.jobs = payload
    },
    setJob(state, payload) {
      state.job  = payload
    },
    loadFirebase(state, payload) {
      state.loading = payload
    }
  },
  actions: {

    finder({commit, state}, payload) {
      console.log(payload);
      state.text = payload.toLowerCase();
    },
    getJobs({commit, state},){
      commit('loadFirebase', true);
      const jobs = []
      db.collection(state.user.email).get()
      .then(res => {
        res.forEach(doc => {
          let job = doc.data()
          job.id = doc.id
          jobs.push(job)
        })
        setTimeout(() => {
          commit('loadFirebase', false);
        }, 2000)
        
        commit('setJobs', jobs)
      })
    },
    getJob({commit, state}, jobId){
      db.collection(state.user.email).doc(jobId).get()
      .then(doc => {
        console.log(doc.id)
        console.log(doc.data())
        let job = doc.data()
        job.id = doc.id
        commit('setJob', job)
      })
    },
    editJob({commit, state}, job){
      console.log('edit')
      db.collection(state.user.email).doc(job.id).update({
        name: job.name
      })
      .then(() => {
        console.log('job edited')
        router.push('/')
      })
    },
    addJob({commit, state}, name) {
      commit('loadFirebase', true);
      db.collection(state.user.email).add({
        name: name
      })
      .then(doc => {
        commit('loadFirebase', false);
        console.log("added" + doc.id)
        router.push('/')
      })
    },
    deleteJob({commit, state}, id) {
      db.collection(state.user.email).doc(id).delete()
      .then(() => {
        console.log('deleted job')
        this.dispatch('getJobs')
      })
    },
    createUser({commit}, user) {
      auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res)
        const userCreated ={
          email: res.user.email,
          uid: res.user.uid,
          password: res.user.password
        }
        db.collection(res.user.email).add({
          name: 'example job'
        }).then(doc => {
          commit('setUser', userCreated)
          router.push('/')
        }).catch(error => console.log(error))
      }).catch(error => {
        console.log(error)
        commit('setError', error)
      })
    },
    userLogin({commit}, user) {
      auth.signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        console.log(res)
        const loggedUser ={
          email: res.user.email,
          uid: res.user.uid,
          password: res.user.password
        }
        commit('setUser', loggedUser)
        router.push('/')
      })
      .catch(error => {
        console.log(error)
        commit('setError', err.code)
      })
    },
    userLogout({commit}) {
      auth.signOut()
      .then(() => {
        router.push('/login')
      })
    },
    detectUser({commit},user) {
      commit('setUser',user)
    },
  },
  getters: {
    userExists(state) {
      if (state.user === null) {
        return false
      } else {
        return true
      }
    },
    filteredArray(state){
      let filteredSearch = []
      for ( let job of state.jobs) {
        let name = job.name.toLowerCase();
        if(name.indexOf(state.text) >= 0) {
          filteredSearch.push(job)
        }
      }
      return filteredSearch
    }
  },
  modules: {
  }
})
