import AtButton, { IAtButton } from "../../../atoms/AtButton/AtButton";
import MlLink, { IMlLink } from "../../../molecules/MlLink/MlLink";
import { IOrFeaturesBlock } from "../OrFeaturesBlock";

export interface IOrCallToAction extends IOrFeaturesBlock{
  blockBody?: string,
  actionButton: IAtButton,
  socialMediaIcons?: IMlLink[];
}




const OrBiography: React.FC<IOrCallToAction> = ({blockTitle,blockBody,actionButton, socialMediaIcons}) => {
  
  const mappedSocialMediaIcons = socialMediaIcons ? socialMediaIcons.map((icon, index) => {
    return (
      <MlLink key={index} {...icon} />
    )
  }) : null;

  return (
    <div className="flex flex-col md:flex-row justify-center justify-items-center items-center bg-primary text-white h-96">
        <div className="w-full h-full md:w-7/12 px-4 py-8 md:p-12">
          <div className="block mx-auto md:mx-0 text-center">
            <h1 className="text-3xl">{blockTitle}</h1>
            <div className="my-4">{blockBody}</div>
            <div className="my-8 mx-auto"><AtButton {...actionButton}/></div>
            <div className="my-12 gap-8 justify-center flex">{mappedSocialMediaIcons}</div>
          </div>
        </div>
    </div>
  );
};

export default OrBiography;