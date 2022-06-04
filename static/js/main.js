let vue = new Vue({
    el: '#app',
    delimiters: ['[[', ']]'],
    data:{
        products: [],
        cart: [],
        selectedSize:'',
        sizesArray:[],
        toastMessage: '',
        toastType: '',
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
              
             if(this.selectedSize){
                this.message(`${this.products.title} size ${this.selectedSize.label} was added to your cart`, 'success')
                if(!this.sizesArray.includes(this.selectedSize.id)){
                    this.sizesArray.push(this.selectedSize.id)
                    this.cart.push(product)
                    
                  }else{
                      this.cart.find(item => item.id === this.selectedSize.id).quantity++
                  }
             }
             else{
                this.message('Please select the size before add to cart' , 'danger')
             }
              
          
        },
        message(msg,type){
            this.toastMessage = msg
            this.toastType = type
            this.messageToast()
        },
        messageToast(){
            let toastLiveExample = document.getElementById('toast-message')
            let toast = new bootstrap.Toast(toastLiveExample)
            setTimeout(() => {
                toast.show()
            }), 500
            // toast.show()
            
            
        },
    },
    mounted(){
        this.getProducts()
    }

});