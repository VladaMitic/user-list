import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import style from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
  const [user, setUser] = useState({
    username: '',
    age: '',
  });
  const [error, setError] = useState();

  const changeUserHandler = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (user.username.trim().length === 0) {
      setError({
        title: 'Invalid input!',
        message: 'Please enter name and age!',
      });
      return;
    }
    if (+user.age < 1) {
      setError({
        title: 'Invalid are!',
        message: 'Please enter valid age!',
      });
      return;
    }
    onAddUser(user);
    setUser({
      username: '',
      age: '',
    });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={changeUserHandler}
            name="username"
            value={user.username}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={changeUserHandler}
            name="age"
            value={user.age}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
