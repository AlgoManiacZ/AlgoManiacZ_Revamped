import backgroundImage from "../../assets/backgroundImage.svg";
import HeroImage from "../../assets/HeroImage.svg";

const HeroSection = () => {
  return (
    <div className="about">
      <div
        className="md:h-[calc(100vh-112px)] bg-no-repeat bg-cover bg-center md:bg-left lg:bg-left xl:bg-left text-[#aeadaa]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className=" mx-auto px-4 py-16 md:py-20 lg:py-24 xl:py-32">
          <div className="flex flex-col items-center justify-around  md:flex-row">
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
              <img
                src={HeroImage}
                alt=""
                className="w-full h-auto rounded-lg  md:mt-0"
              />
            </div>

            <div className="mt-10 md:mt-0 md:ml-10 md:w-1/2 w-full">
              <h1 className="text-4xl font-bold text-center md:text-left lg:text-5xl xl:text-6xl">
                About <span className="text-[#bf5814]">AlgoManiacZ</span>
              </h1>

              <p className="mt-6 text-base text-center md:text-left lg:text-xl xl:text-2xl leading-relaxed">
                AlgoManiacZ is a vibrant community of passionate coders and
                problem solvers dedicated to helping each other excel in the art
                of problem solving and DSA.
              </p>

              <p className="mt-4 text-base text-center md:text-left lg:text-xl xl:text-2xl">
                So, get ready to test your problem-solving skills, thereby
                intensifying your analytical and rational thinking. If you are a
                technophile and have the zeal to make a difference, this is the
                place to be.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
