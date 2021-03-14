import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux';

const User = () => {
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchUsers()), [dispatch]);

  return userData.loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <h2>Users:</h2>
      <ul>
        {userData.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
