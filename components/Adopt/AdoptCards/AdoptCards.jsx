import AdoptCard from '../AdoptCard/AdoptCard';
import { map } from 'lodash';

export default function AdoptCards(props) {
  const {dogs} = props;
  // console.log(dogs);
  return (
    <div className="centered">
      <div className="adopt_cards">
      {map(dogs, (dog) => (
        <AdoptCard  dog={dog} key={dog.id} />
        ))}
      </div>
    </div>
  );
}
