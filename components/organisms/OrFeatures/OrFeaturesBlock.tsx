import OrBiography from "./variations/OrFeaturesBiography";
import OrFeaturesList from "./variations/OrFeaturesList";
import { AvailableFeatures, FeatureTypes } from "./featureTypes";
import { IBlock } from "../../typeLibrary/Block";
import OrFeaturesCallToAction from "./variations/OrFeaturesCallToAction";

export interface IOrFeaturesBlock extends IBlock {
    type: FeatureTypes;
    blockTitle: string;
}

const OrFeaturesBlock: React.FC<IOrFeaturesBlock> = (props) => {
  switch (props.type) {
    case AvailableFeatures.BIOGRAPHY:
      return <OrBiography {...props} />;
    case AvailableFeatures.FEATURE_LIST:
      return <OrFeaturesList {...props} />;
    case AvailableFeatures.CALL_TO_ACTION:
      return <OrFeaturesCallToAction {...props} />
    default:
      return <OrFeaturesList {...props} />;
      break;
  }
};

export default OrFeaturesBlock;