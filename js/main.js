const App = {
    data(){
        return{
            currentPage:'main', //main catalog login logout cart 
            sliderPics:['./assets/Безымянный.jpg', './assets/Безымянный.jpg',],
            currentSlide:0,
            currentFilter:'0',
            currentSort:'0',
            detailed:null,
            newItems:[
                {img:'./assets/item4.jpeg', name:'Dawnbreaker Pendant', price:20, id:3},
                {img:'./assets/item5.jpg', name:'Legends Heat Changing Mug', price:20, id:4},
              {img:'./assets/item6.jpeg', name:'Legends Heat Changing Mug', price:80, id:5,},
              {img:'./assets/item7.jpeg', name:'Hinged Elder Scroll Necklace', price:60, id:6,},
                    ],
            items:[
                {img:'./assets/item.jpeg', name:'Legends Heat Changing Mug', price:20, id:0, type:'1', quantity:1,},
                {img:'./assets/item2.jpeg', name:'Legends Heat Changing Mug', price:60, id:1, type:'1', quantity:1,},
                {img:'./assets/item3.jpeg', name:'Amulet of Talos Reimagined', price:20, id:2, type:'1', quantity:1,},
                {img:'./assets/item4.jpeg', name:'Dawnbreaker Pendant', price:20, id:3, type:'1', quantity:1,},
                {img:'./assets/item5.jpg', name:'Legends Heat Changing Mug', price:20, id:4, type:'1', quantity:1,},
                {img:'./assets/item6.jpeg', name:'The Elder Scrolls V: Skyrim Ultimate...', price:90, id:5, type:'2', quantity:1,},
                {img:'./assets/item7.jpeg', name:'Hinged Elder Scroll Necklace', price:60, id:6, type:'2', quantity:1,},
            ],
            cart:[],
        }
    },
    methods: {
        slide(){
            return 'transform:translateX(-'+this.currentSlide*100+'vw);'
        },
        nextSlide(){
            if(this.currentSlide<this.sliderPics.length-1){
                this.currentSlide++;
            }
        },
        prevSlide(){
            this.currentSlide--;
        },
        addToCart(item){
            let s = -1;
            for(let i=0;i<this.cart.length; i++){
                if(item.id===this.cart[i].id){
                    s = i;
                    this.cart[i].quantity++
                }
            }
            if(s===-1){
                this.cart.push(item);
            }
         },
         itemQuantityMinus(item){
            if(item.quantity>0){
                item.quantity--
            }
            if(item.quantity===0){
                for(let i=0;i<this.cart.length; i++){
                    if(item.id===this.cart[i].id){
                        this.cart.splice(i,1);
                    }
                }
            }
         },
         removeFromCart(item){
            for(let i=0;i<this.cart.length; i++){
                if(item.id===this.cart[i].id){
                    this.cart.splice(i,1);
                }
            }
         },
         goToDetailedPage(item){
            this.currentPage='detailed'
            this.detailed = item
         }
    },
    computed:{
        sort(){
            const copyArr = [...this.items]
            if(this.currentSort==0){
                return this.items
            }
            else if(this.currentSort==1){
                return copyArr.sort((a, b)=>a.price-b.price)
            }
            else if(this.currentSort==2){
                return copyArr.sort((a, b)=>b.price-a.price)
            }
        },
        totalSum(){
            let s = 0;
            for(let i=0; i<this.cart.length; i++){
                s = s + this.cart[i].price *this.cart[i].quantity;
            }
            return s;
         }
    }
}
Vue.createApp(App).mount('#app');