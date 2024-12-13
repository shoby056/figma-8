import Link from "next/link";
import Image from "next/image";
export default function Figma() {
    return (
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
   <Link href="/about-us"> <li className="px-2 text-sm">About</li></Link> 
      </ul>
    </div>
  
    <div className="righty w-full sm:w-[168px] h-[40px] text-center sm:text-left">
      <p className="text-[#cccccc]">contact: <span className="num text-black text-sm">(808) 555-0111</span></p>
    </div>
  </div>
</div>



{/* 4th section */}


<div className="hero w-full h-auto md:h-[850px]">
  <div className="inner-cont bg-[#F0F2F3] w-full md:w-4/5 h-auto md:h-[850px] text-black flex flex-col md:flex-row justify-between mx-auto rounded-lg">
    <div className="left w-full md:w-[470px] h-auto md:h-[337px] mt-8 md:mt-[267px] px-4 md:pl-[70px] text-center md:text-left">
      <p>Welcome To Chairy</p>
      <h1 className="text-2xl md:text-4xl">Best Furniture <br />Collection For Your <br /> Interior.</h1>
      <button className="btn w-full md:w-[171px] h-[52px] bg-[#029FAE] rounded-lg mt-4 md:mt-8 text-white">
        Shop Now <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
      </button>
    </div>
    <div className="right-img w-full md:w-[420px] pt-4 md:pt-[150px] flex justify-center">
      <Image
        src="/images/Chair large.png"
        alt="logo"
        width={420}
        height={500}
      />
    </div>
  </div>
</div>



<div className="w-full h-[139px]">
  <div className="w-full lg:w-4/5 h-full mx-auto flex flex-wrap justify-between">
    <div className="pt-[26px] w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/6">
      <Image
        src="/images/zapier.png"
        alt="logo"
        width={85}
        height={87}
      />
    </div>

    <div className="pt-[26px] w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/6">
      <Image
        src="/images/pipe.png"
        alt="logo"
        width={85}
        height={87}
      />
    </div>

    <div className="pt-[26px] w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/6">
      <Image
        src="/images/cib.png"
        alt="logo"
        width={85}
        height={87}
      />
    </div>

    <div className="pt-[26px] w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/6">
      <Image
        src="/images/zz.png"
        alt="logo"
        width={85}
        height={87}
      />
    </div>

    <div className="pt-[26px] w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/6">
      <Image
        src="/images/burn.png"
        alt="logo"
        width={85}
        height={87}
      />
    </div>

    <div className="pt-[26px] w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/6">
      <Image
        src="/images/pando.png"
        alt="logo"
        width={85}
        height={87}
      />
    </div>

    <div className="pt-[26px] w-1/3 sm:w-1/4 md:w-1/6 lg:w-1/6">
      
    </div>
  </div>
</div>



{/* 6th container */}

<div className="w-full mt-4">
  <div className="w-4/5 mx-auto">
    <h1 className="w-full text-3xl mb-6">Featured Products</h1>

    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
      {/* Card 1 */}
      <div className="w-full h-[300px]">
        <Image
          src="/images/new chair.png"
          alt="logo"
          width={312}
          height={312}
          className="rounded-xl"
        />
        <div className="mt-2 flex justify-between">
          <div className="w-[230px]">
            <p className="text-sm">
              Library Stool Chair <br />
              $20
            </p>
          </div>
          <div className="w-12 h-10 bg-gray-200 flex justify-center items-center rounded-lg mt-2 mr-2">
            <i className="fa-solid fa-cart-shopping text-xl" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full h-[300px]">
        <Image
          src="/images/pink chair.png"
          alt="logo"
          width={312}
          height={312}
          className="rounded-xl"
        />
        <div className="mt-2 flex justify-between">
          <div className="w-[230px]">
            <p className="text-sm">
              Library Stool Chair <br />
              $20
            </p>
          </div>
          <div className="w-12 h-10 bg-gray-200 flex justify-center items-center rounded-lg mt-2 mr-2">
            <i className="fa-solid fa-cart-shopping text-xl" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full h-[300px]">
        <Image
          src="/images/orange chair.png"
          alt="logo"
          width={312}
          height={312}
          className="rounded-xl"
        />
        <div className="mt-2 flex justify-between">
          <div className="w-[230px]">
            <p className="text-sm">
              Library Stool Chair <br />
              $20
            </p>
          </div>
          <div className="w-12 h-10 bg-gray-200 flex justify-center items-center rounded-lg mt-2 mr-2">
            <i className="fa-solid fa-cart-shopping text-xl" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full h-[300px]">
        <Image
          src="/images/white chair.png"
          alt="logo"
          width={312}
          height={312}
          className="rounded-xl"
        />
        <div className="mt-2 flex justify-between">
          <div className="w-[230px]">
            <p className="text-sm">
              Library Stool Chair <br />
              $20
            </p>
          </div>
          <div className="w-12 h-10 bg-gray-200 flex justify-center items-center rounded-lg mt-2 mr-2">
            <i className="fa-solid fa-cart-shopping text-xl" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* 7th section */}


<div className="w-full mt-4">
  <div className="w-full sm:w-4/5 mx-auto">
    <h1 className="text-3xl mb-6 text-center">Top Categories</h1>

    <div className="w-full flex flex-wrap justify-between">
      {/* Card 1 */}
      <div className="relative w-full sm:w-1/2 lg:w-1/3 mb-4 px-2">
        <Image
          src="/images/sofa.png"
          alt="logo"
          width={424}
          height={424}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-lg">
          <div className="text-lg">Wing Chair</div>
          <div className="text-sm">3,584 Products</div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative w-full sm:w-1/2 lg:w-1/3 mb-4 px-2">
        <Image
          src="/images/stool.png"
          alt="logo"
          width={424}
          height={424}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-lg">
          <div className="text-lg">Wooden Chair</div>
          <div className="text-sm">157 Products</div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative w-full sm:w-1/2 lg:w-1/3 mb-4 px-2">
        <Image
          src="/images/desk chair.png"
          alt="logo"
          width={424}
          height={424}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-3 rounded-b-lg">
          <div className="text-lg">Desk Chair</div>
          <div className="text-sm">154 Products</div>
        </div>
      </div>
    </div>
  </div>
</div>


{/* 8th section */}
<div className="eight">
<div className="inner-eight">
<div className="left-panel">
      <p>EXPLORE NEW AND POPULAR STYLES</p>
    </div>
<div className="left-eight">
<Image
        src="/images/orange chair.png"
        alt="logo"
        width={500}
        height={550}
        className="web"
      />

</div>


<div className="right-eight">


<div className="inner-eight-left">
<Image
        src="/images/white chair.png"
        alt="logo"
        width={230}
        height={230}
        className="web"
      />

<Image
        src="/images/sofa.png"
        alt="logo"
        width={230}
        height={230}
        className="web"
      />
      </div>
<div className="inner-eight-right">
<Image
        src="/images/new chair.png"
        alt="logo"
        width={230}
        height={230}
        className="web"
      />
      <Image
        src="/images/new chair.png"
        alt="logo"
        width={230}
        height={230}
        className="web"
      />
      </div>

</div>
</div>
</div>



{/* 9th container */}
<div className="w-full bg-white py-6">
  <h1 className="text-center font-sans text-2xl font-bold text-[#0c0c0c] mb-6">
    Our Products
  </h1>

  <div className="w-[96%] mx-auto">
    {/* Row of Cards */}
    <div className="flex flex-wrap justify-between">
      {/* Card List */}
      {[
        "/images/new chair.png",
        "/images/pink chair.png",
        "/images/orange chair.png",
        "/images/white chair.png",
        "/images/stool.png",
        "/images/desk chair.png",
        "/images/new chair.png",
        "/images/pink chair.png",
      ].map((imageSrc, index) => (
        <div
          key={index}
          className="w-full sm:w-[48%] md:w-[23%] p-2"
        >
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={imageSrc}
              alt={`Product ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="p-2">
              <p className="text-sm mb-2 text-center">
                Library Stool Chair<br />$20
              </p>
              <div className="flex justify-center items-center">
                <i className="fa-solid fa-cart-shopping text-lg" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
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
  
