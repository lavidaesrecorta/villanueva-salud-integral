export interface IAtInput {
    sampleTextProp?: string;
    sizeClasses: string;
}

const AtInput: React.FC<IAtInput> = ({sampleTextProp,sizeClasses}) => {
  return (
    <input type="email" name="" id="" className={`bg-primary-light focus:outline-none text-primary px-2 ${sizeClasses}`}/>
    );
};

export default AtInput;