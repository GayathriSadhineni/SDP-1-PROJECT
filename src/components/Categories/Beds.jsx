import React from "react";
import Navbar from "../Navbar2/Navbar2";
import "../cards/Card.css";
import { ShoppingCart } from "@material-ui/icons";
const Beds = () => {
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
          title="RAMSTA"
          information="17 layer-glued slats adjust to your body weight and increase the suppleness of the mattress. LURÖY slatted bed base is included in the price, but is packaged separately."
          price="MRP Rs.100 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/ramsta-day-bed-frame-with-slatted-bed-base-white__0442871_pe594008_s5.jpg?f=xl"
          width="210 cm"
          depth="97 cm"
          height="80 cm"
          weight="10 kg (229 oz)"
          material="Stainless steel + Mattress"
          owners="1"
        />
      </div>
      <div id="wrapper" className="column">
        <Prod
          title="TUFFING"
          information="A good solution where space is limited.
            The bed is lower than standard beds so that parents can see their child
            The bed is lower, which makes it easier to make the bed."
          price="MRP Rs.75 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/tuffing-bunk-bed-frame-dark-grey__0638044_pe698660_s5.jpg?f=s"
          width="207 cm"
          depth="96.5 cm"
          height="130.5 cm"
          weight="25kg"
          material="Stainless Steel"
          owners="2"
        />
      </div>
      <div id="wrapper" className="column">
        <Prod
          title="HUAGA"
          information="With storage boxes under an upholstered bed frame, you get both a soft bed and generous storage. The grey two-toned fabric, a classic look to enjoy for many years."
          price="MRP Rs.400 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/hauga-upholstered-bed-2-storage-boxes-vissle-grey__0945812_pe797796_s5.jpg?f=xl"
          width="55 1/8'"
          depth="77 3/4'"
          height="83 cm (32 5/8 ')"
          weight="60 kg (229 oz)"
          material="Steel, Epoxy/polyester powder coating"
          owners="1"
        />
      </div>
      <div id="wrapper" className="column">
        <Prod
          title="MALM"
          information="Ample storage space is hidden neatly under the bed in 2 large drawers. Perfect for storing quilts, pillows and bed linen.
            The storage boxes are easy to roll out and in thanks to the castors on the base."
          price="MRP Rs.300 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/malm-bed-frame-high-w-2-storage-boxes-black-brown__0735708_pe740106_s5.jpg?f=s"
          width="209 cm"
          depth="176 cm"
          height="15 cm"
          weight="75 kg (11 oz)"
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
export default Beds;
