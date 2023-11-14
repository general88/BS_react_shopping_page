import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { shopItemsData } from "../../../data";
const currencyDisplay = Intl.NumberFormat("en-US");
const Cards = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-4 justify-content-center mt-5 ">
        {shopItemsData.map((item) => (
          <Card key={item.id} className="col" style={{ width: "18rem" }}>
            <Card.Img className="" variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.productTitle}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
              <Button variant="primary" className="text-center">
                &#8358; {currencyDisplay.format(item.price)}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
