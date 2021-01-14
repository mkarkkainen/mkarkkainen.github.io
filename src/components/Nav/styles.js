import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "#EAEAEA",
  },
  links: {
    border: "3px solid red",
    color: "#353535",
    transition: "0.3s ease",
    "&:hover": {
      opacity: 1,
    },
  },
  btn: {
    color: "#353535",
  },
}));
