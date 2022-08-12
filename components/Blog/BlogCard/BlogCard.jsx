import Link from 'next/link';
import moment from 'moment';
import 'moment/locale/es';
import { BASE_PATH } from '../../../utils/constants';

export default function BlogCard(props) {
  const {blog} = props;
  let image = blog.attributes.fotoprincipal.data.attributes.url;
  let imageURL = BASE_PATH.concat(image);
  //console.log(blog)

 // console.log('BLOG', blog.attributes.slug);
  return (
    <>

      <div className="blog_card">
      <Link href={`/blogs/${blog.attributes.slug}`}>
      <a style={{ textDecoration: 'none'}}>
        <div className="blog_card__header">
          <img
            src={imageURL}
            alt="card__image"
            className="card__image blog_image"
            width="600"
          ></img>
        </div>
        <div className="blog_card__body">

            <h4 className="blog_card__title">{blog.attributes.titulo}</h4>


          <p>
          {blog.attributes.subtitulo}
          </p>
        </div>
        <div className="blog_card__footer">
          <div className="blog_user">
            {/* <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className="blog_user__image "
            ></img> */}
            <div className="blog_user__info centered">
              <h5>Fecha Publicada</h5>
              <small>{moment(blog.attributes.createdAt).format('LL')}</small>
            </div>
          </div>
        </div>
   
      </a></Link>
      </div>
    </>
  );
}
