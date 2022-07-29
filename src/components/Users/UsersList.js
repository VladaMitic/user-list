import React from 'react';
import style from './UsersList.module.css';
import Card from '../UI/Card';

const UsersList = ({ users }) => {
  const renderedList = users.map((user) => (
    <li key={user.username}>
      {user.username} ({user.age} years)
    </li>
  ));

  return (
    <Card className={style.users}>
      <ul>{renderedList}</ul>
    </Card>
  );
};

export default UsersList;
