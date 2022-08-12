import BlogCards from '../BlogCards';
import { useState, useEffect  } from 'react';
import { getBlogs } from '../../../api/blog';

export default function BlogSection(props) {
  const {textoBlog} = props;
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
    <>
      <section className="blog-section">
        <h2 className="titleText-blogSection">
          <span>N</span>uestro Blog!
        </h2>
        <p className="blog-text">
          {textoBlog}. <br />
        </p>
        <BlogCards blogs={blogs}/>
      </section>
      <div className="spacer layer1 flip"></div>
    </>
  );
}
