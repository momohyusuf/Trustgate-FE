interface CustomButtomProps {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary";
}
const CustomButton = ({ text, onClick, variant }: CustomButtomProps) => {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary" ? "bg-primary-200" : "bg-secondary-100"
      } text-black px-8 py-3 rounded-md`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
