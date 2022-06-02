let vue = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data:{
        products: [],
        cart: [],
        selectedSize:'',
        sizesArray:[],
        alertMessage: false
    },
    methods:{
        async getProducts(){
            // const response = await axios.get('//localhost:5000/api');
            const response = await axios.get('//sea-turtle-app-xz46v.ondigitalocean.app/api');
            this.products = response.data
        },
        selectSize(size){
            this.selectedSize = size
        },
        addToCart(){
            let product = {
                "id": this.selectedSize.id,
                "product":this.products, 
                "size":this.selectedSize, 
                "quantity":1
                }
              
              if(!this.sizesArray.includes(this.selectedSize.id)){
                this.sizesArray.push(this.selectedSize.id)
                this.cart.push(product)
                
              }else{
                  this.cart.find(item => item.id === this.selectedSize.id).quantity++
              }
          
        }
    },
    mounted(){
        this.getProducts()
    }

});