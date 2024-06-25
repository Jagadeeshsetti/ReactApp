import axios from "axios";
import React, { useState, useEffect } from "react";
import RotatingLineSpinner from "../spinner/rotating-spinner";
import ImageComponent from "../image/image";
import "./styles.css";
import { Link } from "react-router-dom";

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [filterValue, setFilterValue] = useState("All")
    const [loading, setLoading] = useState(false)
    const [categories, setCategory] = useState(["All"]);

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, []);

    const fetchCategories = async () => {
        const{data, status} = await axios.get("https://fakestoreapi.com/products/categories")
        if(status===200){
             setCategory([...categories, ...data]);
        }
    }

    const fetchProducts = async () => {
        try {
            const { data, status } = await axios.get("https://fakestoreapi.com/products");
            console.log(data, "datadata");

            if (status === 200) {
                setProducts(data);
                setLoading(false);
            } else {
                alert("API request not successful");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (event) =>{
        setLoading(true);
        const optionSeleceted = event.target.value
        console.log("handleChange", optionSeleceted);
        setFilterValue(optionSeleceted)
        categoryFilterAsyncCall(optionSeleceted);
    }

    const categoryFilterAsyncCall = async(optionSeleceted) =>{
        if(optionSeleceted==="All"){
            fetchProducts()
        }else{
            const {data, status} = await axios(`https://fakestoreapi.com/products/category/${optionSeleceted}`)
           if(status===200){
            setProducts(data);
            setLoading(false);
           }
        }

        }
      

    return (
        <>
            {/* <h3>Product List</h3> */}
            <select value={filterValue}  onChange={handleChange}>
            {
                categories.map((each) =>{
                    return(
                        <>
                        <option value={each}>{each}</option>
                        </>
                    )
                })
            }
            </select>
            <div className="product-list">
                {products.length > 0 && !loading ? (
                    products.map(eachObject => {
                        const { id, title, price, description, category, image, rating } = eachObject;

                        return (
                            <div className="product-card" key={id}>
                                <h4>{title}</h4>
                                <ImageComponent src={image} alt={title} />
                                <p><strong>Category:</strong> {category}</p>
                                <p><strong>Price:</strong> ${price}</p>
                                <p><strong>Description:</strong> {description}</p>
                                <p><strong>Rating:</strong> {rating.rate} ({rating.count} reviews)</p>
                                <button><Link  to={`${category}/${id}`} >Click to see product</Link></button>
                            </div>
                        );
                    })
                ) : (
                    <RotatingLineSpinner />
                )}
            </div>
        </>
    );
};

export default ProductListing