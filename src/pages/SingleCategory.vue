<template>
  <div class="row m-0 w-100">
    <div
    >
      <div
          v-text="category.name"
          class="w-100 my-2 cursor-pointer py-3 px-4 text-center"
      ></div>
      <ProductList
          :products="category.products"
      />
    </div>
  </div>
</template>
<script>
import apiHelper from "@/helpers/apiHelper"
import uiHelper from "@/helpers/uiHelper"
import ProductList from "@/components/ProductList.vue"
export default {
  components: {ProductList},
  mixins: [
      apiHelper,
      uiHelper
  ],
  data(){
    return {
      products : [],
      category : []
    }
  },
  created () {
    this.startLoading(true)
    this.getData('categories', '/' + this.categoryId).then((data)=>{
      this.category = data
      this.getData('products').then((data)=>{
        this.products = data.items
        this.getFilteredCategoryWithProducts()
      })
    }).catch(()=>{
      this.$router.back()
    })
  },
  computed : {
    categoryId(){
      return this.$route.params.categoryId
    }
  },
  methods : {
    getFilteredCategoryWithProducts(){
        const category = this.category
        category.products = []
        this.products.filter((product)=> {
          product.categories.find((product_category) => {
            if (product_category.id === category.id) {
              category.products.push(product)
              this.products = []
              this.startLoading(false)
            }
          })
        })
    }
  }
}
</script>