import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { addBlogsToLocalStorage } from "../../Utils/localStorage";

const BlogDetails = () => {

      const [index, setIndex] = useState(0);

      const blogDetails = useLoaderData();
      const { title, comments_count, public_reactions_count, published_at, reading_time_minutes } = blogDetails;

      const handleAddBookmarks = (blog) => {
            addBlogsToLocalStorage(blog)
          
      }

      return (
            <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
                  <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                        <div className="space-y-6">
                              <h1 className="text-3xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                              <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                                    <p className="text-sm">{reading_time_minutes} min read • {new Date(published_at).toDateString()}</p>
                                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
                              </div>
                        </div>

                        {/* Tabs start */}
                        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                              <Link
                                    onClick={() => setIndex(0)}
                                    to=''
                                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg dark:border-gray-600 dark:text-gray-600 ${index === 0 ? 'border border-b-0' : 'border-b'}`}>
                                    <span>Content</span>
                              </Link>
                              <Link
                                    onClick={() => setIndex(1)}
                                    to='author'
                                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${index === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                                    <span>Author</span>
                              </Link>

                              {/* bookmarks button */}
                              <div onClick={() => handleAddBookmarks(blogDetails)} className="ml-7 bg-slate-200 p-3 cursor-pointer rounded-full">
                                    <MdBookmarkAdd color="#FF0080" className="text-2xl " />
                              </div>

                        </div>  {/* tabs ends */}

                        <Outlet />
                  </article>
            </div>
      );
};

export default BlogDetails;