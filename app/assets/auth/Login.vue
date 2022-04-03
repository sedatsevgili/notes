<template>
  <Layout>
    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image" style="height:600px;"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input type="email" v-model="email" class="form-control form-control-user"
                             id="exampleInputEmail" aria-describedby="emailHelp"
                             placeholder="Enter Email Address...">
                    </div>
                    <div class="form-group">
                      <input type="password" v-model="password" class="form-control form-control-user"
                             id="exampleInputPassword" placeholder="Password">
                    </div>
                    <a href="#" @click="login" class="btn btn-primary btn-user btn-block">
                      Login
                    </a>
                  </form>
                  <hr>
                  <div class="text-center">
                    <router-link to="/auth/register" class="small">Create an Account!</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </Layout>

</template>

<script setup>
import Layout from '../layout/Default'
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const email = ref('')
const password = ref('')

const login = async () => {
  await store.dispatch('login',  {email: email.value, password: password.value})
}

</script>

<style scoped>
button {
  font-weight: bold;
}
</style>
