import Image from "next/image";
export interface IMlBanner {
    sampleTextProp: string;
}

const MlBanner: React.FC<IMlBanner> = ({sampleTextProp}) => {
  const backgroundImageClass = "fixed";
  return (
      <div className="w-full h-96">
        <div className="relative h-full z-0">
          <Image className={backgroundImageClass} src="/banner-bg.jpg" alt="Flores" layout="fill" objectFit="cover"/>
        <div className="z-10 relative h-full w-full lg:w-1/2 flex items-center">
          <div className="mx-auto text-gray-100 bg-primary-light/50 backdrop-blur-sm p-4 rounded-sm">
              <span className="text-3xl font-bold">Villanueva Salud Integral</span>
              <p>Descubre la verdadera terapia floral.</p>
              <button className="px-2 py-2 mt-4 bg-primary text-xl w-full ">Contáctanos</button>
          </div>
        </div>
        </div>
      </div>
  );

};

export default MlBanner;