import React from 'react';
import ProductCard from './ProductCard';

function Shopping({ addToCart, removeFromCart }) {

const products = [
        {
          imageSrc: "https://thecomicbookstore.in/wp-content/uploads/2024/02/TCBS5979-680x920.jpg",
          productName: "Invincible Volume 2 New Edition",
          price: "$40.00 - $80.00",
          isSale: false,
          isRating: false
        },
        {
            imageSrc: "https://thecomicbookstore.in/wp-content/uploads/2024/01/TCBS5662.jpg",
            productName: "Web of Spider #117",
            Discount: {oPrice: '$20.00', cPrice: '$18.00'},
            isSale: true,
            isRating: true
          },
          {
            imageSrc: "https://thecomicbookstore.in/wp-content/uploads/2023/08/TCBS4642-680x920.jpg",
            productName: "Star Wars By Jonathan Hickman",
            Discount: {oPrice: '$50.00', cPrice: '$25.00'},
            isSale: true,
            isRating: false
          },
          {
            imageSrc: "https://thecomicbookstore.in/wp-content/uploads/2024/02/TCBS5921.jpg",
            productName: "New Teen Titans #22",
            price: "$35.00 - 40.00",
            isSale: false,
            isRating: true
          },
          {
            imageSrc: "https://thecomicbookstore.in/wp-content/uploads/2024/02/TCBS5898-680x920.jpg",
            productName: "Wonder Woman #800",
            price: "$10.00 - $20.00",
            isSale: false,
            isRating: false
          },
          {
              imageSrc: "https://thecomicbookstore.in/wp-content/uploads/2024/02/TCBS5892-680x920.jpg",
              productName: "Aquaman Justice League Drowned #1",
              Discount: {oPrice: '$50.00', cPrice: '$38.00'},
              isSale: true,
              isRating: true
            },
            {
              imageSrc: "https://thecomicbookstore.in/wp-content/uploads/2024/02/TCBS5896-680x920.jpg",
              productName: "Sideways #9 Foil DC Comics",
              Discount: {oPrice: '$40.00', cPrice: '$25.00'},
              isSale: true,
              isRating: false
            },
            {
              imageSrc: "https://thecomicbookstore.in/wp-content/uploads/2024/02/TCBS5890-680x920.jpg",
              productName: "Green Lantern #1 DC Comics",
              price: "$30.00 - $22.00",
              isSale: false,
              isRating: true
            },
        
];

return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((item, index) => <ProductCard
            key={index}
            imageSrc={item.imageSrc}
            productName={item.productName}
            price={item?.price}
            Discount={item?.Discount}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isSale={item.isSale}
            isRating={item.isRating}
          />)}
        </div>
      </div>
    </section>
  );
}

export default Shopping;
