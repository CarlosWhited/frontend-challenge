import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  Box,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { update} from "../../actions/SignUpFlow";

// TODO: Define prop types for the colors prop
const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const MoreInfo = (props) => {
  const { colors } = props;
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ update });
  const navigate = useNavigate();

  const onSubmit = data => {
    actions.update(data);
    navigate("../confirmation");
  };

  const navBack = () => navigate(-1);

  const renderColorSelect = () => colors.map((color, index) => 
    <MenuItem key={index} value={color}>
      {color}
    </MenuItem>
  );

  const renderTermsLink = () => <>
    <span>I agree to the <a href="https://www.google.com" target="_blank">terms and conditions</a></span>
  </>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select your favorite color</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="What is your favorite color?"
            // value={state.color}
            {...register("color")}
          >
            {renderColorSelect()}
          </Select>
        </FormControl>
        <FormGroup>
          <FormControlLabel control={<Checkbox {...register("terms")} />} label={renderTermsLink()} />
        </FormGroup>

        <Button variant="contained" color="primary" onClick={navBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Next
        </Button>
      </Box>
    </form>
  );
};

MoreInfo.propTypes = propTypes;

export default MoreInfo;
