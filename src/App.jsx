import round from "/favicon.png";
import brown_bottom from "./assets/home/brown-bottom.png";
import side_round from "./assets/home/side-round.png";
import siigiriya_main from "./assets/home/sigiriya_main.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-between bg-bottom bg-cover h-dvh" style={{ backgroundImage: `url(${siigiriya_main})` }}>
        <div className="text-center h-1/3 pt-[100px] z-10 text-white">
          <p className="angelina text-[900%] max-md:text-[700%]">Thema</p>
          <p className="uppercase text-8xl max-sm:text-6xl">Travels</p>
          <p className="text-3xl font-bold uppercase max-sm:text-xl">
            where tradition meets exploration
          </p>
          <div className="w-full h-[30px] gap-6 flex items-center justify-center">
            <span className="h-[2px] bg-white w-1/3 opacity-70"></span>
            <img src={round} className="h-full" />
            <div className="flex flex-col h-[10px] gap-1 w-1/3 mb-1 opacity-80">
              <span className="h-[2px] bg-white"></span>
              <span className="h-[2px] w-2/3 bg-amber-900"></span>
            </div>
          </div>
        </div>
        <div className="relative w-full bg-bottom bg-cover h-1/3 opacity-80" style={{ backgroundImage: `url(${brown_bottom})` }}>
          <img src={side_round} alt="side-round" className="absolute bottom-0" />
        </div>
      </div>
    </>
  );
}

export default App;
