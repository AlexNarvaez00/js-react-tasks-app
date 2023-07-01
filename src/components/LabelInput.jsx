const LabelInput = ({children , className,...props}) => {
  return (
    <label className={`${className}`} {...props}>
      {children}
    </label>
  );
};
export default LabelInput;
