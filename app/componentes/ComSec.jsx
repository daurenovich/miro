export default function ComSec() {
    return (
      <section className="bg-yellow-400 py-16 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-black">
          Why companies large <br /> and small trust Miro
        </h2>
        <p className="mt-2 text-black underline cursor-pointer">Contact Sales to request a demo</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-20 text-black">
          <div className="flex flex-col items-center">
            <p className="text-6xl font-bold">ISO</p>
            <p className="text-sm text-center">ISO-27001 enterprise-grade security compliant</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl font-bold">#1</p>
            <p className="text-sm text-center">Visual Collaboration Platform on G2</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-6xl font-bold">99%</p>
            <p className="text-sm text-center">of the Fortune 100 are customers</p>
          </div>
          <div className="flex flex-col items-center mt-[150px]">
            <p className="text-6xl font-bold">1,000+</p>
            <p className="text-sm text-center">community- and expert-built templates</p>
          </div>
          <div className="flex flex-col items-center mt-[150px]">
            <p className="text-6xl font-bold">45M+</p>
            <p className="text-sm text-center">users around the world</p>
          </div>
          <div className="flex flex-col items-center mt-[150px]">
            <p className="text-6xl font-bold">100+</p>
            <p className="text-sm text-center">integrations with technology partners</p>
          </div>
        </div>
      </section>
    );
  }
  