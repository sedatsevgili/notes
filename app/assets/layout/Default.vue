<template>
  <div id="wrapper">
    <Sidebar @logout-clicked="logout" />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar />
        <div class="container-fluid">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const logout = async () => {
  store.dispatch('logout')
  router.push({path: '/auth/login'})
}
</script>