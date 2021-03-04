import propTypes from "prop-types";

function Sample(props) {
	return (
		<div className={`Sample_${props.name} Sample_image`}>
			<h1>Sample {props.value.name}</h1>
			<h2>Scale: {props.scale}</h2>
			<img src={props.value.src} alt={props.value.name} />
		</div>
	);
}

Sample.propTypes = {
	name: propTypes.string.isRequired,
	value: propTypes.object.isRequired,
	scale: propTypes.number,
};

Sample.defaultProps = {
	scale: 1.0,
};

function object_parser(value, index) {
	return (
		<Sample
			key={index}
			name={`check_${index + 1}_${value.name}`}
			value={value}
			scale={value.scale}
		/>
	);
}

function App() {
	const object = [
		{
			name: "миньон",
			src:
				"https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg",
			scale: 0.7,
		},
		{
			name: "стич",
			src:
				"https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
			scale: 0.8,
		},
	];

	return (
		<div className="App">
			<h1>Lorem lipsum</h1>
			{object.map(object_parser)}
		</div>
	);
}

export default App;
