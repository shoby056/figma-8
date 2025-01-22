import Footer from "../footer/page";

import Image from "next/image";
import Headers from "../headers/page";
export default function Figma() {
    return (
      <div>
     {/* headers */}
     <Headers/>



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



<div className="w-full h-[200px]">
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
      <div className="w-full h-[330px]">
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
          <div className="w-12 h-10 bg-gray-200 flex justify-center items-center rounded-lg  mr-2 ">
            <i className="fa-solid fa-cart-shopping text-xl px]" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full h-[330px]">
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
          <div className="w-12 h-10 bg-gray-200 flex justify-center items-center rounded-lg  mr-2">
            <i className="fa-solid fa-cart-shopping text-xl" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full h-[330px]">
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
          <div className="w-12 h-10 bg-gray-200 flex justify-center items-center rounded-lg  mr-2">
            <i className="fa-solid fa-cart-shopping text-xl" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full h-[330px]">
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
          <div className="w-12 h-10 bg-gray-200 flex justify-center items-center rounded-lg  mr-2">
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
<div className='px-4 sm:px-8 md:px-32 py-8 max-w-screen-2xl m-auto'>
      {/* Explore Styles Section */}
      <section className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-20 py-16 max-w-screen-xl m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Left Section: Image with vertical text */}
          <div className="relative flex items-center justify-center">
            <p className="mt-80 mr-6 absolute transform  -rotate-90 pt-16 origin-bottom-left text-2xl  md:block text-gray-900 font-semibold tracking-wide md:left-0">
              Explore New and Popular Styles
            </p>
            <div className="w-full lg:w-[585px] flex justify-center items-center">
              <Image
                src="/images/orange chair.png"
                alt="Main Chair"
                width={644}
                height={644}
                className="object-contain"
              />
            </div>
          </div>
          {/* Right Section: Smaller Grid */}
          {/* <div className="grid grid-cols-2 gap-4">
            {["01", "02", "20", "20"].map((chair, index) => (
              <div key={index} className="relative hover:shadow-lg overflow-hidden">
                <Image
                  src={`/${chair}.png`}
                  alt={`Chair ${index + 1}`}
                  width={284}
                  height={284}
                  className="object-cover"
                />
              </div>
            ))}
          </div> */}
          <div className="grid grid-cols-2 gap-4">
  <div className="relative hover:shadow-lg overflow-hidden">
    <Image
      src="/images/white chair.png"
      alt="Chair 1"
      width={284}
      height={284}
      className="object-cover"
    />
  </div>
  <div className="relative hover:shadow-lg overflow-hidden">
    <Image
     src="/images/sofa.png"
      alt="Chair 2"
      width={284}
      height={284}
      className="object-cover"
    />
  </div>
  <div className="relative hover:shadow-lg overflow-hidden">
    <Image
    src="/images/new chair.png"
      alt="Chair 3"
      width={284}
      height={284}
      className="object-cover"
    />
  </div>
  <div className="relative hover:shadow-lg overflow-hidden">
    <Image
      src="/images/new chair.png"
      alt="Chair 4"
      width={284}
      height={284}
      className="object-cover"
    />
  </div>
</div>

        </div>
      </section>
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
        "/images/orange chair.png",
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


<Footer/>





        </div>
    );
  }
  
