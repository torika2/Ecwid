<template>
  <div class="header">
    <div class="position-fixed bg-dark w-100 text-white header-fixed px-3 d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center justify-content-between">
        <a
            href="/"
            class="vue-logo d-flex align-items-center text-white px-4"
        >
          <img src="@/assets/images/logo.png" height="30" alt="">
        </a>
      </div>
      <div class="d-flex align-items-center">
        <div class="font-weight-bold px-2" id="cart-item-counter">
          0
        </div>
        <div
            @click="$router.push('/shopping-cart')"
            class="cursor-pointer"
        >
          <img src="@/assets/images/cart.svg" height="30" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>