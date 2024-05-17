import { Link } from 'react-router-dom';
import imageNotFound from '../../assets/images/404.jpg';
import PropTypes from 'prop-types';
import { MdBookmarkRemove } from "react-icons/md";

const Blog = ({ blog, removeIcon, handleRemoveBlogs }) => {

      return (
            <div className="relative max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 transition hover:scale-105 border-2 hover:border-2 hover:border-secondary">
                  <Link to={`/blog/${blog?.id}`} >
                        <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog?.cover_image || imageNotFound} />
                        <div className="p-6 space-y-2">
                              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline mb-2">{blog?.title}</h3>
                              <span className="text-xs dark:text-gray-600 mb-4">{new Date(blog?.published_at).toDateString()}</span>
                              <p>{blog?.description}</p>
                        </div>
                  </Link>

                  <div onClick={() => handleRemoveBlogs(blog)} className='absolute -top-5 -right-5'>
                        {
                              removeIcon && <div className="ml-7 bg-slate-200 p-3 cursor-pointer rounded-full">
                                    <MdBookmarkRemove color="#FF0080" className="text-2xl " />
                              </div>
                        }
                  </div>
            </div>
      );
};

Blog.propTypes = {
      blog: PropTypes.object,
      removeIcon: PropTypes.bool,
      handleRemoveBlogs: PropTypes.func,
};

export default Blog;