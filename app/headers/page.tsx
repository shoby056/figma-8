import Link from "next/link"
import Image from "next/image"
export default function Headers(){
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
     <Link href="/cart"> <p><i className="fa-solid fa-cart-shopping" aria-hidden="true"></i></p></Link>
      <Link href="/cart"><p>Cart</p></Link>
      <p className=" bg-green-800 w-[30px] h-[30px] rounded-full  text-white text-center">2</p>
    </div>
  </div>
</div>

     



     {/* 3rd header */}
     <div className="third w-full h-[74px]  flex justify-center items-center">
  <div className="inner-headerr w-4/5 h-[40px] text-black flex justify-between flex-col sm:flex-row">
  
    <div className="lefty flex w-full sm:w-[339px] h-[30px] mt-1 sm:mt-0">
      <ul className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start">
      <Link href="/components"> <li id="home" className="px-2 text-sm text-[#379393]">Home</li></Link>
        <Link href="/contact"><li className="px-2 text-sm">Contact</li></Link>
        <Link href="/cart"> <li className="px-2 text-sm">Shop</li></Link>
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
</div>
    )

}