<template>
  <div class="row m-0 w-100">
    <div class="col-md-12 row m-0 mt-4 w-100">
      <div class="col-md-6 d-flex">
        <div class="mx-2">
          <div
              @click="selectSpecificImage(image.id)"
              v-for="image in product?.media?.images"
              :key="image.id"
              class="rounded mt-2 border cursor-pointer"
              :class="{
                'border-success' : image.is_active,
              }"
              :style="{
                height : '50px',
                width : '50px',
                backgroundPosition : 'center',
                backgroundSize : 'cover',
                backgroundImage : `url('${image.imageOriginalUrl}')`,
              }"
          ></div>
        </div>
        <div class="position-relative w-100">
          <div class="position-absolute left-arrow cursor-pointer" @click="setActiveImageUrl(-1)">
            <i class="bi bi-arrow-left" style="font-size: 35px"></i>
          </div>
          <div
              v-for="image in product?.media?.images"
              :key="image.id"
              v-show="image.is_active"
              class="rounded"
              :style="getImageStyle(image.imageOriginalUrl)"
          ></div>
          <div class="position-absolute right-arrow cursor-pointer" @click="setActiveImageUrl(1)">
            <i class="bi bi-arrow-right" style="font-size: 35px"></i>
          </div>
        </div>
      </div>
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
  mixins : [apiHelper],
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
  created(){
    this.getData('products', '/' + this.productId).then((data)=>{
      this.product = data
      this.product.media?.images.map((image, index)=>{
        image.is_active=!!index==0;
      })
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
        width : '100%',
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        backgroundImage : `url('${url}')`,
      }
    },
    selectSpecificImage(image_id){
      this.product.media.images.filter((image)=>{
        image.is_active = image.id === image_id;
      })
    },
    setActiveImageUrl(index){
      let active_index = 0
      this.product.media.images.map((image, active_image_index)=>{
        if(image.is_active){
          active_index = active_image_index
        }
        image.is_active = false
      })
      let next_index = active_index+index
      let i = (next_index > this.product.media.images.length-1) ? 0
          : (next_index < 0) ? this.product.media.images.length-1
              : next_index
      this.product.media.images[i].is_active = true
    }
  }
}
</script>