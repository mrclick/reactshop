import React,{useState, useEffect} from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss";
import axios from "axios";

export const FeaturedProducts = ({type}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                process.env.REACT_APP_API_URL + "/products?populate=*",
                {
                    headers: {
                        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                    },
                }
              );
              setData(res.data.data)
              
            } catch (err) {
                console.log(err);
            }
        };
        fetchData(); 
    }, []);
    console.log(data)
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
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}
