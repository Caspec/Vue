import Vue from 'vue'
import products from '../views/Giftcards.vue'

export const Store = new Vue({
    data() {
        return {
            products,
            cart: [],
            buyerinformations: []
        };
    },
    methods: {
        addGiftcard(product) {
            const locationInCart = this.cart.findIndex(p => { return p.details.product_id === product.product_id })
            if (locationInCart === -1) {
                this.cart.push({
                    details: product,
                    quantity: 1
                })
            } else {
                this.cart[locationInCart].quantity++
            }
        },
        removeGiftcard(product_id) {
            const locationInCart = this.cart.findIndex(p => {
                return p.details.product_id === product_id
            })
            if (this.cart[locationInCart].quantity <= 1) {
                this.cart.splice(locationInCart, 1)
            } else {
                this.cart[locationInCart].quantity--
            }
        },
        addBuyerInformation(firstname, lastname){
            this.buyerinformations.push(firstname, lastname)
        }
    }
});