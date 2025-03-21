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
              :style="getImageStyle(image.imageOriginalUrl, '50px', '50px')"
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
              :style="getImageStyle(image.imageOriginalUrl, '700px', '100%')"
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
          <div
              class="my-4"
              v-for="(option, o_index) in product.options"
              :key="o_index"
          >
            <div>
              <h5 v-text="option.name+' :'"></h5>
            </div>
            <div class="d-flex align-items-center">
              <div
                  :class="{
                    'bg-primary text-white font-weight-bold' : choice.is_active,
                  }"
                  class="mx-2 border border-secondary py-2 px-3 rounded cursor-pointer"
                  @click="setActiveChoice(choice.text)"
                  v-for="choice in option.choices"
                  :key="choice.text"
                  v-text="choice.text"
              ></div>
            </div>
          </div>
          <p class="mb-0" v-html="product.description"></p>
        </div>
        <div
            @click="shoppingCardCounter(1, product, getChoosenProductSize())"
            class="btn btn-dark text-white font-weight-bold"
        >
          Buy
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiHelper from "@/helpers/apiHelper"
import uiHelper from "@/helpers/uiHelper"
export default {
  mixins : [
      apiHelper,
      uiHelper
  ],
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
      this.setMediaImagesActivity()
      this.setOptionChoiceActivity()
      this.startLoading(false)
    }).catch(()=>{
      alert(`That kind of product doesn't exist!`)
      this.$router.back()
    })
  },
  methods : {
    getChoosenProductSize(){
      let size
      this.product.options.filter((option)=>{
        option.choices.find((choice)=> {
           if(choice.is_active){
             size = choice.text
           }
        })
      })
      return size
    },
    setMediaImagesActivity(){
      this.product.media?.images.map((image, index)=>{
        image.is_active=!!index==0;
      })
    },
    setActiveChoice(choice_text){
      this.product.options.filter((option)=>{
        option.choices.filter((choice)=> choice.is_active = choice.text === choice_text)
      })
    },
    setOptionChoiceActivity(){
      this.product.options.filter((option)=>{
        option.choices.filter((choice, c_index)=>{
          choice.is_active = c_index === 0;
        })
      })
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