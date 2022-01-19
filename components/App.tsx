import React, { useEffect, useRef, useState } from 'react';

import { getUsers, IUser } from './api';
/*
  Instructions:
  1. Get a list of users by calling "getUsers" from "api.ts"
  2. Render the list of users in the page
*/

const App = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const userCount = useRef(0);

  useEffect(() => {
    (async () => {
      const res = await getUsers();
      setUsers(res);
      setInterval(() => {
        userCount.current++;
      }, 1500);
    })();
  }, []);
  return (
    <>
      <h1>Users:</h1>
      <ul>
        {users.map((user, index) =>
          index < userCount.current ? (
            <li key={`${user.id}.${user.name}`}>
              {user.id} - {user.name}{' '}
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

export { App };
