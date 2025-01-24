import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store/counter";
import classes from "./Counter.module.css";

const Counter = () => {
   const dispatch = useDispatch();
   const counter = useSelector((state) => state.counter.counter);
   const show = useSelector((state) => state.counter.showCounter);

   const incrementHandler = () => {
      dispatch(counterActions.increment());
   };

   const increaseHandler = () => {
      dispatch(counterActions.increase(10)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
   };

   const decrementHandler = () => {
      dispatch(counterActions.decrement());
   };

   const toggleCounterHandler = () => {
      dispatch(counterActions.toggleCounter());
   };

   return (
      <main className={classes.counter}>
         <h1>Redux Counter</h1>
         {show && <div className={classes.value}>{counter}</div>}
         <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increment + 10</button>
            <button onClick={decrementHandler}>Decrement</button>
         </div>
         <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
   );
};

export default Counter;

// class Counter extends Component {
//    incrementHandle() {
//       this.props.increment();
//    }

//    decrementHandle() {
//       this.props.decrement();
//    }

//    toggleCounterHandler() {}
//    render() {
//       return (
//          <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div>
//                <button onClick={this.incrementHandle.bind(this)}>Increment</button>
//                <button onClick={this.decrementHandle.bind(this)}>Decrement</button>
//             </div>
//             <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//          </main>
//       );
//    }
// }
// const mapStateToProps = (state) => {
//    return {
//       counter: state.counter,
//    };
// };

// const mapDispathToProps = (dispath) => {
//    return {
//       increment: () => dispath({ type: "increment" }),
//       decrement: () => dispath({ type: "decrement" }),
//    };
// };
// export default connect(mapStateToProps, mapDispathToProps)(Counter);
