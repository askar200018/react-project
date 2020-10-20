import { MouseEvent } from 'react';
import { createEvent, createStore } from "effector";

export const increment = createEvent<MouseEvent<HTMLButtonElement>>();
export const decrement = createEvent<MouseEvent<HTMLButtonElement>>();

export const $counter = createStore(0)
  .on(increment, (count: number) => count + 1)
  .on(decrement, (count: number) => count - 1);
