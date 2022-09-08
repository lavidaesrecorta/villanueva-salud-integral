export interface IAtButton {
    sampleTextProp: string;
    sizeClasses: string;
    buttonStyle?: keyof typeof ButtonStyles;
    
}

enum ButtonStyles {
  DEFAULT_PRIMARY = 'px-2 py-2 bg-purple-500 text-xl',
  SMALL = 'bg-purple-500',
}

const AtButton: React.FC<IAtButton> = ({sampleTextProp, sizeClasses, buttonStyle}) => {
  return (
  <button className={`${buttonStyle ? ButtonStyles[buttonStyle] : ButtonStyles.DEFAULT_PRIMARY} ${sizeClasses}`}>{sampleTextProp}</button>
  );
};

export default AtButton;