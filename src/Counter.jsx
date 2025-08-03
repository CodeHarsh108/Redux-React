import { use } from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter  = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Counter : {count}</h1>
        </div>
    )
};

export default Counter;