import { useEffect } from "react"
import { useState } from "react"

const hotNewsItems = [
	{
		title: "The sun dipped below the horizon, painting the sky in hues of pink and orange",
		link: "/post1"
	},
	{
		title: "2 gentle breeze whispered through the trees, carrying the fragrance of blooming",
		link: "/post1"
	},
	{
		title: "3 night unfolded its velvety cloak, stars emerged, casting their radiant glow",
		link: "/post1"
	},
	{
		title: "that quiet moment, nature’s symphony played, a tranquil melody f",
		link: "/post1"
	},
	{
		title: "willing to listen. Each rustle of leaves and chirp of crickets told a story of the",
		link: "/post1"
	},
];

const App = () => {
	const [hotNewsIndex, setHotNewsIndex] = useState(0);

	useEffect(() => {
		setInterval(() => {
			let _hotNewsIndex = hotNewsIndex;
			if (_hotNewsIndex >= hotNewsItems.length - 1) {
				_hotNewsIndex = 0;
			} else {
				_hotNewsIndex++;
			}
			setHotNewsIndex(_hotNewsIndex);
		}, 2000);
	}, [hotNewsIndex]);

	return (
		<div className="container px-5 py-4">
			<span className="font-bold">Hot News:</span>
			<span className="ml-2 font-bold text-gray-500">{hotNewsItems[hotNewsIndex].title}</span>
		</div>
	);
};
export default App;