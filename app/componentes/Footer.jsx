import Image from 'next/image';
import Link from 'next/link';
import google from '../../public/google.png'
import appstore from '../../public/app.store.png'
import twinter from '../../public/twinter.png'
import Linked from '../../public/linked.png'
import instagram from '../../public/instag.png'
import youtube from '../../public/youtube.png'

export default function Footer() {
  return (
    <footer className="bg-[#1a2a44] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Product</h3>
            <ul className="space-y-2">
              {[
                'Online Whiteboard',
                'Apps & Integrations',
                'Templates',
                'Miroverse',
                'Miro Developer Platform',
                'Miro for Devices',
                'Security & Compliance',
                'Accessibility',
                'Changelog',
                'View Demo →',
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Solutions</h3>
            <ul className="space-y-2">
              {[
                'Meetings and Workshops',
                'Brainstorming & Ideation',
                'Agile Workflows',
                'Diagramming',
                'Research & Design',
                'Strategy & Planning',
                'Mind Map',
                'Concept Map',
                'Online Sticky Notes',
                'Flowchart',
                'Wireframing',
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Resources</h3>
            <ul className="space-y-2">
              {[
                'Miro Academy',
                'Help Center',
                'Blog',
                'Status',
                'Miro Community',
                'Miro Professional Network',
                'Miro Experts Directory',
                'Miro Events',
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              {[
                'About us',
                'Careers 🚀',
                'Miro in the News',
                'Customer Stories',
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Plans and Pricing</h3>
            <ul className="space-y-2">
              {[
                'Pricing',
                'Business',
                'Enterprise',
                'Consultants',
                'Education',
                'Startups',
                'NPOs',
                'Contact Sales →',
              ].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="text-sm hover:underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <div className="flex gap-3">
              <Link href="#">
                <Image
                  src={twinter}
                  alt="twinter"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src={Linked}
                  alt="Linked"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src={instagram}
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="#">
                <Image
                  src={youtube}
                  alt="YouTube"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span>EN</span>
              <span>© 2022 Miro</span>
              <Link href="#" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:underline">
                Manage Cookies
              </Link>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="#">
              <Image
                src={appstore}
                alt="appstore"
                width={120}
                height={40}
              />
            </Link>
            <Link href="#">
              <Image
                src={google}
                alt="google"
                width={120}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

