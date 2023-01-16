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
} from "@mui/material";
import updateAction from "../../actions/updateAction";
import withRouter from '../../utils/withRouter';

// TODO: Define prop types for the colors prop

const MoreInfo = props => {
  const { colors } = props;
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = data => {
    actions.updateAction(data);
    props.history.push("../../screens/Confirmation");
  };

  const renderColorSelect = () => colors.map((color, index) => 
    <MenuItem key={index} value={color}>
      {color}
    </MenuItem>
  );

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
            value={age}
            label="Age"
            onChange={handleChange}
            {...register("color")} 
          >
            {renderColorSelect()}
          </Select>
        </FormControl>
        <FormGroup>
          <FormControlLabel control={<Checkbox {...register("terms")}  />} label={`I agree to the ${<a>terms and conditions</a>}`} />
        </FormGroup>

        <Button variant="contained" color="success" type="submit">
          Success
        </Button>
      </Box>
    </form>
  );
};

export default withRouter(MoreInfo);
