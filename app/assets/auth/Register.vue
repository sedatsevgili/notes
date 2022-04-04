<template>
  <EmptyLayout>
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-6 d-none d-lg-block bg-register-image" style="height:600px;"></div>
            <div class="col-lg-6">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user">
                  <div class="form-group">
                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                           placeholder="Email Address" v-model="email">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-user"
                           id="exampleInputPassword" placeholder="Password" v-model="password">
                  </div>
                  <a @click="register" class="btn btn-primary btn-user btn-block">
                    Register Account
                  </a>
                </form>
                <hr>
                <div class="text-center">
                  <router-link class="small" to="/auth/login">Already have an account? Login!</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </EmptyLayout>
</template>

<script setup>
import EmptyLayout from '../layout/Empty'

import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const register = async () => {
  try {
    await store.dispatch('register', {
      email: email.value,
      password: password.value
    })
    router.push({path: '/'})
  } catch (e) {
    console.error(e)
  }
}

</script>
