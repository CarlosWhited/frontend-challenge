import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import {
  TextField,
  Button,
  Box,
  Container,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { update } from "../../actions/SignUpFlow";
import useYupValidationResolver from "../../hooks/useYupValidationResolver";

const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email().required("Required"),
  password: yup.string().required("Required"),
});

const SignUp = () => {
  const resolver = useYupValidationResolver(validationSchema);
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver });
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
      >
        <Container>
          <TextField
            required
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
            id="first-name"
            label="First Name"
            sx={{
              width: 1,
              margin: 2,
            }}
            aria-invalid={errors.name ? 'true' : 'false'}
            defaultValue={state.name}
            {...register("name")} 
          />
        </Container>
        <Container>
          <TextField
            required
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ''}
            id="email"
            label="E-mail"
            sx={{
              width: 1,
              margin: 2,
            }}
            aria-invalid={errors.email ? 'true' : 'false'}
            defaultValue={state.email}
            {...register("email")} 
          />
        </Container>
        <Container>
          <TextField
            required
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
            id="password"
            label="Password"
            type="password"
            sx={{
              width: 1,
              margin: 2,
            }}
            aria-invalid={errors.password ? 'true' : 'false'}
            defaultValue={state.password}
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
