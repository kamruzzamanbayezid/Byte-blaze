import { useLoaderData } from "react-router-dom";
import imageNotFound from '../../assets/images/404.jpg';
import Markdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

const Content = () => {

      const blog = useLoaderData();

      return (
            <div className="mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                  <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={blog?.cover_image || imageNotFound} />
                  <div className="p-6 space-y-2">
                        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">

                              {
                                    blog?.tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                              }
                        </div>
                        <a href={blog?.canonical_url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline mb-2">{blog?.title}</a>
                  </div>
                  <Markdown rehypePlugins={rehypeRaw}>{blog?.body_html}</Markdown>
            </div>
      );
};

export default Content;