import { Box } from "@mui/material";

const Resume = () => {
  return (
    <Box sx={{ minWidth: 275, minHeight: 600 }}>
      <object
        data="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="1200"
      >
        <p>
          Link
          <a href="/resume.pdf">to the PDF!</a>
        </p>
      </object>
    </Box>
  );
};
export default Resume;
