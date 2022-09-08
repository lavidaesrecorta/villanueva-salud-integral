import MlBanner, { IMlBanner } from "../../components/molecules/MlBanner/MlBanner";
import OrFooter, {IOrFooter} from "../../components/organisms/OrFooter/OrFooter";
import MlNavBar, { IMlNavBar } from "../../components/molecules/MlNavBar/MlNavBar";
import { AvailableFeatures } from "../../components/organisms/OrFeatures/featureTypes";
import OrFeaturesBlock from "../../components/organisms/OrFeatures/OrFeaturesBlock";
import OrBiography, { IOrBiography } from "../../components/organisms/OrFeatures/variations/OrFeaturesBiography";
import OrFeaturesCallToAction, { IOrCallToAction } from "../../components/organisms/OrFeatures/variations/OrFeaturesCallToAction";
import OrFeaturesList, { IOrFeaturesList } from "../../components/organisms/OrFeatures/variations/OrFeaturesList";
import { IBlock } from "../../components/typeLibrary/Block";

export interface IHomePage {
    navBar: IMlNavBar,
    banner: IMlBanner,
    blocks: IBlock[],
    footer: IOrFooter,
}

const HomePage: React.FC<IHomePage> = ({navBar,banner,blocks, footer}) => {
  return ( 
  <div>
    <MlNavBar {...navBar}/>
    <MlBanner {...banner}/>
    {blocks.map((block,index) => {switch (block.type) {
        case AvailableFeatures.BIOGRAPHY:
          return (<OrBiography {...(block as IOrBiography)} />);   
        case AvailableFeatures.FEATURE_LIST:
          return (<OrFeaturesList {...(block as IOrFeaturesList)} />)   ;
        case AvailableFeatures.CALL_TO_ACTION:
          return (<OrFeaturesCallToAction {...(block as IOrCallToAction)} />)  
        default:
          break;
      }
    } )}
    <OrFooter {...footer}/>
  </div>
  );
};

export default HomePage;