import { memo } from 'react';

const Conact = () => {
  return (
    
<section className="bg-gray-50 py-16">
  <div className="max-w-3xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
    <p className="mt-4 text-gray-600">
      Have questions or want to work with us? Fill out the form below and we’ll get back to you soon.
    </p>
  </div>

  
  <div className="mt-10 max-w-3xl mx-auto px-4">
    <form className="bg-white shadow rounded-lg p-8 space-y-6">
      
      <div>
        {/* <label for="name" class="block text-sm font-medium text-gray-700">Name</label> */}
        <input type="text" id="name" name="name"
               className="mt-2 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
               placeholder="Your name"/>
      </div>

      
      <div>
        {/* <label for="email" className="block text-sm font-medium text-gray-700">Email</label> */}
        <input type="email" id="email" name="email"
               className="mt-2 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm"
               placeholder="you@example.com"/>
      </div>

      
      <div>
        {/* <label for="message" class="block text-sm font-medium text-gray-700">Message</label> */}
        <textarea id="message" name="message" rows="4"
                  className="mt-2 mb-2 block w-full rounded-md border-gray-300 shadow-sm focus:amber-500 focus:ring-amber-500 sm:text-sm"
                  placeholder="Write your message here..."></textarea>
      </div>

      
      <div className="text-center">
        <button type="submit"
                className="px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-500">
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>
  );
};

export default memo(Conact);