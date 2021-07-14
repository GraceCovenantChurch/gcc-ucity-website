import { makeStyles } from "@material-ui/core/styles";

export const servicesStyles = makeStyles((theme) => ({
  container: {
    padding: "5rem 2vw",
  },
  subtitle: {
    fontFamily: "Lora,sans-serif",
    fontSize: "18px",
    fontStyle: "italic",
    color: "gray",
    textAlign: "center",
    padding: 20,
  },
  linkContainer: {
    textAlign: "center",
    padding: 20,
  },
  learnMore: {
    fontFamily: "Lora,sans-serif",
    fontSize: "18px",
    fontStyle: "italic",
    color: "gray",
    textDecoration: "none",
  },
}));
