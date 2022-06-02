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
            const response = await axios.get('//localhost:5000/api');
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
                // console.log(product.id)
         
            if(this.selectedSize){
               this.alertMessage = false
                for(item of this.cart){
                    if(item.id === this.selectedSize.id){
                        const found = this.cart.find(item => item.id === this.selectedSize.id)
                        console.log(found)
                        // console.log(this.cart[this.cart.indexOf(item,0)])
                        this.cart.splice(this.cart.indexOf(item), 0)
                        item.quantity += 1
                        this.cart[this.cart.indexOf(item)] = item
                        // console.log(this.cart[this.cart.indexOf(item)])
                        
                    }
                   
                    
                }
                this.cart.push(product)
               
            }
            else{
                this.alertMessage = true
            }

              
              
            
        }
    },
    mounted(){
        this.getProducts()
    }

});