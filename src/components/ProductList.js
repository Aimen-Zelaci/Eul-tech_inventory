import React from "react";
import {useSelector} from "react-redux";
import {useState,useEffect } from 'react'
import axios from 'axios'
import Product from "./Product";
function ProductList() {
    const toggle = useSelector(state=> state.itemReducer)
    const query = useSelector(state=>state.queryReducer)
    const [state,setIState] = useState({
        items:[],
        data:''
    })
    useEffect( () => {
        async function fetchData() {
            const result = await axios(
                `https://stark-caverns-82190.herokuapp.com/inventory/api/items/search?query=${query}`,

            )
            console.log(result)
            if(result.data === 'not found!') setIState(state=>({items:[], data:'not found!'}))
            else if(result.data.length === 0) setIState(state=>({items:[],data:''}))
            else setIState(state=>({items:result.data,data:''}))
            console.log(state)
        }
        fetchData()
    },[toggle])
    if(toggle){
        if(state.data === 'not found!' ) return <h1 className='text-danger myproducts'>NOT FOUND! :'(</h1>
        if(state.items.length === 0) return <h1 className='text-danger myproducts'>LOADING ...</h1>
        return (
            <table className="table table-dark myproducts">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">img</th>
                    <th scope="col">name</th>
                    <th scope="col">quantity</th>
                    <th scope="col">date</th>
                </tr>
                </thead>
                <tbody>
                {state.items.map(item=>{
                    return <Product id={item.id} date={item.date} name={item.name} img={item.img} quantity={item.quantity}/>
                })}
                </tbody>
            </table>

        )
    }
    else{
        return <></>
    }
}

export default ProductList;
