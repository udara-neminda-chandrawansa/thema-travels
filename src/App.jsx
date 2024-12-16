import brown_bottom from "./assets/home/brown-bottom.png";
import side_round from "./assets/home/side-round.png";
import siigiriya_main from "./assets/home/sigiriya_main.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex h-dvh justify-between items-center flex-col bg-cover bg-bottom" style={{ backgroundImage: `url(${siigiriya_main})` }}>
        <div className="text-center h-1/3 pt-[100px] z-10 text-white">
          <p className="angelina text-[900%] max-md:text-[700%]">Thema</p>
          <p className="uppercase text-8xl max-sm:text-6xl">Travels</p>
          <p className="uppercase text-3xl max-sm:text-xl font-bold">
            where tradition meets exploration
          </p>
        </div>
        <div className="w-full h-1/3 relative bg-cover bg-bottom opacity-80" style={{ backgroundImage: `url(${brown_bottom})` }}>
          <img src={side_round} alt="side-round" className="absolute bottom-0" />
        </div>
      </div>
    </>
  );
}

export default App;
