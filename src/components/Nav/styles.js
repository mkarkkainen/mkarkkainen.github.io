import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({

  appBar: {
    backgroundColor: "#121212",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },

  leftSide: {
    paddingLeft: "8%",
  },

  links: {
    paddingRight: "8%",
  },

  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    fontFamily: "Ubuntu",
    paddingLeft: "8px",
  },

  image: {
    marginRight: "10px",
  },

  grow: {
    flexGrow: 1,
  },

  link: {
    fontFamily: "Ubuntu",
    color: "#fff",
  }
}));
