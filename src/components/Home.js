import React from 'react'
import Navbarfn from "./Navbar";
import ProductList from "./ProductList";
import isAuthenticated from "../auth-0/isAuthenticated";
import {Redirect} from 'react-router-dom'
const Home = (props)=>{
    if(isAuthenticated()){
        return <div className='row container-fluid'>
            <div className="mb-0"><Navbarfn/></div>
            <div className='mt-0'><ProductList/></div>
        </div>
    }else{
        return <Redirect to={{
            pathname: '/',
            state: { from: props.location }
        }}/>
    }
}

export default Home
