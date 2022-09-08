import MlCard, { IMlCard } from "../../../molecules/MlCard/MlCard";
import { IOrFeaturesBlock } from "../OrFeaturesBlock";

export interface IOrFeaturesList extends IOrFeaturesBlock{
  features?: IMlCard[],
}

const OrFeaturesList: React.FC<IOrFeaturesList> = ({blockTitle,features}) => {
  return (
    <div className="bg-tertiary-light py-4">
      <div className="py-4">
        <h1 className="text-center text-3xl my-8">{blockTitle}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-24 my-8">
          {features?.map((feat,index) => {return (<MlCard key={index} {...feat}/>)})}
        </div>
      </div>
    </div>
  );
};

export default OrFeaturesList;