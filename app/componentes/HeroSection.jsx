import Image from "next/image";
import Link from "next/link";
import img2 from '../../public/div.png'

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-white  ml-[50px]">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Take ideas from <br /> better to best
        </h1>
        <p className="text-lg text-gray-600">
        Miro is your team's visual platform to connect, <br /> collaborate, and create — together.
        </p>
        <div className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter your work email"
            className="border border-gray-300 rounded-4xl p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[400px]"
          />
          <button className="bg-blue-600 text-white px-2 py-3 rounded-4xl hover:bg-blue-700 w-[400px]">
          Sign up free →
          </button>
        </div>
        <p className="text-sm text-gray-500">Collaborate with your team within minutes
        </p>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">★</span>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold">4.8/5</span> Based on 5149+ reviews:
          </p>
          <div className="flex space-x-2">
            <Link href="https://www.getapp.com" className="text-gray-500 hover:text-blue-600">
              GetApp
            </Link>
            <Link href="https://www.capterra.com" className="text-gray-500 hover:text-blue-600">
              Capterra
            </Link>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="">
          <Image
            src={img2}
            alt="foto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;