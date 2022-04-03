<template>
  <div id="wrapper">
    <Sidebar @logout-clicked="$emit('logout-clicked')" />
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
</script>