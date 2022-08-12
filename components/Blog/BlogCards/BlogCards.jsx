import BlogCard from '../BlogCard/BlogCard';
import Link from 'next/link';
import { map } from 'lodash';

export default function BlogCards(props) {
  const { blogs } = props;
  console.log(blogs);
  return (
    <div className="">
      <div className="blog_cards">
      {map(blogs, (blog) => (
        <BlogCard blog={blog} key={blog.id}/>
        ))}
      </div>
    </div>
  );
}
