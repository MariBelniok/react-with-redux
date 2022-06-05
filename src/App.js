import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementar, reduzir } from "./store/contador/contador.js";
import { abrir, fechar } from "./store/modal/modal.js";

const App = () => {
  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {modal && (
        <div>
          <h1> Total: {contador} </h1>
        </div>
      )}
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
      <button onClick={() => dispatch(abrir())}>Abrir</button>
      <button onClick={() => dispatch(fechar())}>Fechar</button>
    </>
  );
};

export default App;
