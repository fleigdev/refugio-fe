import BlogCards from '../components/Blog/BlogCards';
import { useState, useEffect  } from 'react';
import { getBlogs } from '../api/blog';

export default function Blogs() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getBlogs();
      setBlogs(response.data);
      console.log(response.data);
      
      // console.log(landingData);
    })();
  }, []);

  return (
    <section>
      <h2 className="titleText centered">
        <span>N</span>uestro Blog
      </h2>
      <p className="about-text">
        A restaurant, or, more informally, an eatery, is a business that
        prepares and serves food and drinks to customers.[1] Meals are generally
        served and eaten on the premises, but many restaurants also offer
        take-out and food delivery services.
      </p>
      <BlogCards  blogs={blogs}/>
    </section>
  );
}
