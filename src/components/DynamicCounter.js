import { useDispatch, useSelector } from "react-redux";
import {dIncrementConnector,dDecrementConnector} from "../redux/dynamiccounter/actions"
export default function DynamicCounter() {
    
    const count = useSelector((state)=>state.dynamicCounter.counter);
    const dispatch = useDispatch();

    const callDIncrementCreator =()=>{
        dispatch(dIncrementConnector(5));
    }

    const callDDecrementCreator =()=>{
        dispatch(dDecrementConnector(1));
    }

    return (
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{count}</div>
        <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={callDIncrementCreator}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={callDDecrementCreator}
                >
                    Decrement
                </button>
            </div>
      </div>
    );
}
