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
  color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  padding: "4% 0 4% 0",
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