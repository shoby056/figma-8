import Image from "next/image"
import Footer from "../footer/page"
import Headers from "../headers/page"
export default function Singleproduct(){
    return(
        <div>
   {/* Top Header */}
  <Headers/>







      {/* section code       */}

<div className="single-main">

<div className="inner-single">
<div className="single-left">

<Image
        src="/images/pink chair.png"
        alt="logo"
        width={400}
        height={350}
        className="single-img"
      />



</div>
<div className="single-right">
    <h1 className="single-head">Library Stool <br /> Chair</h1>
<button className="single-up">$20,00 USD</button>
<hr />

<p className="single-para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate necessitatibus. </p>

<button className="single-down"><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i> Add to Cart</button>
</div>


</div>

</div>

<div className="feature">
    <h1 className="future">Feature Products</h1>
   <h1 className="view-all">View All</h1>

</div>



{/* other section */}

<div className="feature-pics">


{/* 1st card */}
<div className="cardss">
<div className="feature-card">
<Image
        src="/images/pink chair.png"
        alt="logo"
        width={190}
        height={150}
        className="single-img"
      />
      <div className="feature-card-desc">
       <p>library Stool Chair</p>
       <p><b>$99</b></p>
      </div>




</div>

{/* 2nd */}
<div className="feature-card">
<Image
        src="/images/orange chair.png"
        alt="logo"
        width={190}
        height={150}
        className="single-img"
      />
      <div className="feature-card-desc">
       <p>library Stool Chair</p>
       <p><b>$99</b></p>
      </div>




</div>


{/* 3rd */}

<div className="feature-card">
<Image
        src="/images/sofa.png"
        alt="logo"
        width={190}
        height={150}
        className="single-img"
      />
      <div className="feature-card-desc">
       <p>library Stool Chair</p>
       <p><b>$99</b></p>
      </div>




</div>

{/* 4th */}

<div className="feature-card">
<Image
        src="/images/desk chair.png"
        alt="logo"
        width={190}
        height={150}
        className="single-img"
      />
      <div className="feature-card-desc">
       <p>library Stool Chair</p>
       <p><b>$99</b></p>
      </div>




</div>

{/* 5th */}
<div className="feature-card">
<Image
        src="/images/new chair.png"
        alt="logo"
        width={190}
        height={150}
        className="single-img"
      />
      <div className="feature-card-desc">
       <p>library Stool Chair</p>
       <p><b>$99</b></p>
      </div>




</div>

</div>




</div>



{/* footer */}

<Footer/>






        </div>
    )
}