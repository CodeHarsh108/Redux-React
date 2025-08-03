import { useSelector } from "react-redux";
const Display = () => {
    const count = useSelector((state) => state.count);
    return(
        <div>
            <h1>Current Count: {count}</h1>
        </div>
    );
};

export default Display;