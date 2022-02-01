import VueRouter from 'vue-router'
import app from "./App";
import register_form from "./components/register_form";


export default new VueRouter(
    {
        routes:[
            {path:'./', component:app},
            {path:'./register', name:'register', component:register_form}
        ],
        mode:'history'
    })

