import "./Input.css";

const Input = ({ formik, name, label, type }) => {
  return (
    <div>
      <div>
        <label htmlFor={name} className="label">
          {label}
        </label>
        <br />
        <input
          style={{ width: "300px" }}
          name={name}
          id={name}
          type={type}
          {...formik.getFieldProps(name)}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <div className="error">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
