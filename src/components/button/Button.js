import "./button.scss";

export default function Button({ ...props }) {
  return (
    <div>
      <button className={`button ${props.className}`} onClick={props.onClick}>
        <p>{props.text}</p>
      </button>
    </div>
  );
}
