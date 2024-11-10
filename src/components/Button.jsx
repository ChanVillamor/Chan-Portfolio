const Button = ({
  type = "button",  // default type is "button" unless specified as "submit"
  label,
  id,
  href,
  backgroundColor,
  textColor,
  textSize,
  borderColor,
  fullWidth,
}) => {
  const isSubmit = type === "submit";

  return isSubmit ? (
    <button
      type="submit"
      className={`flex justify-center items-center gap-2 px-5 py-3 md:px-7 md:py-4 lg:px-10 border font-poppins text-lg font-medium leading-none hover:bg-green-500 hover:duration-200
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} ${textSize}`
          : "bg-[rgba(232,223,202,0.2)] text-primary border-primary"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {id}
      {label}
    </button>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex justify-center items-center gap-2 px-5 py-3 md:px-7 md:py-4 lg:px-10 border font-poppins text-lg font-medium leading-none hover:bg-green-500 hover:duration-200
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} ${textSize}`
          : "bg-[rgba(232,223,202,0.2)] text-primary border-primary"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {id}
      {label}
    </a>
  );
};

export default Button;
