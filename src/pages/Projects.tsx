import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography
} from "@mui/material";

const Projects = () => {
  return (
    <Box sx={{ bgcolor: "grey", minHeight: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Stack>
          <Card sx={{ maxWidth: 1200 }}>
            <CardHeader title="Benchmark" />
            <CardContent>
              <Typography>
                Icon built custom embedded tablets for use in their exercise
                equipment. There were many different versions of hardware and
                software making debugging and performance monitoring diﬀicult.
                Bench- mark aimed to solve this problem by communicating over
                the Android Debugging Bridge. This allowed the use of popular
                apps for testing purposes like Antutu to be automated and ran in
                a controlled envi- ronment through logged versioning of the
                tablet with optimal consistency.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 1200 }}>
            <CardHeader title="Network Testing Suite" />

            <CardContent>
              <Typography>
                NTS is a project designed to unravel the layers of communication
                protocols to detect network problems. Through packet monitoring
                and other methods it was able to follow the entire digital trail
                end to end to determine where the failure occurs.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 1200 }}>
            <CardHeader title="UITest" />

            <CardContent>
              <Typography>
                A proprietary testing framework used to make it easy to write
                e2e user tests. Built on top of Xamarin UITest the framework is
                flexible enough to run against the wide array of mobile devices
                available today, stable enough to have a test library in the
                tens of thousands, and has been executed in the millions.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 1200 }}>
            <CardHeader title="Testr" />

            <CardContent>
              <Typography>
                A distributed system involving a hub deploying jobs to be ran by
                external computers and reported in an asynchronous function.
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </div>
    </Box>
  );
};
export default Projects;
