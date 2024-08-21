import React from "react";
import "./about.css";

export const About = () => {
  return (
    <>
      <section className="aboutSection">
        <h1 className="text-white text-6xl">About Us</h1>
        {/* <div className="content first sm:block hidden">
          <div className="description">
            <h2>Know more about Group 3</h2>
          </div>
          <div className="textBox">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            
          </div>
        </div> */}
        {/* <!-- component --> */}
        <div class="py-16">  
          <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div class="md:5/12 lg:w-5/12">
                  <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height=""/>
                </div>
                <div class="md:7/12 lg:w-6/12">
                  <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Group 3 is made up of passionate developers</h2>
                  <p class="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                  <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
                </div>
              </div>
          </div>
        </div>

        {/* <!-- component --> */}
        <section class="">
            <div class="container px-6 py-10 mx-auto">
                <div class="xl:flex  xL:-mx-4">
                    <div class="xl:w-1/2 xl:mx-4">
                        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">Our Team</h1>
                        
                        <p class="max-w-2xl mt-4 text-gray-500">
                        We are a team of dedicated Software students in various fields and areas plus with varrying sets of skills in this big and ever-growing universe/world of software development
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                        <div>
                            <img class="object-cover rounded-xl h-64 w-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                            
                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Angoda Brian</h1>
                            
                            <p class="mt-2 text-gray-500 capitalize ">Full stack developer</p>
                        </div>
                        <div>
                            <img class="object-cover rounded-xl h-64 w-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                            
                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Agani Daniel</h1>
                            
                            <p class="mt-2 text-gray-500 capitalize ">Full stack developer</p>
                        </div>


                        <div>
                            <img class="object-cover rounded-xl h-64 w-full" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                            
                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize ">Josephine Nankunda</h1>
                            
                            <p class="mt-2 text-gray-500 capitalize ">Full Stack Developer</p>
                        </div>

                        <div>
                            <img class="object-cover rounded-xl h-64 w-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                            
                            <h1 class="mt-4 text-2xl font-semibold text-gray-700 capitalize">Gasasira Joshua</h1>
                            
                            <p class="mt-2 text-gray-500 capitalize ">Full stack developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- component -->
        <!-- This is an example component --> */}

        <div class="p-4 text-gray-600">
          <h1 class="mb-8 text-center text-3xl font-bold text-indigo-900">This is - what we intend to do :</h1>

          <ul class="grid place-content-center sm:grid-cols-2 gap-8">
            <li class="flex">
              <div class="px-4 text-5xl font-extralight text-indigo-700">01.</div>
              <div>
                <div class="text-xl font-bold text-indigo-800">Research</div>
                <p class="max-w-xs py-2 text-sm text-indigo-900">We intend to collect data and insights, analyze
                  them then take the time to learn about our project objectives, ask the right questions to understand problem domain.</p>
              </div>
            </li>
            <li class="flex">
              <div class="px-4 text-5xl font-extralight text-indigo-700">02.</div>
              <div>
                <div class="text-xl font-bold text-indigo-800">Strategy</div>
                <p class="max-w-xs py-2 text-sm text-indigo-900">Solutions are born from proper research, hard work, and
                  strong strategy. We intend build data-driven roadmaps for every step of the way to success.
                </p>
              </div>
            </li>
            <li class="flex">
              <div class="px-4 text-5xl font-extralight text-indigo-700">03.</div>
              <div>
                <div class="text-xl font-bold text-indigo-800">Design</div>
                <p class="max-w-xs py-2 text-sm text-indigo-900">We intend to design the right solution for our problem at hand. We will
                  craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                </p>
              </div>
            </li>
            <li class="flex">
              <div class="px-4 text-5xl font-extralight text-indigo-700">04.</div>
              <div>
                <div class="text-xl font-bold text-indigo-800">Development</div>
                <p class="max-w-xs py-2 text-sm text-indigo-900">We intend to build the right solution for your business. We
                  will craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                </p>
              </div>
            </li>
            <li class="flex">
              <div class="px-4 text-5xl font-extralight text-indigo-700">05.</div>
              <div>
                <div class="text-xl font-bold text-indigo-800">Deployment</div>
                <p class="max-w-xs py-2 text-sm text-indigo-900">We intend to build the right solution for project. We will
                  craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain and make it available through deployment.
                </p>
              </div>
            </li>
          </ul>
        </div>

        
      </section>
    </>
  );
};
