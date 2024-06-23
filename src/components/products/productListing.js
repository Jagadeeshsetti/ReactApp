import axios from "axios";
import React, { useState, useEffect } from "react";
import RotatingLineSpinner from "../spinner/rotating-spinner";
import ImageComponent from "../image/image";
import "./styles.css";

const ProductListing = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const { data, status } = await axios.get("https://fakestoreapi.com/products");
            console.log(data, "datadata");

            if (status === 200) {
                setProducts(data);
            } else {
                alert("API request not successful");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h3>Product List</h3>
            <div className="product-list">
                {products.length > 0 ? (
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

export default ProductListing;
