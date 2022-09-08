import XIcon from "@heroicons/react/solid/XIcon";
import Image from "next/image";
import { decode } from "punycode";
import internal from "stream";
import { Buffer } from "buffer";
import { Interweave } from "interweave";

export interface IAtSvg {
    sizeClass: string;
    svgBase64Data: string;
}

const DecodeImage = (imageBase64: string) => {
  return Buffer.from(imageBase64,'base64').toString('ascii');
}

const AtSvg: React.FC<IAtSvg> = ({sizeClass,svgBase64Data}) => {
  return (
    <div className={`relative ${sizeClass}`}>
      <Image
        unoptimized
        alt='Social Media'
        src={`data:image/svg+xml;base64,${svgBase64Data}`}
        layout='fill'
        objectFit='cover'
      />
      
  </div>
  );
};

export default AtSvg;