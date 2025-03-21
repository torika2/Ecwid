<template>
  <div class="position-relative" v-if="!order_success">
    <h4 class="mt-4 w-100 text-center">Shopping Cart</h4>
    <div class="card mt-3">
      <div
        v-if="products === null"
      >
        <h4 class="text-center m-0 p-5 font-weight-light">There are no products have enough products.</h4>
      </div>
      <div
        class="border-bottom rounded p-3 row m-0"
        v-for="(product, i_index) in products"
        :key="i_index"
      >
        <div
            @click="$router.push({ path: '/products/'+product.id })"
            class="col-md-4 rounded product-image cursor-pointer"
            :style="getImageStyle(product.image, '250px', '100%', 'contain')"
        ></div>
        <div class="col-md-5 d-flex flex-column">
          <h6 v-text="product.name" class="d-flex align-items-start product-name font-weight-bold"></h6>
          <h5 v-text="product.price+'$'" class="m-0 d-flex align-items-center product-name font-weight-bold"></h5>
          <div class="d-flex align-items-center my-2">
            <h5 class="m-0 font-weight-bold m-0">
              Size : {{product.product_size}}
            </h5>
          </div>
          <div v-html="setDescriptionLimit(product.description, product.id)"></div>
        </div>
        <div
          class="col-md-3 d-flex align-items-center justify-content-center"
        >
          <div
              @click="shoppingCardCounter(-1, null, null, i_index);products.splice(i_index, 1)"
              class="btn btn-danger"
          >
            <i class="bi bi-trash"></i>
          </div>
        </div>
      </div>
    </div>
    <div
        v-show="totalProductPrice() > 0"
        @click="orderSuccess()"
        class="place-your-order mt-2 btn btn-success float-right py-2 position-fixed"
    >
      <div>
        Place your order
      </div>
      <div>
        Total : {{totalProductPrice()}}$
      </div>
    </div>
  </div>
  <div class="d-flex align-items-center justify-content-center success-order-message rounded" v-else>
    <div class=" py-2 px-3 rounded font-weight-bold text-center">
      Your order has been placed successfully!
    </div>
  </div>
</template>
<script>
import uiHelper from "@/helpers/uiHelper"

export default {
  mixins : [
      uiHelper
  ],
  created(){
    this.setStorageItems()
  },
  data(){
    return {
      products : [],
      order_success : false
    }
  },
  methods : {
    setStorageItems(){
      this.products = JSON.parse(localStorage.getItem('cart'))
      this.startLoading(false)
    },
    totalProductPrice(){
      let price = 0
      if (this.products){
        this.products.filter((product)=>{
          price += product.price
        })
        return price.toFixed(2)
      }
      return 0
    },
    orderSuccess(){
      localStorage.clear()
      this.order_success = true
    }
  }
}
</script>