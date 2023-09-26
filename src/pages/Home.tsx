import { Box, Card, CardContent, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ bgcolor: "grey" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 1200, m: 4 }}>
          <CardContent>
            <Typography paragraph={true}>
              &nbsp;&nbsp;&nbsp;&nbsp;Hello and welcome to my website! My name
              is Hayes Ashby, and I am a passionate Software Engineer. I have
              dedicated myself to building software applications, and I am
              excited to share my knowledge and experiences with you.
            </Typography>
            <Typography paragraph={true}>
              &nbsp;&nbsp;&nbsp;&nbsp;I have always been captivated by
              programming. From a young age, I found myself intrigued by how
              creative you can be in software as well as how limitless code can
              affect the world we know. This curiosity led me to pursue a career
              in software engineering, where I have gained valuable insights and
              honed my skills over the years.
            </Typography>
            <Typography paragraph={true}>
              &nbsp;&nbsp;&nbsp;&nbsp;Throughout my journey, I have had the
              privilege of working on various projects and endeavors that have
              challenged me and expanded my horizons. These experiences have not
              only deepened my understanding of software engineering, but they
              have also taught me the importance of key values or principles,
              such as innovation, collaboration, architecture, and continuous
              learning.
            </Typography>
            <Typography paragraph={true}>
              &nbsp;&nbsp;&nbsp;&nbsp;As a Software Engineer, my primary goal is
              to develop with purpose. I strive to feel like I am making a
              difference in the world. I firmly believe in the power of software
              engineering to benefit and transform society, and I am committed
              to leveraging my skills to contribute to this endeavor.
            </Typography>
            <Typography paragraph={true}>
              &nbsp;&nbsp;&nbsp;&nbsp;In addition to my professional pursuits, I
              am an avid gamer, I enjoy skiing, love boating, and hanging out by
              a campfire. They provide me with a fresh perspective, fuel my
              creativity, and remind me of the importance of balance and
              well-being.
            </Typography>
            {/* <Typography paragraph={true}>
      &nbsp;&nbsp;&nbsp;&nbsp;I created this website as a platform to
      share my expertise to those in need. Here, you will find [describe the content or
      topics covered on the website]. My goal is to [describe the value or
      benefits visitors can expect from your website]. Whether you are a
      [target audience], a fellow [profession/occupation], or simply someone
      interested in software engineering, I hope that you will find inspiration,
      knowledge, and useful resources here.
    </Typography> */}
            <Typography paragraph={true}>
              &nbsp;&nbsp;&nbsp;&nbsp;Thank you for visiting my website, and I
              encourage you to explore the content and engage with me through
              LinkedIn. I look forward to connecting with you and being a part
              of your journey in software engineering!
            </Typography>
            <Typography paragraph={true}>Warm regards,</Typography>
            <Typography paragraph={true}>Hayes Ashby</Typography>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
};
export default Home;
