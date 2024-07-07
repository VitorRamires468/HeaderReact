import classes from "./HelloWorld.module.css";

const books = ["O Hobbit", "Harry Potter", "Nárnia"];

function HelloWorld() {
  const chosenBook = Math.random() > 0.5 ? books[0] : books[1];
  return (
    <div>
      <h1 className={classes.cabecalho}>Hello Wolrd, sou o Vitor</h1>
      <h3>{chosenBook}</h3>
    </div>
  );
}
export default HelloWorld;
