import React from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss";
import useFetch from '../../hooks/useFetch';

export const FeaturedProducts = ({type}) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Obcaecati tempora eos voluptatem earum, dolorum rerum perspiciatis nam eaque sit magnam. 
                Corrupti ut ipsum quis alias nihil reiciendis nostrum quae sint.
            </p>
        </div>
        <div className="bottom">
            {error
            ? "Something went wrong!"
            : loading
            ? "loading" 
            : data?.map((item) => <Card item={item} key={item.id} /> )}
        </div>
    </div>
  );
};

