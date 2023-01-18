import {
  Typography,
  Box,
} from "@mui/material";

const PageHeader = (props) => {
  const { title } = props;

  return (
    <Box sx={{ pb: 2, pt: 4 }}>
      <Typography align="center" variant="h5" fontWeight={'bold'}>{title}</Typography>
    </Box>
  );
};

export default PageHeader;
