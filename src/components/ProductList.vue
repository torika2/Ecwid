<template>
  <div class="row m-0 product-list">
    <div
        class="col-md-4 card d-flex flex-column justify-content-between product-item"
        v-for="product in products"
        :key="product.id"
    >
      <div>
        <div
            @click="$router.push({ path: '/products/'+product.id })"
            class="rounded my-3 product-image cursor-pointer"
            :style="getImageStyle(product.originalImageUrl, '400px', '100%')"
        ></div>
        <h6 v-text="product.name" class="d-flex align-items-start product-name font-weight-bold"></h6>
        <h5 v-text="product.price+'$'" class="d-flex align-items-center product-name font-weight-bold"></h5>
        <div v-html="setDescriptionLimit(product.description, product.id)"></div>
      </div>
      <div class="pb-2">
        <div
            @click="$router.push({ path: '/products/'+product.id })"
            class="w-100 btn btn-dark text-white font-weight-bold mt-2"
        >
          Details
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiHelper from "@/helpers/apiHelper"
import uiHelper from "@/helpers/uiHelper"

export default {
  props : {
    products : {
      type: Array,
      required: true
    },
  },
  mixins : [
      apiHelper,
      uiHelper
  ],
}
</script>
