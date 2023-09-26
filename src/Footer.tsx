import { AppBar, Container, Toolbar, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            HAYES ASHBY
          </Typography> */}
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              const url = "https://www.linkedin.com/in/hayes-ashby-55250b163/";
              window.location.replace(url);
            }}
            color="inherit"
          >
            <LinkedInIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          </IconButton>
          <IconButton
            sx={{ ml: 1 }}
            onClick={() => {
              const url = "https://github.com/hayesashby";
              window.location.replace(url);
            }}
            color="inherit"
          >
            <GitHubIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          </IconButton>
          <IconButton
            sx={{ ml: 1 }}
            href="mailto:hayesashby@gmail.com"
            color="inherit"
          >
            <EmailIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Footer;
