import Image from 'next/image';
import builetSec from '../../public/BuildSec.png';
export default function BuiletSection() {
  return (
    <div className="p-10 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6  ml-[150px]">
        Built for the way you work
      </h1>
      <div className="flex space-x-4 mb-6 ml-[150px]">
        {['Brainstorming', 'Diagramming', 'Meetings & Workshops', 'Scrum Events', 'Mapping', 'Research & Design', 'Strategic Planning'].map((item, index) => (
          <button key={index} className={`px-4 py-2 rounded-full justify-center border  'border-gray-300'}`}>
            {item}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className='ml-[150px]'>
          <h2 className="text-2xl font-semibold ">Brainstorming</h2>
          <p className="text-gray-600 mt-[20px]">
            Unleash creative ideas and build on <br /> them with the help of sticky notes, <br /> images, mind maps, videos, drawing <br /> capabilities — the list goes on.
          </p>
          <a href="#" className="text-blue-600 mt-4 inline-block">Learn more →</a>
        </div>
        <div className="ml-[-80px] rounded-lg overflow-hidden shadow-lg">
          <Image src={builetSec} alt="Brainstorming ses" width={600} height={400} />
        </div>
      </div>
    </div>
  );
}
