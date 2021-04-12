import { makeStyles } from "@material-ui/core/styles";
import profile from "../../assets/images/me3.jpg";

export default makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginBottom: "5%",
  },
  image: {
    backgroundImage: `url(${profile})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100vh",
  },
  socials: {
    margin: "8px",
    color: "black",
  },
  mid: {
    margin: "8px",
  },
  buttons: {
    marginTop: "4%",
    marginLeft: "1%",
    color: "black",
    border: "2px solid black",
  },
  name: {
    width: "30%",
  },
  machetes: {
    width: "100px",
    height: "100px",
  },
}));
