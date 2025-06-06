import { configureStore, createSlice, current } from "@reduxjs/toolkit";

const savedcart=localStorage.getItem("cart");
const localStoragecart=savedcart?JSON.parse(savedcart):[];

const productsSlice=createSlice({
    name:'products',
    initialState:{
      
        home: [
    {
      name: "Vegetables",
      description: "Fresh and Organic Vegetables.",
      image: "/images/vegetables.jpg", // Make sure image is correctly imported or in /public
      route: "veg"
    },
    {
      name: "Non-Vegetarian",
      description: "Fresh Meat and Poultry.",
      image: "/images/non-vegetrain.jpg",
      route: "Nonveg"
    },
    {
      name: "Fruits",
      description: "Fresh and Organic Fruits.",
      image: "/images/Fruits.jpg",
      route: "Fruits"
    },
    {
      name: "Chocolate",
      description: "Quality and HomeMade Chocolate.",
      image: "images/chocolates.jpg",
      route: "Chocolate"
    }
  ],
        veg:[
            {name:'Tomato',price:60.0,image:'/images/tamota.jpg'},
            {name:'Potato',price:80.0,image:'/images/potatos.jpg'},
            {name:'Onion',price:100.0,image:'/images/onion.jpg'},
            {name:'Lady Finger',price:80.0,image:'/images/lady finger.jpg'},
            {name:'Ginger',price:150.0,image:'/images/ginger.jpg'},
            {name:'Garlic',price:200.0,image:'/images/garlic.jpg'},
            {name:'Carrot',price:80.0,image:'/images/carrot.jpeg.jpg'},
            {name:'Brinjal',price:40.0,image:'/images/brinjal.jpg'},
            {name:'Beetrot',price:70.0,image:'/images/betroute.jpg'},
            {name:'Pumpkin',price:90.0,image:'/images/pumpkin.jpg'},
            {name:'Drumsticks',price:60.0,image:'/images/drunsticks.jpg'},
            {name:'Beans',price:60.0,image:'/images/beans.jpg'},
        ],
        Nonveg:[
            {name:'Chicken',price:300.45,image:'/images/chicken.jpg'},
            {name:'Mutton',price:900.85,image:'/images/mutton.jpg'},
            {name:'Crab',price:700,image:'/images/crab.jpg'},
            {name:'Fish',price:400.85,image:'/images/fish.jpg'},
            {name:'Prawns',price:500.85,image:'/images/prawns.jpg'},
            {name:'Beef',price:1000.85,image:'/images/beef.jpg'},
            {name:'Lamb',price:800.85,image:'/images/lamb.jpg'},
            {name:'Pork',price:800.85,image:'/images/pork.jpg'},

        ],
        Fruits:[
          {name:'Apple',price:100.45,image:'/images/apple.jpg'},
          {name:'Mango',price:150.85,image:'/images/mango.jpg'},
          {name:'Avocado',price:200.85,image:'/images/avocado.jpg'},
          {name:'Banana',price:80.85,image:'/images/banana.jpg'},
          {name:'Chikoo',price:120.85,image:'/images/chikoo.jpg'},
          {name:'WaterMelon',price:40.85,image:'/images/watermelon.jpg'},
          {name:'Melon',price:200.85,image:'/images/melon.jpg'},
          {name:'CustardApple',price:1600.85,image:'/images/custardapple.jpg'},
          {name:'Grapes',price:200.85,image:'/images/grapes.jpg'},
          {name:'Guva',price:50.85,image:'/images/guava.jpg'},
          {name:'JackFruit',price:200.85,image:'/images/jackfruit.jpg'},
          {name:'Kiwi',price:200.85,image:'/images/kiwi.jpg'},
          {name:'Lychee',price:200.85,image:'/images/lychee.jpg'},
          {name:'Orange',price:70.85,image:'/images/orange.jpg'},
          {name:'Papaya',price:190.85,image:'/images/papaya.jpg'},
          {name:'Pear',price:200.85,image:'/images/pear.jpg'},
          {name:'StrawBerry',price:200.85,image:'/images/strawberry.jpg'},
          {name:'Pomegranate',price:200.85,image:'/images/pomegranate.jpg'},
          {name:'Pineapple',price:200.85,image:'/images/pineapple.jpg'},
      ],
      Choclate:[
        {name:'DairyMilk',price:40.45,image:'/images/dairymilk.jpg'},
        {name:'Kit-Kat',price:30.85,image:'/images/kitkat.jpg'},
        {name:'5star',price:20.85,image:'/images/5star.jpeg.jpg'},
        {name:'Black Forest',price:500.85,image:'/images/blackf.jpg'},
        {name:'Bread',price:80.85,image:'/images/bread.jpg'},
        {name:'Butter Scotch',price:350.85,image:'/images/butter.jpg'},
        {name:'Chocolate',price:450.85,image:'/images/chocak.jpg'},
        {name:'Kit-Kat',price:200.85,image:'/images/kitkat.jpg'},
        {name:'Cream Bread',price:150.85,image:'/images/cream.jpg'},
        {name:'Good Day',price:50.85,image:'/images/gody.jpg'},
        {name:'Dark Chocolate',price:90.85,image:'/images/homema.jpg'},
        {name:'Munch',price:25.85,image:'/images/munch.jpg'},
        {name:'Osmania',price:200.85,image:'/images/osm.jpg'},
        {name:'RedVelvet',price:800.85,image:'/images/redv.jpg'},
        {name:'Rostead Bread',price:200.85,image:'/images/roastedbe.jpg'},
        {name:'Strawberry',price:500.85,image:'/images/stbc.jpg'},

    ],
    },
    reducers:{}

});

//add to cart
const cartSlice=createSlice({
  name:'cart',
  initialState:localStoragecart,
  reducers:{
    Addtocart:(state,action)=>{
      const item=state.find(i=>i.name===action.payload.name);
      if(item){
        item.quantity+=1;
      }else{
        state.push({...action.payload,quantity:1});
      }
    },
       // Increment item quantity
  incrementQuantity: (state, action) => {
    const item = state.find(i => i.name === action.payload);
    if (item) {
      item.quantity += 1;
    }
  },
  
  // Decrement item quantity
  decrementQuantity: (state, action) => {
    const item = state.find(i => i.name === action.payload);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else if (item && item.quantity === 1) {
      // If quantity is 1, remove the item from the cart
      return state.filter(i => i.name !== action.payload);
    }
  },
  
  // Remove item from cart entirely
  removeItem: (state, action) =>
    {
      return state.filter(i => i.name !== action.payload);
    },
    
    clearCart: () => [],
    IncrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1; 
      }
    },

    
  }
});

const orderSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    }
  }
});

const userSlice=createSlice({
  name:"users",
  initialState:{
    users:[],
    isAuthenticated:false,
    currentuser:null
  },
  reducers:{
    registerUser:(state,action)=>{
      state.users.push(action,payload);
    },
    loginUser:(state,inputData)=>{
      const foundeUser=state.users.find(
        user=>user.userName===inputData.payload.userName&&user.password===inputData.password
      );
      if(foundeUser){
        state.isAuthenticated=true;
        state.currentuser=foundeUser;
      }
      else{
        alert("Invalid Credentials");
      }
    },
    logout:(state)=>{
      state.isAuthenticated=false;
      state.currentuser=null;
    }
  }
});

        const store =configureStore({
          reducer:{
            products:productsSlice.reducer,
            cart:cartSlice.reducer,
            orders:orderSlice.reducer,
            users: userSlice.reducer, // Add this line
          }
        });

        store.subscribe(()=>{
        const state= store.getState();
        localStorage.setItem("cart",JSON.stringify(state.cart));
        });

      export const{registerUser,logout,loginUser}=userSlice.actions;
      export const { addOrder } = orderSlice.actions;
      export const{Addtocart,incrementQuantity,decrementQuantity,removeItem,clearCart}=cartSlice.actions;
  
export default store;