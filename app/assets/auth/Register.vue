<template>
  <Layout>
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
          <!-- Nested Row within Card Body -->
          <div class="row">
            <div class="col-lg-5 d-none d-lg-block bg-register-image" style="height:600px;"></div>
            <div class="col-lg-7">
              <div class="p-5">
                <div class="text-center">
                  <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form class="user">
                  <div class="form-group">
                    <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                           placeholder="Email Address">
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-user"
                           id="exampleInputPassword" placeholder="Password">
                  </div>
                  <a href="login.html" class="btn btn-primary btn-user btn-block">
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
  </Layout>
</template>

<script setup>
import Layout from '../layout/Default'
</script>
