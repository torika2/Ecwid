<template>
  <div class="row m-0 w-100">
    <div class="col-md-12 row m-0 mt-4 w-100">
      <div
          class="col-md-6 rounded"
          :style="getImageStyle(product.originalImageUrl)"
      ></div>
      <div
          class="col-md-6 mt-4 mt-sm-4 mt-md-0 d-flex flex-column justify-content-between"
      >
        <div>
          <h4 class="mb-0 d-flex justify-content-start" v-text="product.name"></h4>
          <h5 class="mb-0 d-flex justify-content-start font-weight-bold my-2" v-text="product.price+'$'"></h5>
          <p class="mb-0" v-html="product.description"></p>
        </div>
        <div class="btn btn-success text-white font-weight-bold">Buy</div>
      </div>
    </div>
  </div>
</template>
<script>
import apiHelper from "@/helpers/apiHelper"
export default {
  mixins: [apiHelper],
  data(){
    return {
      product : {}
    }
  },
  computed : {
    productId(){
      return this.$route.params.productId
    }
  },
  created () {
    this.getData('products', '/' + this.productId).then((data)=>{
      this.product = data
      this.startLoading(false)
    }).catch(()=>{
      alert(`That kind of product doesn't exist!`)
      this.$router.back()
    })
  },
  methods : {
    getImageStyle(url){
      return {
        height : '700px',
        width: '150%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url('${url}')`,
      }
    }
  }
}
</script>