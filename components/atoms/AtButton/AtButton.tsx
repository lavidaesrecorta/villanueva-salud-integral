export interface IAtButton {
    buttonLabel: string;
    buttonStyle?: keyof typeof ButtonStyles;
    sizeClasses?: string;
    
}

enum ButtonStyles {
  DEFAULT_PRIMARY = 'px-2 py-2 bg-purple-500 text-xl',
  SMALL = 'bg-purple-500',
}

const AtButton: React.FC<IAtButton> = ({buttonLabel, sizeClasses, buttonStyle}) => {
  return (
  <button className={`${buttonStyle ? ButtonStyles[buttonStyle] : ButtonStyles.DEFAULT_PRIMARY} ${sizeClasses}`}>{buttonLabel}</button>
  );
};

export default AtButton;