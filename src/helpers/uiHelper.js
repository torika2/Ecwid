export default {
    created(){
        this.countedCartItems()
    },
    methods: {
        startLoading(bool = true){
            document.getElementById('loader')
                ?.setAttribute(
                    'style',
                    `display:${bool ? 'flex!important' : 'none!important'}`
                )
        },
        countedCartItems(){
            let storage = JSON.parse(localStorage.getItem('cart'))
            let div = document.getElementById('cart-item-counter')
            if(storage !== null){
                div.innerText = storage.length
            }
        },
        shoppingCardCounter(index = 1, product = null, product_size = null, product_index = null){
            if(!Array.isArray(JSON.parse(localStorage.getItem('cart')))){
                localStorage.setItem('cart', JSON.stringify([]))
            }
            if (index === 1){
                let get_local_storage = JSON.parse(localStorage.getItem('cart'))
                get_local_storage.push({
                    id : product.id,
                    name : product.name,
                    price : product.price,
                    image : product.originalImageUrl,
                    description : this.setDescriptionLimit(product.description ,product.id),
                    product_size
                })
                localStorage.setItem('cart', JSON.stringify(get_local_storage))
            }else if(index === -1){
                let storage = JSON.parse(localStorage.getItem('cart'))
                storage.splice(product_index, 1)
                localStorage.setItem('cart', JSON.stringify(storage))
            }
            this.countedCartItems()
        },
        getImageStyle(url, height, width, backgroundSize = 'cover', backgroundPosition = 'center'){
            return {
                height,
                width,
                backgroundPosition,
                backgroundSize,
                backgroundRepeat: 'no-repeat',
                backgroundImage : `url('${url}')`,
            }
        },
        setDescriptionLimit(description, product_id){
            return description.slice(0, 150)+`<a href="/products/${product_id}"> ...see more</a>`
        },
    }
}