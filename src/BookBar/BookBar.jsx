import { useState , useEffect , use } from "react";

import "./BookBar.css";

import loginIcon from './assiste/8675208_ic_fluent_person_add_regular_icon.png';//y
import MyAccount from './assiste/8674855_ic_fluent_key_regular_icon.png';//y
import Logo from './assiste/8674872_ic_fluent_lightbulb_regular_icon.png';//y
import serch from './assiste/8675339_ic_fluent_search_regular_icon.png';//y
import CallUs from './assiste/8674926_ic_fluent_headset_regular_icon.png';//y
import cart from './assiste/8674457_ic_fluent_cart_regular_icon.png';//y
import LikedItem from './assiste/8674870_ic_fluent_heart_regular_icon.png';//y

function BookBar() {

  const [isShopOpen, setIsShopOpen] = useState(false);
  const [countTestCart, setCountTestCart] = useState(0);
  const [countTestLiked, setCountTestLiked] = useState(0);

return (<>
  <div className="All-contanier">



   <div className="Top-contanier">

    <p>

      Join us for free <a href="#">login</a> or <a href="#">signin</a>

    </p>

    <span className="right-side">

     <span>

       <button><img alt="login icon" src={loginIcon} height={15}/>Login</button>

     </span>

     <span>

       <button><img alt="account icon" src={MyAccount} height={15}/>My Account</button>

     </span>

     <select>

       <option value="En">English</option>

       <option value="Ar">عربي</option>

     </select>

     <select>

       <option value="USD">USD</option>

       <option value="JOD">JOD</option>

     </select>

    </span>

   </div>

   

   <div className="mid-contanier">

    <img alt="logo" src={Logo} /> 

    <a>Home</a>

    <span className="serch-Bar">

      <select>

        <option>All Catagory</option>

      </select>

      <input type="text" placeholder="Enter your Keyword"></input>

      <button><img alt="serch Icon" src={serch}/></button>       

    </span> 

    <div style={{ position: "relative", display: "inline-block" }}>

       
          <button  style={{
            color: '#fff',
            textDecoration: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '15px'
          }}
          onClick={() => setIsShopOpen(!isShopOpen)}> 
            Shopping </button>

          {isShopOpen && (

            <div className="shop-dropdown">

              <a href="#">A1</a><br />

              <a href="#">A2</a><br />

              <a href="#">A3</a><br />

              <a href="#">A4</a>

            </div>)}

    </div>

    <span className="call-us">

     <img alt="contact us" src={CallUs} />

     <pre>call us on  <br/>0777888666  </pre>

    </span>

   </div>

  </div>

  <div className="fixed-item">
   <button className="fixed" onClick={() => setCountTestCart(countTestCart + 1)}>
     <img alt="cart" src={cart} />
     <p>{countTestCart}</p>
   </button>

   <button className="fixed" onClick={() => setCountTestLiked(countTestLiked + 1)}>
     <img alt="liked item" src={LikedItem} />
     <p>{countTestLiked}</p>
   </button>
  </div>

  </>
)};

export default BookBar;