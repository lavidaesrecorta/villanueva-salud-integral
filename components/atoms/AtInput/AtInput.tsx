export interface IAtInput {
    inputLabel?: string;
    sizeClasses?: string;
}

const AtInput: React.FC<IAtInput> = ({inputLabel,sizeClasses}) => {
  return (
    <input type="email" name="" id="" className={`bg-primary-light focus:outline-none text-primary px-2 ${sizeClasses}`} placeholder={inputLabel} />
    );
};

export default AtInput;