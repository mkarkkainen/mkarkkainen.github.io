import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: "#121212",
    flexGrow: 1,
    paddingLeft: "8%",
    paddingRight: "8%"
  },
  paper: {
    boxShadow: "none",
    textAlign: 'center',
    color: "#f2f2f2",
    backgroundColor: "transparent",
  },
  items: {
      fontSize: "8em",
      color: "#f2f2f2",
      backgroundColor: "transparent",
      boxShadow: "none",
  }

}));