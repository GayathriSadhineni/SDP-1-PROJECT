import React from 'react'
import Navbar from '../Navbar/Navbar';
import '../cards/Card.css';
import { ShoppingCart } from "@material-ui/icons";
const Tables = () => {
    return (
        <div>
            <Navbar />
            <Card2 />
        </div>
    )
}
function Card2() {
    return (
      <div className="row">
        <div id="wrapper" className="column">
          <Prod
            title="ALEX"
            information="Built-in cable management for collecting cables and cords; out of sight but close at hand.
            Drawer stops prevent the drawers from being pulled out too far."
            price="MRP Rs.25 per month"
            buy="Rent Now"
            path="https://www.ikea.com/in/en/images/products/alex-desk-grey-turquoise__1043711_ph177987_s5.jpg?f=s"
            width="132 cm"
            depth="58 cm"
            height="76 cm"
            weight="6.50 kg (229 oz)"
            material="Oak Wood"
            owners="1"
          />
        </div>
        <div id="wrapper" className="column">
          <Prod
            title="LAGKAPTEN"
            information="The table top is made of board-on-frame, a strong and lightweight material.
            Pre-drilled holes in the table top make it easier to attach the legs."
            price="MRP Rs.50 per month"
            buy="Rent Now"
            path="https://www.ikea.com/in/en/images/products/lagkapten-alex-desk-black-brown__1022390_pe832701_s5.jpg?f=s"
            width="60 cm"
            depth="73 cm"
            height="140 cm"
            weight="8 kg"
            material="Oak Wood"
            owners="2"
          />
        </div>
        <div id="wrapper" className="column">
          <Prod
            title="MALM"
            information="You can collect cables and extension leads on the shelf under the table top, so they’re hidden but still close at hand.
            Can be placed in the middle of a room because the back is finished."
            price="MRP Rs.40 per month"
            buy="Rent Now"
            path="https://www.ikea.com/in/en/images/products/malm-desk-white__0657143_pe709628_s5.jpg?f=s"
            width="140 cm"
            depth="65 cm"
            height="73 cm"
            weight="13 kg"
            material="Teak Wood"
            owners="1"
          />
        </div>
        <div id="wrapper" className="column">
          <Prod
            title="PÅHL"
            information="With the add-on unit, PÅHL desk grows – in height. You get a spacious shelf at arm’s length and at the top there are practical compartments for small items, a mobile phone or pens."
            price="MRP Rs.50 per month"
            buy="Rent Now"
            path="https://www.ikea.com/in/en/images/products/pahl-desk-with-add-on-unit-white-green__0879286_pe646905_s5.jpg?f=s"
            width="128 cm"
            depth="58 cm"
            height="98 cm"
            weight="7 cm"
            material="Teak Wood"
            owners="1"
          />
        </div>
      </div>
    );
  }

  function Prod(props) {
    return (
      <div id="container">
        <div class="product-details">
          <h1>{props.title}</h1>
          <span class="hint-star star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </span>
  
          <p className="information">{props.information}</p>
  
          <div className="control">
            <button className="btn">
              <span class="price">{props.price}</span>
              <span class="shopping-cart">
                <ShoppingCart />
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span class="buy">{props.buy}</span>
            </button>
          </div>
        </div>
  
        <div class="product-image">
          <img src={props.path} />
  
          <div class="info">
            <h2>The Description</h2>
            <ul>
              <li>
                <strong>Width:</strong>
                {props.width}
              </li>
              <li>
                <strong>Depth: </strong>
                {props.depth}
              </li>
              <li>
                <strong>Height: </strong>
                {props.height}
              </li>
              <li>
                <strong>Weight: </strong>
                {props.weight}
              </li>
              <li>
                <strong>Material: </strong>
                {props.material}
              </li>
              <li>
                <strong>No of Owners:</strong>
                {props.owners}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
export default Tables
