Vue.component('product', {

    template: `
        <div class="product">

            <div class="product-image">
                <img :src="image">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>{{ sale }}</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>

                <div v-for="(variant, index) in variants"        
                        :key="variant.variantId"
                        class="color-box"
                        :style="{ backgroundColor: variant.variantColor }"
                        @mouseover="updateProduct(index)">
                </div>

                <a :href="link" target="_blank">
                    See more products like this
                </a>
            </div>

            <button @click="addToCart" 
                    :disabled="!inStock"
                    :class="{ disabledButton: !inStock }">Add to cart</button>

            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>
        </div>
        </div>
    `,
    data() {
        return { 
        brand: 'Awesome Vue',
        product: 'Socks',
        selectedVariant: 0,
        link: 'https://www2.hm.com/pl_pl/search-results.html?q=skarpety+on',
        details: ["60% cotton", "20% polyester", "femail product"],
        variants: [
            {
               variantId: 2234,
               variantColor: 'green',
               variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
               variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0
            }
        ],
        sizes: ["34-35", "36-37", "38-39", "40-41"],
        cart: 0,
        onSale: true
        
    },
    
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index);
            
        }
    },

    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' are on sale!'
            }
            return this.brand + ' ' + this.product + 'are not on sale.'
        }
    }
})


var app = new Vue({
    el: '#app',
})