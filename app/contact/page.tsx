import React from 'react';
import Headers from '../headers/page';
import Footer from '../footer/page';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

export default function Contact() {
  return (
    <div>
    <Headers/>
    <div className="flex flex-col items-center p-4 md:p-8 max-w-screen-2xl m-auto">
      <h1 className="text-center font-bold text-3xl md:text-4xl mt-10 mb-4">GET In Touch With Us</h1>
      <p className="text-center mb-8 text-gray-400">
      For more information about our product & services. Please Feel Free to drop<br />
      us an email. Our staff always be there to help you out. Do not hesitate.
      </p>

      <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row p-6 rounded-lg">
        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4">
          {/* <h2 className="text-xl font-semibold mb-4">Contact Information</h2> */}
          <div className="space-y-10">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-indigo-500 mr-3 mt-1" size={20} />
              <div>
                <strong>Address</strong>
                <p>123 Main Street, City, Country</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaPhoneAlt className="text-green-500 mr-3 mt-1" size={20} />
              <div>
                <strong>Phone Number:</strong>
                <p>+1 (234) 567-8901</p>
                <p>+1 (234) 567-8901</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaClock className="text-yellow-500 mr-3 mt-1" size={20} />
              <div>
                <strong>Working Time:</strong>
                <p>Mon-Fri, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 ">
          {/* <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2> */}
          <form className="flex flex-col space-y-2 ">
            <div>
              <label className="block mb-2 font-bold">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
           
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="bg-teal-700 px-8 py-2 mt-6 text-xl text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Responsive Images Section */}
      <div className="w-full flex flex-wrap items-center mt-16 justify-evenly bg-gray-300 mx-4 md:mx-8 py-10">
        <Image 
          src="/images/first.png"
          alt="Service 1"
          width={1000}
          height={1000}
          className="max-w-[200px] w-full h-auto mb-4 md:mb-0"
        />
        <Image 
          src="/images/second.png"
          alt="Service 2"
          width={1000}
          height={1000}
          className="max-w-[200px] w-full h-auto mb-4 md:mb-0"
        />
        <Image 
          src="/images/third.png"
          alt="Service 3"
          width={1000}
          height={1000}
          className="max-w-[200px] w-full h-auto"
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
}