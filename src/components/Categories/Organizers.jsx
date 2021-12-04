import React from "react";
import Navbar from "../Navbar2/Navbar2";
import "../cards/Card.css";
import { ShoppingCart } from "@material-ui/icons";
const Organizers = () => {
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
          title="FIXA"
          information="Helps you to collect and organise all the cables around your computer, stereo and TV.
            Can be stacked with other boxes in the FIXA series."
          price="MRP Rs.20 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/fixa-114-piece-cable-management-set__0912063_pe617571_s5.jpg?f=xl"
          width="20 cm"
          depth="10 cm"
          height="15 cm"
          weight="100 gms"
          material="Plastic"
          owners="1"
        />
      </div>
      <div id="wrapper" className="column">
        <Prod
          title="VARDÖ"
          information="Turns the space under your bed into a smart place for storing.
            Keep your belongings dust-free; just fasten the fabric lid with the poppers.
            The storage box is easy to roll out and in thanks to the castors on the base."
          price="MRP Rs.65 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/vardoe-bed-storage-box-black__0861201_pe555089_s5.jpg?f=s"
          width="65 cm"
          depth="70 cm"
          height="18 cm"
          weight="5 kgs"
          material="Teak Wood"
          owners="2"
        />
      </div>
      <div id="wrapper" className="column">
        <Prod
          title="GREJIG"
          information="Just as practical for everyday shoes in the hallway as for fancy shoes in the wardrobe. And since the rack is foldable, you can have some extra racks in the hallway closet that you can unfold and stack when you have guests."
          price="MRP Rs.30 per month"
          buy="Rent Now"
          path="https://www.ikea.com/in/en/images/products/grejig-shoe-rack__0909355_pe696009_s5.jpg?f=s"
          width="55 cm"
          depth="28 cm"
          height="17 cm"
          weight="1 kg"
          material="Steel-Stainless"
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
export default Organizers;
