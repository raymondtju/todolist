import { Link } from "react-router-dom";
import bg from "./assets/bg.png";

function Root() {
  return (
    <main
      style={{
        backgroundImage: `url(${bg})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pt-72 my-auto flex flex-col items-center select-none">
        <h1 className="inline font-black text-8xl bg-clip-text text-transparent bg-gradient-to-r from-white to-[#FFFFFF]/[50%] tracking-[-0.05em]">
          T.O.D.O
        </h1>

        <p className="inline font-bold text-3xl bg-clip-text text-white/40 bg-gradient-to-l from-white to-[#FFFFFF]/[50%]">
          List, Do, Tick
        </p>

        <div className="mt-40">
          <Link to="/app" className="inline font-bold text-2xl gradient-animation">
            Click to start
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Root;
