import react from "react"
import { useState } from "react"

const App = () => {
  const hotNews = [
    {
      title: "The sun dipped below the horizon, painting the sky in hues of pink and orange",
      link: "/post1",
      value: 0,
    },
    {
      title:"2 gentle breeze whispered through the trees, carrying the fragrance of blooming",    
      link: "/post1",
      value: 1,
    },
    {
      title:"3 night unfolded its velvety cloak, stars emerged, casting their radiant glow",
      link: "/post1",
      value: 2,
    },
    {
      title: "that quiet moment, nature’s symphony played, a tranquil melody f",
      link: "/post1",
      value: 3,
    },
    {
      title:"willing to listen. Each rustle of leaves and chirp of crickets told a story of the",
      link: "/post1",
      value: 4,
    },
  ];
  const [activeNews, setActiveNews] = useState(hotNews[0]);
  console.log(111)
  
  setTimeout(() => {

  const item = activeNews.value;

   console.log("item",item)

   console.log("lenght",hotNews.length-1)
    if (item === hotNews.length - 1) {
  //     setActiveNews(hotNews[0]);

   } else {
     // setActiveNews(hotNews[item + 1]);
    }
  }, 2000);
  return (
    <div className="container px-5 py-4">
      <span className="font-bold">Hot News:</span>
      <span className="ml-2 font-bold text-gray-500">{activeNews.title}</span>
    </div>
  );
};
export default App;