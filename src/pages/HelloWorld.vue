<template>
  <div>
    <div class="row m-0 border-bottom border-danger">
      <div
          class="col-md-6"
          v-for="category in categories"
          :key="category.id"
      >
        <a
            :href="`/category/${category.id}`"
            v-text="category.name"
            class="w-100 my-2 cursor-pointer text-white py-2 px-4 text-center category-item d-flex align-items-center justify-content-center"
        ></a>
      </div>
    </div>
    <ProductList
        :products="products"
    />
  </div>
</template>
<script>
import apiHelper from "@/helpers/apiHelper"
import uiHelper from "@/helpers/uiHelper"
import ProductList from "@/components/ProductList.vue"

export default {
  name: 'HelloWorld',
  components: {ProductList},
  mixins : [
      apiHelper,
      uiHelper
  ],
  data(){
    return {
      products : [],
      categories : [],
    }
  },
  created () {
    this.startLoading(true)
    this.getData('categories').then((data)=>{
      this.categories = data.items
      this.getData('products').then((data)=>{
        this.products = data.items
        this.startLoading(false)
      })
    })
  }
}
</script>
