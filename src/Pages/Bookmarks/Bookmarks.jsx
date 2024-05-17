import { useEffect, useState } from "react";
import { getBlogsFromLocalStorage, removeBlogsFromLocalStorage } from "../../Utils/localStorage";
import Blog from "../../Components/Blog/Blog";
import EmptyState from "../../Components/EmptyState/EmptyState";

const Bookmarks = () => {

      const [bookmarks, setBookmarks] = useState([]);

      useEffect(() => {
            const storedBlogs = getBlogsFromLocalStorage();
            setBookmarks(storedBlogs);
      }, [])

      const handleRemoveBlogs = (blog) => {
            removeBlogsFromLocalStorage(blog);

            const storedBlogs = getBlogsFromLocalStorage();
            setBookmarks(storedBlogs);
      }

      return (

            <>
                  {
                        bookmarks?.length > 0 ?
                              <div>
                                    <section className="dark:bg-gray-100 dark:text-gray-800">
                                          <div className="container p-6 mx-auto space-y-6 sm:space-y-12">
                                                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                                      {
                                                            bookmarks?.map(blog => <Blog
                                                                  key={blog.id}
                                                                  blog={blog}
                                                                  removeIcon={true}
                                                                  handleRemoveBlogs={handleRemoveBlogs}
                                                            ></Blog>)
                                                      }
                                                </div>
                                          </div>
                                    </section>
                              </div>
                              :
                              <EmptyState />
                  }
            </>

      );
};

export default Bookmarks;