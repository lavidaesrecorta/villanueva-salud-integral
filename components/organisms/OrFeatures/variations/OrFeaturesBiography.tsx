import { IOrFeaturesBlock } from "../OrFeaturesBlock";
import Image from "next/image";


export interface IOrBiography extends IOrFeaturesBlock{
  biographyBody?: string,
}

const OrBiography: React.FC<IOrBiography> = ({blockTitle,biographyBody}) => {
  return (
    <div className="flex flex-col md:flex-row justify-items-center items-center bg-purple-300 h-96">
        <div className="h-96 w-full md:h-full md:w-5/12 bg-secondary">
        <div className="relative h-full z-0">
        <Image className="fixed" src="/andreabio.jpg" alt="Flores" layout="fill" objectFit="cover" />
        </div>
        </div>
        <div className="w-full h-full md:w-7/12 bg-primary-light px-4 py-8 md:p-12">
          <div className="block mx-auto md:mx-0">
            <h1 className="text-3xl">{blockTitle}</h1>
            <div className="mt-2">{biographyBody}</div>
          </div>
          
        </div>
    </div>
  );
};

export default OrBiography;