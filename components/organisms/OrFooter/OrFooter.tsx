import Image from 'next/image'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import AtInput from '../../atoms/AtInput/AtInput';
import AtButton from '../../atoms/AtButton/AtButton';
import MlLink, { IMlLink } from '../../molecules/MlLink/MlLink';
import MlSubscribeWidget, { IMlSubscribeWidget } from '../../molecules/MlSubscribeWidget/MlSubscribeWidget';

export interface IOrFooter {
    navigationRoutes: {title: string, path: string}[];
    subscribeWidget: IMlSubscribeWidget;
}

const OrFooter: React.FC<IOrFooter> = ({navigationRoutes,subscribeWidget}) => {
  const mappedRoutes = navigationRoutes.map((route) => {
    return (
      <a key={route.path} className="block lg:inline-block p-4 text-center">{route.title}</a>
    )
  });

  return (
    <div className="bg-primary">
      <div className='text-purple-200 flex items-center flex-col lg:flex-row px-6 py-2'>
        <div className="p-2">
          <Image src="/logo-blanco-transparente.png" alt="Logo" height="64px" width="100%" objectFit="contain" />
        </div>    
        <div className="grow hidden lg:block" />
        <div className='lg:divide-x divide-purple-300'>
          <div className="p-2 align-top block lg:inline-block lg:h-full">
              {mappedRoutes}
          </div>
          <MlSubscribeWidget {...subscribeWidget}/>
        </div>
      </div>
      {/* <div >
          <ul className='text-center list-disc'>
            <li className='lg:inline-block'>Villanueva Salud Integral</li>
            <li className='lg:inline-block'>Todos los derechos reservados</li>
            <li className='lg:inline-block'>2022</li>
          </ul>
      </div> */}
    </div>
  );
};

export default OrFooter;