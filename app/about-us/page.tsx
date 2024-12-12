import Image from "next/image";
import Link from "next/link";
export default function About(){
    return(
        <div>
  {/* Top Header */}
  <div className="top-header bg-[#272343] w-full h-[45px] flex justify-center items-center">
          <div className="inner w-[80%] h-[20px] text-white flex justify-between items-center">
            <p className="left text-sm  pt-[5px] pr-[10px] ">
              <i className="fa-solid fa-check" aria-hidden="true"></i> Free Shipping On All Orders Over $50
            </p>
            <div className="right">
              <ul className="hmm flex space-x-2">
                <li className="px-[5px] text-xs">Eng <i className="fa-solid fa-angle-down" aria-hidden="true"></i></li>
                <Link href="/Faq">  <li className="px-[5px] text-xs">Faqs</li></Link> 
                <li className="px-[5px] text-xs">
                  <i className="fa-solid fa-circle-info" aria-hidden="true"></i> Need Help
                </li>
              </ul>
            </div>
          </div>
        </div>


        {/* 2nd header */}

        <div className="w-full h-[84px] bg-[#F0F2F3] flex justify-center items-center">
  <div className="w-4/5 h-[40px] text-black flex justify-between">
    <div className="flex">
      <Image
        src="/images/chair.png"
        alt="logo"
        width={40}
        height={40}
      />
      <h1 className="text-2xl pl-1 pt-1">Comforty</h1>
    </div>

    <div className="w-[120px] h-[44px] bg-white flex justify-between p-2.5 rounded-xl">
      <p><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></p>
      <p>Cart</p>
      <p className=" bg-green-800 w-[30px] h-[30px] rounded-full  text-white text-center">2</p>
    </div>
  </div>
</div>

     



     {/* 3rd header */}
     <div className="third w-full h-[74px]  flex justify-center items-center">
  <div className="inner-headerr w-4/5 h-[40px] text-black flex justify-between flex-col sm:flex-row">
  
    <div className="lefty flex w-full sm:w-[339px] h-[30px] mt-1 sm:mt-0">
      <ul className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start">
        <li id="home" className="px-2 text-sm text-[#379393]">Home</li>
        <Link href="/contact"><li className="px-2 text-sm">Contact</li></Link>
      <Link href="/product-page"><li className="px-2 text-sm">Product</li></Link> 
       <Link href="/singleproduct"> <li className="px-2 text-sm">Pages</li></Link> 
        <li className="px-2 text-sm">About</li>
      </ul>
    </div>
  
    <div className="righty w-full sm:w-[168px] h-[40px] text-center sm:text-left">
      <p className="text-[#cccccc]">contact: <span className="num text-black text-sm">(808) 555-0111</span></p>
    </div>
  </div>
</div>




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

<footer className="bg-white w-full border-t-2 border-gray-200">
  {/* Main Footer Content */}
  <div className="flex flex-wrap justify-around py-10 px-4 space-y-8 lg:space-y-0">
    {/* Column 1 */}
    <div className="w-full lg:w-1/4 px-4">
      <div className="flex items-center font-bold">
        <Image
          src="/images/chair.png"
          alt="Image"
          width={40}
          height={40}
          className="mr-2"
        />
        <p className="text-lg">Comforty</p>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsum obc
      </p>
      <div className="flex space-x-3 mt-4 text-lg text-gray-400">
        <i className="fa-brands fa-facebook" aria-hidden="true"></i>
        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
        <i className="fa-brands fa-square-twitter" aria-hidden="true"></i>
        <i className="fa-brands fa-github" aria-hidden="true"></i>
      </div>
    </div>

    {/* Column 2 */}
    <div className="w-full lg:w-1/4 px-4">
      <p className="text-gray-400 font-bold mb-4">CATEGORY</p>
      <p className="text-sm text-gray-600 mb-2">Sofa</p>
      <p className="text-sm text-gray-600 mb-2">Armchair</p>
      <p className="text-sm text-gray-600 mb-2">Wing Chair</p>
      <p className="text-sm text-gray-600 mb-2">Desk Chair</p>
      <p className="text-sm text-gray-600 mb-2">Wooden Chair</p>
      <p className="text-sm text-gray-600 mb-2">Park Chair</p>
    </div>

    {/* Column 3 */}
    <div className="w-full lg:w-1/4 px-4">
      <p className="text-gray-400 font-bold mb-4">SUPPORT</p>
      <p className="text-sm text-gray-600 mb-2">Help and Support</p>
      <p className="text-sm text-gray-600 mb-2">Terms and Conditions</p>
      <p className="text-sm text-gray-600 mb-2">Privacy and Policy</p>
      <p className="text-sm text-gray-600 mb-2">Help</p>
    </div>

    {/* Column 4 */}
    <div className="w-full lg:w-1/4 px-4">
      <h1 className="text-sm text-gray-400 mb-4">NEWSLETTER</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Your email"
          className="border border-gray-300 rounded-md p-2 flex-1"
        />
        <button className="bg-teal-500 text-white rounded-md px-4 py-2 ml-2 h-[47px] mt-[20px]">
          Subscribe
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsum obc
      </p>
    </div>
  </div>

  <hr className="border-gray-200" />

  {/* Footer Bottom */}
  <div className="flex flex-wrap justify-between items-center px-6 py-4 text-sm text-gray-500">
    <p className="w-full lg:w-auto text-center lg:text-left mb-4 lg:mb-0">
      @ 2021 - Blogy - Designed & Developed by{" "}
      <span className="text-black">Zakirsoft</span>
    </p>
    <div className="w-full lg:w-auto flex justify-center lg:justify-end">
      <Image
        src="/images/logo.png"
        alt="Image"
        width={150}
        height={150}
        className="w-32"
      />
    </div>
  </div>
</footer>




</div>
    );
}