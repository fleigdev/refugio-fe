import AdoptCards from '../components/Adopt/AdoptCards';
import {getDogs} from "../api/dog";
import { useState, useEffect  } from 'react';
export default function Adopt() {
  const [dogs, setDogs] = useState(null);
  useEffect(() => {
    (async () => {
      // console.log(query.dog);
      const response = await getDogs();
      // console.log(response.data);
      setDogs(response.data);
      
    })();
  }, []);
  if (!dogs) return null;
  return (
    <section>
      <h2 className="titleText centered">
        <span>A</span>dopta
      </h2>
      <p className="about-text">
        A restaurant, or, more informally, an eatery, is a business that
        prepares and serves food and drinks to customers.[1] Meals are generally
        served and eaten on the premises, but many restaurants also offer
        take-out and food delivery services.
      </p>
      <AdoptCards dogs={dogs} />
    </section>
  );
}
