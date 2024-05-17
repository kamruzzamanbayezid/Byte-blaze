import toast from "react-hot-toast";

const getBlogsFromLocalStorage = () => {
      const storedBlogs = localStorage.getItem('blogs');
      if (storedBlogs) {
            return JSON.parse(storedBlogs)
      }
      return [];
}

const saveBlogsToLocalStorage = (blog) => {
      localStorage.setItem('blogs', JSON.stringify(blog))
}

const addBlogsToLocalStorage = (blog) => {
      const storedBlogs = getBlogsFromLocalStorage();
      const isExist = storedBlogs.find(storedBlog => storedBlog.id === blog.id);
      if (isExist) {
            return toast.error('Already Bookmarked')
      }
      storedBlogs.push(blog);

      saveBlogsToLocalStorage(storedBlogs)
      toast.success('Blog Bookmarked Successfully!!')
};

const removeBlogsFromLocalStorage = (blog) => {
      const storedBlogs = getBlogsFromLocalStorage();
      const remaining = storedBlogs.filter(storedBlog => storedBlog.id !== blog.id);

      saveBlogsToLocalStorage(remaining)
      toast.success('Blog removed Successfully!!')
}

export { addBlogsToLocalStorage, removeBlogsFromLocalStorage, getBlogsFromLocalStorage }