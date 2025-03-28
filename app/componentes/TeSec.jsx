import Image from "next/image";
import avatar1 from '../../public/avatar1.png';
import avatar2 from '../../public/avatar2.png';
import avatar3 from '../../public/avatar3.png';

export default function TeamsSec() {
    return (
      <section className="bg-white py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Loved by the world's best teams</h2>
        <button className="mt-4 px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition">
          See all customer stories →
        </button>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-10 text-start">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h1 className="text-5xl  text-gray-800"><span className="font-bold">vm</span>ware</h1>
            <p className="mt-[40px] text-gray-600">“When the pandemic hit, those of us <br /> who thrive on in-person <br /> collaboration were worried that our <br /> creativity and productivity would <br /> suffer. Miro was the perfect tool to <br /> help us with collaboration, <br /> whiteboarding, and retrospectives <br /> while remote.”</p>
            <div className="mt-[60px] flex items-center gap-3">
              <Image src={avatar1} alt="Roxanne Mustafa" className="w-10 h-10 rounded-full" />
              <div className="text-left">
                <p className="text-gray-900 font-semibold">Roxanne Mustafa</p>
                <p className="text-gray-500 text-sm">Design Team Lead at VMware</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-5xl font-bold text-gray-800">DocuSign</h3>
            <p className="mt-[40px] text-gray-600">“Miro helps solve one of the major <br /> gaps in product design: how to <br /> manage tasks across product <br /> designers whose projects are in <br /> different tools.”</p>
            <div className="mt-[130px] flex items-center gap-3">
            <Image src={avatar2} alt="Jane Ashley" className="w-10 h-10 rounded-full" />
              <div className="text-left">
                <p className="text-gray-900 font-semibold">Jane Ashley</p>
                <p className="text-gray-500 text-sm">Head of Design at DocuSign</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-5xl font-bold text-gray-800">frog</h3>
            <p className="mt-[40px] text-gray-600">“As we used Miro we moved from <br /> skepticism to belief to innovation, <br /> and now we have a tool that’s at <br /> the core of what we do and will <br /> continue to extend into the future.”</p>
            <div className="mt-[130px] flex items-center gap-3">
            <Image src={avatar3} alt="Laura Baird" className="w-10 h-10 rounded-full" />
              <div className="text-left">
                <p className="text-gray-900 font-semibold">Laura Baird</p>
                <p className="text-gray-500 text-sm">Associate Design Director at frog</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-950 h-[400px] w-[1000px] m-auto mt-[150px] rounded-2xl">
        <h1 className=" pt-[100px] text-neutral-50 text-5xl font-bold">Join 45M+ users today</h1> <br />
        <span className="text-gray-500">Start for free — upgrade anytime.</span> <br />
        <span className="text-gray-500">Joining as an organization? Contact Sales</span><br />
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-blue-700 mt-[30px]">Sign up free</button>
        </div>
      </section>
    );
  }
  