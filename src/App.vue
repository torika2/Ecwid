<template>
  <div class="container position-relative">
    <div class="header">
      <div class="position-fixed bg-dark w-100 text-white header-fixed px-3 d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center justify-content-between">
          <a
              href="/"
              class="d-flex align-items-center text-white px-4"
          >
            <img src="./assets/logo.png" height="30" alt="">
          </a>
        </div>
        <div>
          <i class="bi bi-cart"></i>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import "@/assets/css/HelloWorld.css"

export default {
  name: 'App',
}
</script>