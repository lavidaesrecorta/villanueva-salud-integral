import AtButton, { IAtButton } from "../../../atoms/AtButton/AtButton";
import { IOrFeaturesBlock } from "../OrFeaturesBlock";

export interface IOrCallToAction extends IOrFeaturesBlock{
  blockBody?: string,
  actionButton: IAtButton,
}

const OrBiography: React.FC<IOrCallToAction> = ({blockTitle,blockBody,actionButton}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center justify-items-center items-center bg-primary text-white h-96">
        <div className="w-full h-full md:w-7/12 px-4 py-8 md:p-12">
          <div className="block mx-auto md:mx-0 text-center">
            <h1 className="text-3xl">{blockTitle}</h1>
            <div className="my-4">{blockBody}</div>
            <div className="temporal w-96 mx-auto">
            <AtButton {...actionButton}/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default OrBiography;