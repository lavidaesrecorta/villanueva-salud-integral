import OrBiography, { IOrBiography } from "./variations/OrFeaturesBiography";
import OrFeaturesList, { IOrFeaturesList } from "./variations/OrFeaturesList";
import { AvailableFeatures, FeatureTypes } from "./featureTypes";
import { IBlock } from "../../typeLibrary/Block";
import OrFeaturesCallToAction, { IOrCallToAction } from "./variations/OrFeaturesCallToAction";

export interface IOrFeaturesBlock extends IBlock {
    type: FeatureTypes;
    blockTitle: string;
}

const OrFeaturesBlock: React.FC<IOrFeaturesBlock> = (props) => {
  switch (props.type) {
    case AvailableFeatures.BIOGRAPHY:
      return <OrBiography {...props as IOrBiography} />;
    case AvailableFeatures.FEATURE_LIST:
      return <OrFeaturesList {...props as IOrFeaturesList} />;
    case AvailableFeatures.CALL_TO_ACTION:
      return <OrFeaturesCallToAction {...(props as IOrCallToAction)} />
    default:
      return <OrFeaturesList {...props} />;
      break;
  }
};

export default OrFeaturesBlock;