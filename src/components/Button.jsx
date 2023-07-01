const Button = ({ children, type = "submit", className, ...props }) => {
  return (
    <button type={type} className={`rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50  ${className}`} {...props}>
      {children}
    </button>
  );
};
export default Button;
