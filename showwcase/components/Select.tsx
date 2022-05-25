import Select from "react-select";

const selectCustomStyles = {
  container: (provided: any) => ({
    ...provided,
    width: 180,
  }),
};

const SelectCustom = ({ ...props }) => {
  return <Select styles={selectCustomStyles} {...props} />;
};

export default SelectCustom;
