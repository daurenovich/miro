import React from 'react'
import Image from "next/image";
import imgw from '../../public/img-work.png'
import imgw2 from '../../public/imgw2.png'
import section from '../../public/section.png'
export default function WorkSection() {
  return (
    <div>
        <div className="flex gap-35 justify-center mt-[100px]">
            <div className="text-black mt-[150px]">
                <h1 className='text-5xl font-bold'>
                    Work together,<br /> wherever you work
                    </h1> <br />
                <p className='text-2xl'>In the office, remote, or a mix of the two, with Miro,<br /> 
                your team can connect, collaborate, and co-create in <br />
                 one space no matter where you are.
                 </p> <br /> <br />
                <a href="#" className="text-blue-700">Learn more</a>
            </div>
            <div className="">
            <Image
            src={imgw}
            alt="foto"
          />
            </div>
        </div>

        <div className="flex gap-35 justify-center mt-[150px]">
        <div className="">
            <Image
            src={imgw2}
            alt="foto"
          />
            </div>

            <div className="text-black mt-[150px]">
                <h1 className='text-5xl font-bold'>
                    Connect <br />
                    your tools, <br />
                    close your tabs
                    </h1> <br />
                <p className='text-2xl'>
                Whether you want to edit your Google Docs, resolve <br /> Jira issues, or collaborate over Zoom, Miro has 100+ <br />  integrations with tools you already use and love.
                 </p> <br /> <br />
                <a href="#" className="text-blue-700">Learn more</a>
            </div>
            
        </div>
        <div className="ml-[60px] mt-[100px]">
        <Image
            src={section}
            alt="foto"
          />
          </div>
    </div>
  )
}
