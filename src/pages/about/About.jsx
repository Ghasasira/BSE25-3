import React from "react";

import {teamMembers} from "../../assets/data/data.js"
// import "./about.css";

export const About = () => {
  return (
    <>
      <section classNameName="aboutSection">
        <h1 classNameName="text-[#6fb3b8] text-2xl hidden sm:block">About Us</h1>
        
        {/* <!-- component --> */}
        <div className="py-16">  
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                  <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="imagee" loading="lazy" width="" height=""/>
                </div>
                <div className="md:7/12 lg:w-6/12">
                  <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Group 3 is made up of passionate developers</h2>
                  <p className="mt-6 text-gray-600">Group 3 is a collective of passionate developers driven by innovation and collaboration. Together, we harness our diverse skills to tackle challenging projects and create impactful solutions. With a shared commitment to continuous learning and growth, we explore new technologies, embrace best practices, and support each other in our journey toward excellence in software development. Join us as we push the boundaries of what's possible, one line of code at a time.</p>
                </div>
              </div>
          </div>
        </div>

        {/* <!-- component --> */}
        <section className="">
            <div className="container px-6 py-10 mx-auto">
                <div className="xl:flex  xL:-mx-4">
                    <div className="xl:w-1/2 xl:mx-4">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl">Our Team</h1>
                        
                        <p className="max-w-2xl mt-4 text-gray-500">
                        We are a team of dedicated Software students in various fields and areas plus with varrying sets of skills in this big and ever-growing universe/world of software development
                        </p>
                    </div>

                    
                    
                    <div className="flex flex-col md:grid md:gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                        {teamMembers.map((member)=>{
                          return (
                          <div  className="mb-2 mt-2">
                              <img className="object-cover rounded-xl h-64 w-full" src={member.picture} alt=""/>
                              
                              <h1 className="mt-2 text-2xl font-semibold text-gray-700 capitalize ">{member.name}</h1>
                              
                              <p className="text-gray-500 capitalize ">Full stack developer</p>
                          </div>
                          )
                        })}
                        
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- component -->
        <!-- This is an example component --> */}

        <div className="p-4 text-gray-600">
          <h1 className="mb-8 text-center text-3xl font-bold text-indigo-900">This is what we intend to do :</h1>

          <ul className="flex flex-col md:grid place-content-center md:grid-cols-3 md:gap-8">
            <li className="flex mt-2">
              <div className="px-4 text-5xl font-extralight text-indigo-700">01.</div>
              <div>
                <div className="text-xl font-bold text-indigo-800">Research</div>
                <p className="max-w-xs py-2 text-sm text-indigo-900">We intend to collect data and insights, analyze
                  them then take the time to learn about our project objectives, ask the right questions to understand problem domain.</p>
              </div>
            </li>
            <li className="flex mt-2">
              <div className="px-4 text-5xl font-extralight text-indigo-700">02.</div>
              <div>
                <div className="text-xl font-bold text-indigo-800">Strategy</div>
                <p className="max-w-xs py-2 text-sm text-indigo-900">Solutions are born from proper research, hard work, and
                  strong strategy. We intend build data-driven roadmaps for every step of the way to success.
                </p>
              </div>
            </li>
            <li className="flex mt-2">
              <div className="px-4 text-5xl font-extralight text-indigo-700">03.</div>
              <div>
                <div className="text-xl font-bold text-indigo-800">Design</div>
                <p className="max-w-xs py-2 text-sm text-indigo-900">We intend to design the right solution for our problem at hand. We will
                  craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                </p>
              </div>
            </li>
            <li className="flex mt-2">
              <div className="px-4 text-5xl font-extralight text-indigo-700">04.</div>
              <div>
                <div className="text-xl font-bold text-indigo-800">Development</div>
                <p className="max-w-xs py-2 text-sm text-indigo-900">We intend to build the right solution for your business. We
                  will craft beautiful, intuitive, and user-friendly interfaces that are easy to use and easy to maintain.
                </p>
              </div>
            </li>
            <li className="flex mt-2">
              <div className="px-4 text-5xl font-extralight text-indigo-700">05.</div>
              <div>
                <div className="text-xl font-bold text-indigo-800">Deployment</div>
                <p className="max-w-xs py-2 text-sm text-indigo-900">We intend to build the right solution for project. We will
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
