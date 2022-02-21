export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    // borderBottom: "1px dotted pink",
    color: state.isSelected ? "black" : "black",
    padding: 20,
    backgroundColor: "#525252",
    "&:hover": {
      borderColor: "red",
      color: "black",
      backgroundColor: "#F59E0B",
    },
  }),
  control: () => ({
    // width: 200,
    height: "30px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#F59E0B",
    color: "white",
    borderRadius: "10px",
  }),
  placeholder: (base) => ({
    ...base,
    color: "black",
  }),

  indicatorSeparator: () => ({ display: "none" }),

  // placeholder: () => ({ display: "none" }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
