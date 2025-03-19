<template>
  <div class="row m-0">
    <div
        v-for="product in products"
        :key="product.id"
        class="col-md-4 card d-flex flex-column justify-content-between"
    >
      <div
          class="rounded my-3"
          :style="getImageStyle(product.originalImageUrl, '350px')"
      ></div>
      <div class="pb-2">
        <h6 v-text="product.name" class="d-flex align-items-start product-name font-weight-bold"></h6>
        <h5 v-text="product.price+'$'" class="d-flex align-items-center product-name font-weight-bold"></h5>
        <div v-html="setDescriptionLimit(product.description)"></div>
        <div class="w-100 btn btn-warning text-white font-weight-bold mt-2">buy</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props : {
    products : {
      type: Array,
      required: true
    },
  },
  emits : {
    getImageStyle : {
      type: Function,
      required: true,
    }
  },
  methods : {
    setDescriptionLimit(description){
      return description.slice(0, 150)+'<a href="#"> ...see more</a>'
    },
    getImageStyle(url, height='200px'){
      return {
        height,
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url('${url}')`,
      }
    }
  }
}
</script>
