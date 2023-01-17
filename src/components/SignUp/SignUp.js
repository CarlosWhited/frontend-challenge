import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import {
  TextField,
  Button,
  Box,
  Container,
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
        noValidate
        autoComplete="off"
      >
        <Container>
          <TextField
            required
            id="first-name"
            label="First Name"
            sx={{
              width: 1,
              margin: 2,
            }}
            // value={state.name}
            {...register("name")} 
          />
        </Container>
        <Container>
          <TextField
            required
            id="email"
            label="E-mail"
            sx={{
              width: 1,
              margin: 2,
            }}
            // value={state.email}
            {...register("email")} 
          />
        </Container>
        <Container>
          <TextField
            id="password"
            label="Password"
            type="password"
            sx={{
              width: 1,
              margin: 2,
            }}
            // value={state.password}
            {...register("password")} 
          />
        </Container>
        <Container>
          <Button variant="contained" color="success" type="submit" sx={{ margin: 2 }}>
            Next
          </Button>
        </Container>
      </Box>
    </form>
  );
};

export default SignUp;
