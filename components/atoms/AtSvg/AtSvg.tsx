import XIcon from "@heroicons/react/solid/XIcon";
import Image from "next/image";
import { decode } from "punycode";
import internal from "stream";
import { Buffer } from "buffer";
import { Interweave } from "interweave";

export interface IAtSvg {
    sizeClass: string;
    src: string;
}

const DecodeImage = (imageBase64: string) => {
  return Buffer.from(imageBase64,'base64').toString('ascii');
}

const AtSvg: React.FC<IAtSvg> = ({sizeClass,src}) => {
  return (
    <div className={`relative ${sizeClass}`}>
      <Image
        unoptimized
        alt='Social Media'
        src={`${src}`}
        layout='fill'
        objectFit='cover'
      />
      
  </div>
  );
};

export default AtSvg;