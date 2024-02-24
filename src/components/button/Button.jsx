import "./button.css";

const Button = (props) => {
  const text = props.btn;
  return <main className="btn-container">{text}</main>;
};

export default Button;
