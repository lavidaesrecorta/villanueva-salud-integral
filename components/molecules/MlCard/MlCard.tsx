import Image from "next/image";

export interface IMlCard {
    cardTitle: string;
    cardBody: string;
    imageSrc: string;
}

const MlCard: React.FC<IMlCard> = ({cardTitle, cardBody, imageSrc}) => {
  return (
    <div className="flex flex-col bg-secondary min-w-max min-h-max rounded-md overflow-hidden text-white">
      <div className="block relative w-full h-36 lg:h-48">
      <Image className="" src={imageSrc} alt="Flores" layout="fill" objectFit="cover"/>
      </div>
      <div className="block break-normal max-w-screen-sm">
        <div className="px-2 py-2">
        <h1 className="text-lg">{cardTitle}</h1>
        <p>{cardBody}</p>
        </div>
      </div>
    </div>
  );
};

export default MlCard;