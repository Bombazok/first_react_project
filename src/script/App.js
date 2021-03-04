function Sample(props) {
	return (
		<div className={`Sample_${props.name}`}>
			<h1>Sample {props.value}</h1>
		</div>
	);
}

function App() {
	let elements = ["1", "2", "3"];
	return (
		<div className="App">
			<h1>Привет</h1>
			{elements.map((value, index) => (
				<Sample name={`check_${index + 1}`} value={value} />
			))}
		</div>
	);
}

export default App;
