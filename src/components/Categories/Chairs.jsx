import React from "react";
import Navbar from "../Navbar2/Navbar2";
import "../cards/Card.css";
import { ShoppingCart } from "@material-ui/icons";
const Chairs = () => {
  return (
    <div>
      <Navbar />
      <Card2 />
    </div>
  );
};
function Card2() {
  return (
    <div className="row">
      <div id="wrapper" className="column">
        <Prod
          title="LINNEBACK"
          information=" Easy Chair. The cover has a lightfastness level of 5 (the ability to resist colour fading) on a scale of 1 to 8. According to industry standards, a lightfastness level of 4 or higher is suitable for home use. "
          price="MRP Rs.100 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/linnebaeck-easy-chair-orrsta-light-grey__0936412_pe793245_s5.jpg?f=xxs"
          width="55 cm (21 5/8')"
          depth="69.5 cm (27 3/8')"
          height="72.4 cm (28 1/2')"
          weight="6.50 kg (229 oz)"
          material="Stainless steel + leather"
          owners="1"
        />
      </div>
      <div id="wrapper" className="column">
        <Prod
          title="RENBERGET"
          information="This desk chair has adjustable tilt tension that allows you to adjust the resistance to suit your movements and weight.
            You sit comfortably since the chair is adjustable in height."
          price="MRP Rs.50 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/renberget-swivel-chair-bomstad-black__0456923_pe604449_s5.jpg?f=s"
          width="59 cm"
          depth="65 cm"
          height="108 cm"
          weight="7 kg"
          material="Leather-steel"
          owners="1"
        />
      </div>
      <div id="wrapper" className="column">
        <Prod
          title="ODGER"
          information="Comfortable seating position, thanks to the swivel and adjustable height.
            No tools are required to assemble the chair, you just click it together with a simple mechanism under the seat."
          price="MRP Rs.60 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/odger-swivel-chair-white-beige__0985503_ph173302_s5.jpg?f=s"
          width="68 cm"
          depth="68 cm"
          height="90 cm"
          weight="5 kg"
          material="PVC"
          owners="1"
        />
      </div>
      <div id="wrapper" className="column">
        <Prod
          title="JANINGE"
          information="You can stack the chairs, so they take less space when you're not using them.
            You can start using the chair immediately because it is ready assembled."
          price="MRP Rs.60 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/janinge-chair-yellow__0370833_pe551332_s5.jpg?f=s"
          width="50 cm"
          depth="46 cm"
          height="76 cm"
          weight="3.5 kg"
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
export default Chairs;
