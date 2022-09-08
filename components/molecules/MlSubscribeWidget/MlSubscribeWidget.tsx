import AtButton from "../../atoms/AtButton/AtButton";
import AtInput from "../../atoms/AtInput/AtInput";
import MlLink, { IMlLink } from "../MlLink/MlLink";

export interface IMlSubscribeWidget {
    widgetTitle: string;
    socialMediaIcons: IMlLink[];
}



const MlSubscribeWidget: React.FC<IMlSubscribeWidget> = ({widgetTitle,socialMediaIcons}) => {
  const mappedSocialMediaIcons = socialMediaIcons ? socialMediaIcons.map((icon, index) => {
    return (
      <MlLink key={index} {...icon} />
    )
  }) : null;

    return (
      <div className="block lg:inline-block lg:h-full lg:pl-4 pb-2">
        <div className='p-4'>
          <h1 className='text-xl pb-2'>{widgetTitle}</h1>
          <div className=''>
            <AtInput sizeClasses='w-full h-9 my-1' />
            <AtButton sizeClasses='w-full h-9 my-1' buttonLabel='Subscribirse' buttonStyle='SMALL'/>
          </div>
        </div>
        <div className='flex justify-center px-6'>
          {mappedSocialMediaIcons}
        </div>
      </div>
  );
};

export default MlSubscribeWidget;