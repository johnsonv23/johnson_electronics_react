import { memo } from 'react';

const Hero = () => {
  return (
    
<section className="bg-gray-50">
  
  <div className="max-w-7xl mx-auto px-4 py-20 text-center">
    <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl">
      Welcome to Johnson Electronics
    </h1>
    <p className="mt-4 text-lg text-gray-600">
      We create solutions that help businesses grow and succeed.
    </p>
    <div className="mt-6 flex justify-center gap-4">
      <a href="about" className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-500">
        Learn More
      </a>
      <a href="contact" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100">
        Contact Us
      </a>
    </div>
  </div>

  
  <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
      <p className="mt-2 text-gray-600">We ensure quick turnaround times for all projects.</p>
    </div>
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800">Quality Work</h3>
      <p className="mt-2 text-gray-600">Our team focuses on delivering top-notch results.</p>
    </div>
    <div className="bg-white rounded-lg shadow p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800">Support</h3>
      <p className="mt-2 text-gray-600">We’re here to help you every step of the way.</p>
    </div>
  </div>

  
  {/* <div className="bg-indigo-600 py-12 text-center">
    <h2 className="text-2xl font-bold text-white">Ready to get started?</h2>
    <p className="mt-2 text-indigo-100">Join us today and take your business to the next level.</p>
    <a href="#signup" className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100">
      Sign Up
    </a>
  </div> */}
</section>
  );
};

export default memo(Hero);