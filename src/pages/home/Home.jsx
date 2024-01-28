import { useEffect, useState } from 'react';

// custom hook
import { useFetch } from '../../hooks/';

// styles
import './Home.css';

// components
import { RecipeList } from '../../components';

// db
import { projectFirestore } from '../../firebase/config';

function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(function () {
    setIsPending(true);

    projectFirestore
      .collection('recipes')
      .get()
      .then(function (snapshot) {
        const results = [];
        snapshot.docs.forEach(function (doc) {
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results);
        setIsPending(false);
      })
      .catch(function (error) {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  projectFirestore;

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}

export default Home;
