import Image from "next/image";
import Footer from "../footer/page";
import Headers from "../headers/page";
export default function About(){
    return(
        <div>
 <Headers/>



{/* about */}

<div className="about">

<div className="inner-about">
    <div className="about-left">

        <h1 className="about-head">About Us - Comforty</h1>
        <p className="about-para">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials,
             and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>

<button className="coll">View Collection</button>

    </div>
    <Image
        src="/images/new chair.png"
        alt="logo"
        width={480}
        height={400}
        className="img-about"
      />

      
</div>
<h1 className="different">What Makes Our Brand Diferent </h1>

<div className="about-cards">

    <div className="about-one">
    <i className="fa-solid fa-truck" aria-hidden="true"></i>
    <h1 className="next">Next Day as Standards</h1>
    <p className="sssss">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione pariatur inventore e</p>
    </div>


    <div className="about-one">
    <i className="fa-solid fa-circle-check" aria-hidden="true"></i>
    <h1 className="next">Made by True Artisans</h1>
    <p className="sssss">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione pariatur inventore e</p>
    </div>


    <div className="about-one">
    <i className="fa-solid fa-folder" aria-hidden="true"></i>
    <h1 className="next">Unbeatable Prices</h1>
    <p className="sssss">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione pariatur inventore e</p>
    </div>

    <div className="about-one">
    <i className="fa-solid fa-seedling" aria-hidden="true"></i>
    <h1 className="next">Recycled Packaging</h1>
    <p className="sssss">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione pariatur inventore e</p>
    </div>
    
</div>


<h1 className="popular">Our Popular Products</h1>
<div className="nnn">
<div>
<Image
        src="/images/Large.png"
        alt="logo"
        width={480}
        height={500}
         className="about-imgs"
      />
      <p>The Popular Siuted Sofa <br /> $99.00</p>





</div>

<div>
<Image
        src="/images/black chair.png"
        alt="logo"
        width={245}
        height={200}
         className="about-imgs"
      />
      <p>The Popular Siuted Sofa <br /> $99.00</p>





</div>


<div>
<Image
        src="/images/black.png"
        alt="logo"
        width={245}
        height={200}
        className="about-imgs"
      />
      <p>The Popular Siuted Sofa <br /> $99.00</p>





</div>





</div>

</div>



{/* footer */}

<Footer/>




</div>
    );
}