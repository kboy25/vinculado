import animationData from "./love.json";
import Lottie from "lottie-react";
import "./Header.css";

function Header() {
  return (
    <section id="header">
    <main className=" dark:bg-gray-800">
      <div className="header">
        <div className="header-content">
        <p className="text-gray-500 dark:text-gray-400 text-4xl">ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</p>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-5xl lg:text-6xl">
          Distance Means  
            <span className="text-pink-600 dark:pink-blue-500"> So Little When Someone Means </span>
            So Much 
          </h1>
      
          <p className=" text-gray-500 dark:text-gray-400 lg:text-xl">
          We may be separated by distance, but our love is still solid and unwavering. Our link gets stronger and our hearts get fonder with every hour we spend apart. 
          </p>
        </div>
        <div className="header-img">
          <Lottie animationData={animationData} />
        </div>
      </div>
    </main>
    </section>
  );
}

export default Header;
