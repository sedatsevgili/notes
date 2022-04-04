<template>
  <!-- Sidebar -->
  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <router-link class="nav-link" to="/">
        <i class="fas fa-fw fa-list"></i>
        <span>Notes</span></router-link>
    </li>

    <li class="nav-item">
      <a class="nav-link" href="#" @click="$emit('logout-clicked')">
        <i class="fas fa-fw fa-right-from-bracket"></i>
        <span>Logout</span></a>
    </li>

  </ul>
  <!-- End of Sidebar -->
</template>