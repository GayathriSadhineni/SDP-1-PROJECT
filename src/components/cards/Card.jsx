import React from "react";
import "./Card.css";
import { ShoppingCart } from "@material-ui/icons";

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
          title="FRIHETEN"
          information="3-seat sofa-bed, Hyllie dark grey.    You can quickly transform this sofa into a spacious bed. And the generous storage space for bed linens under the seat makes things even easier."
          price="MRP Rs.500 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/friheten-3-seat-sofa-bed-hyllie-dark-grey__0690265_pe723191_s5.jpg?f=s"
          width="225 cm (88 5/8 ')"
          depth="105 cm (41 3/8 ')"
          height="83 cm (32 5/8 ')"
          weight="60 kg (229 oz)"
          material="Fabric"
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
          title="KUGGIS"
          information="This smaller box helps you keep your little things organised. Timeless design in PET plastic with soft shapes – and part of the KUGGIS series where all sizes are dimensioned to each other."
          price="MRP Rs.50 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/kuggis-box-with-lid-white__0815392_pe772901_s5.jpg?f=xl"
          width="18 cm (7 ')"
          depth="26 cm (10 ¼ ')"
          height="8 cm (3 ¼ ')"
          weight="0.31 kg (11 oz)"
          material="PVC"
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

export default Card2;