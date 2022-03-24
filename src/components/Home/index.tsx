import { useEffect, useState } from 'react';
import { UserInterface } from '../../interfaces';
import { Input } from '../shared/Input';
import { User } from '../User';
import './index.css';
export const Home = () => {
  const [user, setUser] = useState('');
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      setLoading(true);
      setData(undefined);
      fetch(`https://api.github.com/search/users?q=${user}`)
        .then((response) => response.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
          setLoading(false);
          console.log('data', data);
          console.log('error', error);
          console.log('loading', loading);
        });
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className='home-page'>
      <div id='google_translate_element'></div>
      <h1>GitHub Browser</h1>
      <div className='home-page-input'>
        <Input user={user} setUser={setUser} />
      </div>
      <div className='result-container'>
        {loading && <div>loading ....</div>}
        {error?.message && (
          <div>
            {error.message}
            {console.log('error', error)}
          </div>
        )}
        {data?.items?.length > 0 &&
          data.items.map((item: UserInterface) => {
            return <User {...item} />;
          })}
      </div>
    </div>
  );
};
