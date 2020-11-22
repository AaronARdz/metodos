<template>
  <div id="app" class="">
    <router-view/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  methods: {
    ...mapActions(['userLogout'])
  },
  computed: {
    ...mapGetters(['userExists'])
  }
}
</script>

<style>

</style>
