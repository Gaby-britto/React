import "./style.css";

export function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </header>
  );
}
