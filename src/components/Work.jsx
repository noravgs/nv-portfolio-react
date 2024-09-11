import React from 'react'
import { data } from '../Data/data.js'

const Work = () => {
  // projects file
  const project = data;

  return (
    <div name='work' className='w-full md:h-screen text-gray-200 bg-[#074f57] '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-36'>
        <div className='lg:text-3xl flex flex-col justify-center items-center sm:text-center pb-8 pl-4'>
          <p className='pt-6 text-4xl font-bold inline border-b-4 border-[#ade1e5]'>
            Work
          </p>
          <p className='sm:text-center text-3xl font-bold py-6'>// My latest development work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
                         flex justify-center text-center items-center mx-auto content-div"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  {/* Conditionally render the buttons if the URLs exist */}
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                      >
                        Code
                      </button>
                    </a>
                  )}
                  {item.live && (
                    <a href={item.live} target="_blank" rel="noopener noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                                   bg-white text-gray-700 font-bold text-lg"
                      >
                        Live
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
