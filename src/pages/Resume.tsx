import { Card } from "@mui/material";

const Resume = () => {
  return (
    <Card sx={{ minWidth: 275, minHeight: 600 }}>
      <object
        data="./resume.pdf"
        type="application/pdf"
        width="100%"
        height="1200"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="./resume.pdf">to the PDF!</a>
        </p>
      </object>
    </Card>
  );
};
export default Resume;
