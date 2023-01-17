import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import {
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { update } from "../../actions/SignUpFlow";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ update });
  const navigate = useNavigate();

  const onSubmit = data => {
    actions.update(data);
    navigate('more-info');
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
          // value={state.name}
          {...register("name")} 
        />
        <TextField
          required
          id="email"
          label="E-mail"
          // value={state.email}
          {...register("email")} 
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          // value={state.password}
          {...register("password")} 
        />
        <Button variant="contained" color="success" type="submit">
          Next
        </Button>
      </Box>
    </form>
  );
};

export default SignUp;
