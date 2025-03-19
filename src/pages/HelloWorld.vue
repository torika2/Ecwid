<template>
  <div>
    <div class="row m-0 border-bottom border-danger">
      <div
          class="col-md-4 col-lg-3 "
          v-for="category in categories"
          :key="category.id"
      >
        <a
            :href="`/category/${category.id}`"
            v-text="category.name"
            class="btn btn-dark my-2 cursor-pointer py-2 px-4 text-center"
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
import ProductList from "@/components/ProductList.vue"

export default {
  name: 'HelloWorld',
  components: {ProductList},
  mixins : [
      apiHelper
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
