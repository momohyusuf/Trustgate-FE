interface CustomButtonProps {
  text: string | JSX.Element;
  onClick: () => void;
  variant: "primary" | "secondary";
  disabled?: boolean;
  className?: string;
}
const CustomButton = ({
  text,
  onClick,
  variant,
  disabled,
  className,
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={
        `${
          variant === "primary" ? "bg-primary-200" : "bg-secondary-100"
        } text-black px-8 py-3 rounded-md ${
          disabled ? "opacity-50 cursor-not-allowed text-gray-500" : ""
        }` + className
      }
    >
      {text}
    </button>
  );
};

export default CustomButton;
