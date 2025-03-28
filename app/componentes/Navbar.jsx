import Image from 'next/image';
import React from 'react';  
import Link from 'next/link';  
import img1 from '../../public/Frame.png'

export default function Navbar() {  
  return (  
    <header className="bg-white shadow-sm">  
      <nav className="flex items-center justify-between p-4">  
        <div >  
          <Image src={img1} alt="logo" className="w-[70px]"/> 
        </div>  
        <div className="hidden md:flex space-x-6 text-gray-700">  
          <Link href="/product" className="hover:text-blue-600" aria-label="Product">Product</Link>  
          <Link href="/solutions" className="hover:text-blue-600" aria-label="Solutions">Solutions</Link>  
          <Link href="/resources" className="hover:text-blue-600" aria-label="Resources">Resources</Link>  
          <Link href="/enterprise" className="hover:text-blue-600" aria-label="Enterprise">Enterprise</Link>  
          <Link href="/pricing" className="hover:text-blue-600" aria-label="Pricing">Pricing</Link>  
        </div>  

        <div className="flex items-center space-x-4">  
          <div className="flex items-center space-x-1 text-gray-700">  
            <label htmlFor="language-select" className="text-sm">🌐</label>  
            <select id="language-select" className="border rounded-md p-1">  
              <option value="UZ">UZ</option>  
              <option value="EN">EN</option>  
            </select>  
          </div>  

          <Link href="/contact-sales" className="text-gray-700 hover:text-blue-600" aria-label="Contact Sales">Contact Sales</Link>  

          <Link href="/login" className="text-gray-700 hover:text-blue-600" aria-label="Log in">Log in</Link>  

          <Link href="/signup">  
            <button className="bg-blue-600 text-white px-4 py-2 rounded-2xl hover:bg-blue-700">  
              Sign up free  
            </button>  
          </Link>  
        </div>  
      </nav>  
    </header>  
  );  
}  