import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: "#EAEAEA",
    flexGrow: 1,
    paddingLeft: "8%",
    paddingRight: "8%"
  },
  title: {
  textAlign: "center",
  color: "#353535",
  padding: "8% 0 8% 0",
  },
  paper: {
    boxShadow: "none",
    textAlign: 'center',
    color: "#A2A2A2",
    backgroundColor: "transparent",
  },
  items: {
      fontSize: "8em",
      color: "#353535",
      backgroundColor: "transparent",
      boxShadow: "none",
  }
}));