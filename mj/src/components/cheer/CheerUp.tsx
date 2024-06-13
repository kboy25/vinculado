import animationData from "./message.json";
import Lottie from "lottie-react";
import "./CheerUp.css";

const CheerUp = () => {
  return (
    <>
    <section id="cheer">
      <div className="cheer">
        <div className="cheer-img">
          <Lottie animationData={animationData} />
        </div>
        <div className="cheer-content">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-5xl lg:text-6xl">
            Whenever You're Feeling Down,
            <span className="dark:pink-blue-500 text-pink-600">
              {" "}
              Visit This Website to Lift Your Spirits
            </span>
          </h1>

          <p className=" text-gray-500 dark:text-gray-400 lg:text-xl">
            Life can be difficult at times, and you may feel depressed or
            overwhelmed. Just go to our website whenever you need a reminder of
            how much you're valued and loved. It's brimming with our best
            recollections, heartfelt words, and all the small details that add
            up to make our connection unique. Allow this to serve as your haven,
            a place of solace, encouragement, and a constant reminder of the
            precious connection we have. I'm always here for you, no matter
            what, and we can overcome anything together.
          </p>
        </div>
      </div>
      </section>
    </>
  );
};

export default CheerUp;
