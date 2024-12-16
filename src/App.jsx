import brown_bottom from "./assets/home/brown-bottom.png";
import side_round from "./assets/home/side-round.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex h-dvh justify-between items-center flex-col">
        <div className="text-center h-1/3 pt-[100px]">
          <p className="angelina text-[900%] max-md:text-[700%]">Thema</p>
          <p className="uppercase text-8xl max-sm:text-6xl">Travels</p>
          <p className="uppercase text-3xl max-sm:text-xl font-bold">
            where tradition meets exploration
          </p>
        </div>
        <div className="w-full h-1/3 relative">
          <img src={brown_bottom} alt="bottom" className="w-full h-full object-cover object-bottom" />
          <img src={side_round} alt="side-round" className="absolute bottom-0" />
        </div>
      </div>
    </>
  );
}

export default App;
