import Image from 'next/image';
import builetSec2 from '../../public/BuildSec-2.png';
import logo1 from '../../public/Vector-1.png';
import logo2 from '../../public/Vector-2.png';
import logo3 from '../../public/Vector-3.png';
import logo4 from '../../public/Vector-4.png';
export default function BuiletSec() {
  return (
    <div className="p-10 bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-6  ml-[150px]">
      Built for all kinds of teams
      </h1>
      <div className="flex space-x-4 mb-6 ml-[150px]">
        {['UX & Design', 'Marketing', 'Product Management', 'Engineering', 'Consultants', 'Agile Coaches', 'Sales'].map((item, index) => (
          <button key={index} className={`px-4 py-2 rounded-full justify-center border  'border-gray-300'}`}>
            {item}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <div className='ml-[150px]'>
          <span className="text-gray-600">
          Build low-fi wireframes
          </span><br /><br />
          <span className="text-gray-600 "> 
          Involve stakeholders in the design process
          </span><br /><br />
          <span className="text-gray-600 ">
          Run engaging design workshops
          </span><br /><br />
          
          <a href="#" className="text-blue-600  inline-block">Learn more →</a><br /><br /><br />
          <span className="text-gray-600">
            Integrate your favorite tools
          </span><br /><br />
          <div className="flex gap-8">
          <Image src={logo1} alt="logo" width={25} />
          <Image src={logo2} alt="logo" width={25} />
          <Image src={logo3} alt="logo" width={25} />
          <Image src={logo4} alt="logo" width={25} />
          </div>
        </div>
        <div className="ml-[-80px] rounded-lg overflow-hidden shadow-lg">
          <Image src={builetSec2} alt="Brainstorming ses" width={600} height={400} />

        </div>
      </div>
    </div>
  );
}
