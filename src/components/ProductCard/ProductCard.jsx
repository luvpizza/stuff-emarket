import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../api/public/searchApi';
import NotFoundCard from '../NotFoundCard/NotFoundCard';

import s from "./ProductCard.module.scss"
const ProductCard = (props) => {
    // mock
    const params = useParams()
    const {data, isLoading, isError} = useGetProductQuery(params.id)
    // mock
    const [orderDetails, setOrderDetails] = useState({
        productId: params.id,
        size: null
    })
    useEffect(()=>{
        console.log(orderDetails);
    }, [orderDetails])
    return (
        <div className={s.product} {...props}>
            {data && !isLoading ?
            <div className={s.product__grid}>
                <div className={s.product__photos}>
                    <div className={s.photo__main}>
                        <div className={s.photo__main_img}>
                            <img src={data.photos[0]} alt="main product photo" />
                        </div>
                    </div>
                    <div className={s.photo__rest}>
                        <div className={s.photo__rest_img}>
                            <img src={data.photos[0]} alt="main product photo" />
                        </div>
                        <div className={s.photo__rest_img}>                        
                            <img src={data.photos[0]} alt="main product photo" />
                        </div>
                        <div className={s.photo__rest_img}>                        
                            <img src={data.photos[0]} alt="main product photo" />
                        </div>
                        <div className={s.photo__rest_img}>
                            <img src={data.photos[0]} alt="main product photo" />
                        </div>
                    </div>
                </div>
                <div className={s.product__info}>
                    <h2 className={s.product__title}>{data.title}</h2>
                    <h2 className={s.product__price}>{data.price}$</h2>
                    <p className={s.product__color}>Color:
                        <span className={s.color}>{data.color}</span>
                    </p>
                    {
                        data.sizes.length > 0 ? 
                        <div className={s.sizes__container}>
                            <p className={s.product__sizes}>Sizes:</p>
                            {data.sizes.map(size => <span className={size == orderDetails.size ? `${s.product__size_active}` : `${s.product__size}`} key={size} onClick={()=>{setOrderDetails({...orderDetails, size})}}>{size}</span>)}
                        </div> 
                        : <p className={s.product__sizes} style={{opacity:0.3, cursor:"default", marginTop:"20px", display:"block"}}>One size</p>
                    }
                    <p className={s.product__description}>{data.description}</p>
                    <div className={s.product__btns}></div>
                </div>

            </div>
            : <NotFoundCard/>}
        </div>
    );
};

export default ProductCard;