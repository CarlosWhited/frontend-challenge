import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
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
import * as yup from "yup";
import { update} from "../../actions/SignUpFlow";
import useYupValidationResolver from "../../hooks/useYupValidationResolver";

const validationSchema = yup.object({
  color: yup.string().required("Required"),
  terms: yup.bool().oneOf([true], 'Terms and conditions must be agreed'),
});

const propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const MoreInfo = (props) => {
  const { colors } = props;
  const resolver = useYupValidationResolver(validationSchema);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver });
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
    <span>I agree to the <a href="https://xkcd.com/1998/" target="_blank">terms and conditions</a></span>
  </>;

  const renderHelperText = (errorMessage) => { 
    const helperText = errorMessage ? <FormHelperText id="component-helper-text" error>
      {errorMessage}
    </FormHelperText> : null;

    return helperText;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        component="form"
      >
        <Container>
          <FormControl 
            sx={{ width: 1, mt: 2, mb: 1 }}
            error={!!errors.color}
            aria-invalid={errors.color ? 'true' : 'false'}
          >
            <InputLabel id="color-select-label">Select your favorite color</InputLabel>
            <Select
              labelId="color-select-label"
              id="color-select"
              label="What is your favorite color?"
              defaultValue={state.color}
              {...register("color")}
            >
              {renderColorSelect()}
            </Select>
            {renderHelperText(errors.color?.message)}
          </FormControl>
        </Container>
        <Container>
          <FormGroup 
            sx={{ width: 1, mt: 1, mb: 2 }}
            error={errors.terms ? true : undefined}
            aria-invalid={errors.terms ? 'true' : 'false'}
          >
            <FormControlLabel control={<Checkbox {...register("terms")} />} label={renderTermsLink()} />
            {renderHelperText(errors.terms?.message)}
          </FormGroup>
        </Container>

        <Container>
          <Button variant="contained" color="success" onClick={navBack} sx={{ mr: 1 }}>
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
