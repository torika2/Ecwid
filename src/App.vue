<template>
  <div class="container position-relative pb-5">
    <div id="loader" class="position-absolute loader-main-div d-flex align-items-center justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <MainHeader/>
    <router-view></router-view>
  </div>
</template>
<script>
import "@/assets/css/HelloWorld.css"
import MainHeader from "@/components/MainHeader.vue"

export default {
  name: 'App',
  components: {MainHeader},
}
</script>