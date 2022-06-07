import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from './store/login/login.js'

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block" }} htmlFor="username">
          Usuário
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label style={{ display: "block" }} htmlFor="password">
          Senha
        </label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      <button onClick={handleSubmit}>Enviar</button>
      </form>

    </>
  );
};

export default App;
