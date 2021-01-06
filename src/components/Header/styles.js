import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({

  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
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

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  grow: {
    flexGrow: 1,
  },

  link: {
    fontFamily: "Ubuntu",
    color: "#fff",
  }
}));
