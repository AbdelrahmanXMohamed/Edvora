import React from 'react';
export default function Card({ data }) {


    return <div className="CardWrapper">
        <div className="Card">
            <img src={data.image} alt="img" />
            <div className="Content">
                <span className='Product-Name'>
                    {data.product_name}
                </span>
                <span className='Brand-Name' >
                    {data.brand_name}
                </span>
                <span className='Price' >
                    <span>$</span>  {data.price}
                </span>
            </div>
            <span className="Location">
                {data.address.city}
            </span>
            <div>
                <span className="Date-Label">
                    Date:              <span className="Date">
                        {`${new Date(data.date).getDate()}:${new Date(data.date).getMonth()}:${new Date(data.date).getFullYear()}`}
                    </span>
                </span>


            </div>
            <span className='Discription' >
                {
                    data.discription
                }            </span>
        </div ></div>;
}
