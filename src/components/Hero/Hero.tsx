import TypeWriter from "./TypeWriter";

const Hero = () => {
  const phrases = ["Make dinner", "Walk the dog", "Take a break"];

  return (
    <>
      <h1 className="flex flex-col text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-20 mx-auto text-center justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-500 to-purple-600">
        <span>One Task</span>
        <span>at a Time</span>
      </h1>
      <div className="relative h-20 w-full mt-10 max-w-70 mx-auto group">
        <div className="-inset-0.5 flex absolute bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <h2 className="relative rounded-lg bg-black flex items-center justify-center h-full">
          <TypeWriter phrases={phrases} />
        </h2>
      </div>
    </>
  );
};

export default Hero;
