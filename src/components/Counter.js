import { useDispatch, useSelector } from 'react-redux'; // allows data to be sent to and fro store
import { counterActions } from '../store/counterDux';
import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter.counter); // use this hook to get data out of store
	const showBtns = useSelector((state) => state.counter.showCounter);

	// const [toggle, setToggle] = useState(false);

	const incrementHandle = () => {
		dispatch(counterActions.increment());
	};
	const increaseHandle = () => {
		dispatch(counterActions.increase(5));
	};

	const decrementHandle = () => {
		dispatch(counterActions.decrement());
	};
	const decreaseHandle = () => {
		dispatch(counterActions.decrease(5));
	};

	const toggleCounterHandler = () => {
		//setToggle(!toggle);
		dispatch(counterActions.toggle());
	};

	//*** Good for local state toggling */
	// const buttonShow = !toggle ? (
	// 	<div>
	// 		<button onClick={incrementHandle} disabled={toggle}>
	// 			Increment
	// 		</button>
	// 		<button onClick={increaseHandle} disabled={toggle}>
	// 			Increment by 5
	// 		</button>
	// 		<button onClick={decrementHandle} disabled={toggle}>
	// 			Decrement
	// 		</button>
	// 		<button onClick={decreaseHandle} disabled={toggle}>
	// 			Decrement by 5
	// 		</button>
	// 	</div>
	// ) : (
	// 	<p>Buttons Disabled!</p>
	// );
	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>-- {counter} --</div>
			{/* {buttonShow} */}
			{showBtns && (
				<div>
					<button onClick={incrementHandle}>Increment</button>
					<button onClick={increaseHandle}>Increment by 5</button>
					<button onClick={decrementHandle}>Decrement</button>
					<button onClick={decreaseHandle}>Decrement by 5</button>
				</div>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
