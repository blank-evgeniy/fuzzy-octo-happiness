import Counter from "./ui/Counter";
import type { CounterShema } from "./model/types/counterShema";
import { counterReducer } from "./model/slice/counterSlice";

export { counterReducer, Counter, CounterShema };
