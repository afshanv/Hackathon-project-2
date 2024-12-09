import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="flex flex-col items-center px-4 md:px-8">
      <header className="text-center my-10">
        <h1 className="font-bold text-3xl md:text-4xl">Get in Touch with Us</h1>
        <p className="mt-4 text-gray-600">
        For More Information About Our Product & Services. Please Feel Free To Drop Us <br />An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </header>

      <div className="w-full flex flex-col md:flex-row md:w-3/4 lg:w-2/3 p-6 rounded-lg">
        {/* Contact Information */}
        <div className="w-full md:w-1/2 md:pr-4 mb-6 md:mb-0 ">
          <ul className="space-y-6 mt-20">
            <li className="flex items-start mb-10">
              <FaMapMarkerAlt className="text-indigo-500 mr-3 mt-1" size={20} />
              <div>
                <strong>Address</strong>
                <p>236 5th SE Avenue,<br /> New York NY10000,<br /> United States</p>
              </div>
            </li>
            <li className="flex items-start mt-20">
              <FaPhoneAlt className="text-green-500 mr-3 mt-1" size={20} />
              <div>
                <strong>Phone Number:</strong>
              <p>  Mobile: +(84) 546-6789
                <br />
                Hotline: +(84) 456-6789 </p>
              </div>
            </li>
            <li className="flex items-start mb-10">
              <FaClock className="text-yellow-500 mr-3 mt-1" size={20} />
              <div>
                <strong>Working Time:</strong>
                <p>Monday-Friday: 9:00 - 22:00
                <br />
                 Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="space-y-4">
            <div>
              <label className="block mb-2 font-bold">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Subject (Optional)</label>
              <input
                type="text"
                placeholder="Enter the Subject"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-500"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-[200px] bg-[#029FAE] py-2 text-white rounded-md hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Responsive Images */}
      <div className="w-full flex flex-wrap items-center justify-evenly bg-[#F4F4F4] p-10 mt-16">
        {["first", "second", "third"].map((img, index) => (
          <Image
            key={index}
            src={`/Feature.png`}
            alt={`Service ${index + 1}`}
            width={1000}
            height={1000}
            className="max-w-[200px] w-full h-auto mb-4 md:mb-0"
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;

       