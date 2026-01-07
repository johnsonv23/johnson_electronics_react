import { memo } from 'react';

const About = () => {
  return (
    
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16">
       
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
            At Johnson Electronics, we believe technology should make life simpler, smarter, and more connected. Founded with a passion for innovation and reliability, we specialize in delivering high‑quality electronic products that combine cutting‑edge design with everyday practicality. From essential gadgets to advanced accessories, our mission is to empower customers with solutions that enhance productivity, entertainment, and comfort. 
          </p>
        </div>

        
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <div className=" tems-center gap-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Craftsmanship</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">We sweat the small details so your users don’t have to.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <div className=" items-center gap-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Impact</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">We prioritize outcomes that move your business forward.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <div className=" items-center gap-3 ">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Speed</h3>
            </div>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">We ship fast, learn faster, and iterate with purpose.</p>
          </div>
        </div>

        
        <div className="mt-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="contact"
            className="inline-flex items-center justify-center rounded-md bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-amber-600">
            Get in touch
          </a>
          {/* <a href="#careers"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
            Careers
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default memo(About);