import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    backgroundColor: "#EAEAEA",
    width: "100%",
    height: "80vh",
    display: "grid",
    placeItems: "center center",
  },
  wrap: {
    border: "3px solid red",
    color: "#606060",
    display: "grid",
    width: "100vh",
  },
}));
