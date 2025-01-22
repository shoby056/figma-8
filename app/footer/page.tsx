import Image from "next/image";

export default function Footer() {
  return (
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
              className="border border-gray-300 rounded-md p-2 flex-1 md w-[170px]"
            />
            <button className="bg-teal-700 text-white rounded-md w-[100px] md pl-0 md ml-[10px] py-2 mr-2 h-[47px] mt-[20px]">
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
  );
}
