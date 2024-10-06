import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { increment, decrement } from './counterSlice';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
