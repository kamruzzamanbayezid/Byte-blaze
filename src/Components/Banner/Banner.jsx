import { Link } from "react-router-dom";

const Banner = () => {
      return (
            <div>
                  <div className="hero">
                        <div className="hero-content text-center">
                              <div className="max-w-lg">
                                    <h1 className="text-5xl font-bold">Welcome to Byte<span>Blaze</span></h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                                    <Link to='/blogs' className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                          <span className="absolute inset-0 w-full h-full bg-white  rounded-md "></span>
                                          <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary rounded-md "></span>
                                          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 "></span>
                                          <span className="relative text-black font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Read Blogs</span>
                                    </Link>
                                    <Link to='/blogs' className="ml-5 relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                          <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                          <span className="absolute inset-0 w-full h-full bg-white  rounded-md "></span>
                                          <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary rounded-md "></span>
                                          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 "></span>
                                          <span className="relative text-black font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Bookmarks</span>
                                    </Link>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;