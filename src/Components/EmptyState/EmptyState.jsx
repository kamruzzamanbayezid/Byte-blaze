import { Link } from "react-router-dom";

const EmptyState = () => {
      return (
            <div className="min-h-[calc(100vh-124px)] flex flex-col gap-5 items-center justify-center">
                  <h1 className="text-2xl font-medium">No Bookmark Found</h1>
                  <Link to='/blogs' className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                        <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white  rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary rounded-md "></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 "></span>
                        <span className="relative text-black font-bold transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Read Blogs</span>
                  </Link>
            </div>
      );
};

export default EmptyState;