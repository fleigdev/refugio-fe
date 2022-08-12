import { useState, useEffect  } from 'react';
import { useRouter } from 'next/router';
import { getBlogByUrlApi } from '../../api/blog';
import moment from 'moment';
import 'moment/locale/es';
import { BASE_PATH } from '../../utils/constants';

export default function SingleBlog() {
  const [blog, setBlog] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      // console.log(query.dog);
      const response = await getBlogByUrlApi(query.blog);
      console.log('BLOGPAGE',response.data);
      setBlog(response.data[0]);
      
    })();
  }, [query]);
  if (!blog) return null;

  let mainImage = blog.attributes.fotoprincipal.data.attributes.url;
  let image1 = blog.attributes.foto1.data.attributes.url;
  
  let image3 = blog.attributes.foto3.data.attributes.url;
  let mainImageURL = BASE_PATH.concat(mainImage);
  let image1URL = BASE_PATH.concat(image1);
 
  let image3URL = BASE_PATH.concat(image3);

  const renderImage1 = () => {
    if(!blog.attributes.foto1.data.attributes.url) {
      console.log('no hay imagen');
      return <p>'No hay imagen'</p>;
    } else {
      console.log('si hay imagen');
      return         <img
      src={image1URL}
      className="blog-pic"
      alt=""
    ></img>
    }
  }

  const renderImage2 = () => {
    if(!blog.attributes.foto2.data.attributes.url) {
      console.log('no hay imagen');
      return <p>'No hay imagen'</p>;
    } else {
      let image2 = blog.attributes.foto2.data.attributes.url;
      let image2URL = BASE_PATH.concat(image2);
      console.log('si hay imagen');
      return <img
      src={image2URL}
      className="blog-pic"
      alt=""
    ></img>
    }
  }

  const renderImage3 = () => {
    if(!blog.attributes.foto3.data.attributes.url) {
      console.log('no hay imagen');
      return <p>'No hay imagen'</p>;
    } else {
      console.log('si hay imagen');
      return <img
      src={image3URL}
      className="blog-pic"
      alt=""
    ></img>
    }
  }

  return (
    <section>
      <h2 className="titleText centered">{blog.attributes.titulo}</h2>
      <p className="blog-text">
      {blog.attributes.subtitulo}
      </p>
      <p className="blog-text">
        <strong> Fecha publicada:</strong>&nbsp;&nbsp;&nbsp;{moment(blog.attributes.createdAt).format('LL')}
      </p>
      <div className="imgBox centered">
        <img
          src={mainImageURL}
          className="main-blog-pic"
          alt=""
        ></img>
      </div>
      <p className="blog-text">
      {blog.attributes.parrafo1}
      </p>
      <div className="imgBox centered">

        {renderImage1()}
      </div>
      <p className="blog-text">
      {blog.attributes.parrafo2}
      </p>
      <div className="imgBox centered">
      {renderImage2()}
      </div>
      <div className="imgBox centered">
      {renderImage3()}
      </div>
    </section>
  );
}
