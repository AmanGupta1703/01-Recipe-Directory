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

    // similar to a event listener
    // `onSnapshot` (will  run whenever there is
    // any changes to the database)
    // eg: add, delete, update
    const unsub = projectFirestore.collection('recipes').onSnapshot(
      function (snapshot) {
        const results = [];
        snapshot.docs.forEach(function (doc) {
          results.push({ id: doc.id, ...doc.data() });
        });
        setData(results);
        setIsPending(false);
      },
      function (error) {
        setIsPending(false);
        setError(error.message);
      }
    );

    return () => unsub();
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
