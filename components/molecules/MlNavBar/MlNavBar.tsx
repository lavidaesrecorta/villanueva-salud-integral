import Image from 'next/image'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';

export interface IMlNavBar {
    navigationRoutes: {title: string, path: string}[];
}

const MlNavBar: React.FC<IMlNavBar> = ({navigationRoutes}) => {
  const mappedRoutes = navigationRoutes.map((route) => {
    return (
      <a key={route.path} className="block lg:inline-block p-4 text-center">{route.title}</a>
    )
  });

  const [showNav, setShowNav] = useState(false); 

  return (
    <div className="bg-primary text-purple-200 flex items-center flex-col lg:flex-row px-6 py-2">
      <div className="p-2">
        <Image src="/logo-blanco-transparente.png" alt="Logo" height="64px" width="100%" objectFit="contain" />
      </div>
      <div className="grow hidden lg:block" />
      <button className="block lg:hidden" onClick={() => {setShowNav(!showNav)}}>
        {showNav ? 
          <XIcon className="w-8 m-2" />  :
          <MenuIcon className="w-8 m-2"/> }
      </button>
      <div className={`p-2 ${ (showNav) ? "block" : "hidden"} lg:block`}>
          {mappedRoutes}
      </div>
    </div>
  );
};

export default MlNavBar;