import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RotatingLineSpinner from '../spinner/rotating-spinner';
import ImageComponent from '../image/image';
import './detail.css'; 
import NavBar from '../navBar/navbar';

function ProductDetailComponent() {
  const paramsFromURl = useParams();
  console.log("paramsFromURl", paramsFromURl);
  const [productDetails, setProductDetails] = useState({});

  useEffect(()=>{
    fetchEachProduct();
  },[]) 

  const fetchEachProduct = async()=>{
    const {data, status} = await axios.get(`https://fakestoreapi.com/products/${paramsFromURl.productId}`)
    if(status===200){
      setProductDetails(data)
    }
  }

  return (
    <div className="product-details-container">
      <NavBar />
      {
        Object.keys(productDetails).length > 0 ? (
          <>
            <h3 className="product-title">{productDetails.title}</h3>
            <ImageComponent src={productDetails.image} className="product-image" />
            <p className="product-description">{productDetails.description}</p>
            <p className="product-category">Category: {productDetails.category}</p>
            <p className="product-price">Price: ${productDetails.price}</p>
            <p className="product-rating">Rating: {productDetails.rating.rate} ({productDetails.rating.count} reviews)</p>
          </>
        ) : (
          <RotatingLineSpinner />
        )
      }
    </div>
  )
}

export default ProductDetailComponent;
