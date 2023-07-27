import { useDispatch, useSelector } from "react-redux";
import {incrementCreator,decrementCreator} from "../redux/counter/actions"
export default function Counter() {
    
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();

    console.log(count);
    const callIncrementCreator =()=>{
        dispatch(incrementCreator(5));
    }

    const callDecrementCreator =()=>{
        dispatch(decrementCreator(1));
    }

    return (
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={callIncrementCreator}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={callDecrementCreator}
                >
                    Decrement
                </button>
            </div>
      </div>
    );
}
