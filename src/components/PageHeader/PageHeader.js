import {
  Typography,
  Box,
} from "@mui/material";

const PageHeader = (props) => {
  const { title } = props;

  return (
    <Box sx={{ 
      padding: 2,
     }}>
      <Typography align="center" variant="h5" fontWeight={'bold'}>{title}</Typography>
    </Box>
  );
};

export default PageHeader;
