import React, { useEffect, useRef, useState } from 'react';

import { getUsers, IUser } from './api';
/*
  Instructions:
  1. Get a list of users by calling "getUsers" from "api.ts"
  2. Render the list of users in the page
*/

const App = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [intervalId, setIntervalId] = useState<ReturnType<
    typeof setInterval
  > | null>(null);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    (async () => {
      setUsers(await getUsers());
      setIntervalId(
        setInterval(() => {
          setUserCount((prev) => {
            return ++prev;
          });
        }, 1500)
      );
    })();
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);
  useEffect(() => {
    if (intervalId && userCount >= users.length) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [userCount, intervalId !== null]);

  return (
    <>
      <h1>Users:</h1>
      <h2>
        {userCount} - {`${intervalId}`}
      </h2>
      <ul>
        {users.map((user, index) =>
          index < userCount ? (
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
