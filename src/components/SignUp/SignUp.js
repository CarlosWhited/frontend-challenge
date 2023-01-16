import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import {
  TextField,
  Button,
  Box,
} from "@mui/material";
import updateAction from "../../actions/updateAction";
import withRouter from '../../utils/withRouter';

const SignUp = props => {
  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = data => {
    actions.updateAction(data);
    props.history.push("../../screens/MoreInfo");
  };

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
        <TextField
          required
          id="first-name"
          label="First Name"
          {...register("name")} 
        />
        <TextField
          required
          id="email"
          label="E-mail"
          {...register("email")} 
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          {...register("password")} 
        />
        <Button variant="contained" color="success" type="submit">
          Next
        </Button>
      </Box>
    </form>
  );
};

export default withRouter(SignUp);
