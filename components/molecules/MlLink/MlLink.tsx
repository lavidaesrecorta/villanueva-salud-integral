import XIcon from "@heroicons/react/solid/XIcon";
import Image from "next/image";
import AtSvg, { IAtSvg } from "../../atoms/AtSvg/AtSvg";

export interface IMlLink {
    link: string;
    displayLabel?: string;
    svgIcon?: IAtSvg;
}

const MlLink: React.FC<IMlLink> = ({link,displayLabel,svgIcon}) => {
  return <a className="inline-block" href={link}>
    {!!svgIcon ? 
      <AtSvg {...svgIcon} />
    : null
    }
    {displayLabel ? 
      <div className=" whitespace-nowrap inline">
        {displayLabel}
      </div>
    : null
    }
    </a>;
};

export default MlLink;