import Image from "next/image";
import logo1 from '../../public/logo1.png'
import logo2 from '../../public/logo22.png'
import logo3 from '../../public/logo3.png'
import logo4 from '../../public/logo4.png'
import logo5 from '../../public/logo5.png'
const LogoSection = () => {
  return (
    <section className="py-8 bg-white">
      <div className="text-center mb-6">
        <p className="text-gray-600 text-lg">
        Trusted by 45M+ users
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-28">
    
        <div className="h-10 w-24 flex items-center justify-center">
          <Image
            src={logo1}
            alt="foto"
          />
          </div>
        <div className="h-10 w-24 flex items-center justify-center">
          <Image
            src={logo2}
            alt="foto"
          />
          </div>
        <div className="h-10 w-24 flex items-center justify-center">
         
          <Image
            src={logo3}
            alt="foto"
          />
          </div>
        <div className="h-10 w-24 flex items-center justify-center">
         
          <Image
            src={logo4}
            alt="foto"
          />
          </div>
        <div className="h-10 w-24 flex items-center justify-center">
         
          <Image
            src={logo5}
            alt="foto"
          />
          </div>
        
        
      </div>
    </section>
  );
};

export default LogoSection;