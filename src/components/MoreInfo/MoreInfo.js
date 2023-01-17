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
  Container,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { update} from "../../actions/SignUpFlow";

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
        noValidate
        autoComplete="off"
      >
        <Container>
          <FormControl sx={{ width: 1, margin: 2 }}>
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
        </Container>
        <Container>
          <FormGroup sx={{ width: 1, margin: 2 }}>
            <FormControlLabel control={<Checkbox {...register("terms")} />} label={renderTermsLink()} />
          </FormGroup>
        </Container>

        <Container>
          <Button variant="contained" color="success" onClick={navBack} sx={{ mr: 1, ml: 2 }}>
            Back
          </Button>
          <Button variant="contained" color="success" type="submit" sx={{ ml: 1 }}>
            Next
          </Button>
        </Container>
      </Box>
    </form>
  );
};

MoreInfo.propTypes = propTypes;

export default MoreInfo;
