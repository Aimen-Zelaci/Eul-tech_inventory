import React from "react";

const Product = (props)=>{
    const{id,img,name,quantity,date} = props
    console.log(img)
    return (
        <tr>
            <th scope="row">{id}</th>
            <td>
                <img src={img} alt="" width='100px' height='100px'/>
            </td>
            <td className='text-center'>{name}</td>
            <td>{quantity}</td>
            <td>{date.slice(0,10)}</td>
        </tr>

    )
}

export default Product
