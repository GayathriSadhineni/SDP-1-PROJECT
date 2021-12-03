import React from 'react'
import Navbar from '../Navbar/Navbar';
import '../cards/Card.css';
import { ShoppingCart } from "@material-ui/icons";
const Sofa = () => {
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
            title="KIVIK"
            information="KIVIK is a generous seating series with a soft, deep seat and comfortable support for your back.
            Seat cushions with a top layer of memory foam; moulds to the precise contours of your body and regains its shape when you get up."price="MRP Rs.100 per month"
            buy="Rent Now"
            path="https://www.ikea.com/in/en/images/products/kivik-4-seat-sofa-with-chaise-longue-hillared-dark-blue__0777325_pe758535_s5.jpg?f=xl"
            width="318 cm"
            depth="83 cm"
            height="95 cm"
            weight="25 kgs"
            material="Stainless steel +fabric"
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
            title="VALLENTUNA"
            information="All modules in the VALLENTUNA series can be used freestanding or together to create a sofa combination in any size that suits you perfectly."
            price="MRP Rs.400 per month"
            buy="Rent Now"
            path="https://www.ikea.com/in/en/images/products/vallentuna-seat-module-with-backrest-murum-black__0825965_pe691091_s5.jpg?f=s"
            width="113 cm"
            depth="93 cm"
            height="84 cm"
            weight="50 kg"
            material="Steel, Epoxy/polyester powder coating"
            owners="1"
          />
        </div>
        <div id="wrapper" className="column">
          <Prod
            title="BINGSTA"
            information="Soft, rounded armrests and back cushion provide you with your own comfortable nook which feels snug thanks to the solid and curved back panel."
            price="MRP Rs.59 per month"
            buy="Rent Now"
            path="https://www.ikea.com/in/en/images/products/bingsta-armchair-vissle-dark-grey-kabusa-dark-grey__0793270_pe765309_s5.jpg?f=s"
            width="70 cm"
            depth="58 cm"
            height="76 cm"
            weight="6 kg"
            material="Fabric+Steel"
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
export default Sofa
