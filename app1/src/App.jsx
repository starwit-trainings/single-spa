import ButtonAppBar from "./ButtonAppBar";
import MainTheme from "./themes/MainTheme";
import "./index.css";


export default function App(props) {
  return (
  <MainTheme>
    <ButtonAppBar />
    <section>{props.name} is mounted!</section>
  </MainTheme>
  );
}
