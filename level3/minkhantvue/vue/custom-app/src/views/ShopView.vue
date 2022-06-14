<template>
    <div class="container">
        <div class="row">    
            <h3>This is Shop page !</h3>
            <p><router-link :to="{ name: 'shopdetail', params: { id: '1' }}">Item One</router-link></p>
            <p><router-link :to="{ name: 'shopdetail', params: { id: '2' }}">Item Two</router-link></p>
        </div>
        <div class="row" v-if="products.length>0">
            <div class="col-lg-3 col-md-4 col-sm6 col-12" v-for="(product,index) in products" :key="index">
                <div class="card" >
                <img :src="product.image" class="card-img-top w-50 mx-auto p-3" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${{product.price}}</h5>
                        <p class="card-text">${{product.title}}</p>
                        <div class="d-flex justify-content-center">
                            <a href="#" class="btn btn-primary">View</a>
                            <a href="#" class="btn btn-primary">Add To Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
    import { response } from 'express';

    const axios = require('axios').default;
    export default {
        name: 'ShopView',
        data(){
            return{
                products: [],
            }
        },
        mounted(){
            this.getAllProducts()
        },
        methods:{
            getAllProducts(){
                axios.get('https://fakestoreapi.com/products')
                .then(response =>{
                    // console.log(response);
                    this.products = response.data
                })
            }
        }
    }
</script>
