import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  submit: PropTypes.func.isRequired,
};

const Confirmation = (props) => {
  const { submit } = props;
  const { handleSubmit } = useForm();
  const { state } = useStateMachine();
  const navigate = useNavigate();

  const navBack = () => navigate(-1);

  const onSubmit = () => {
    submit(state);
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
        <List>
          <ListItem disablePadding>
            <ListItemText primary={`First Name: ${state.name}`} />
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemText primary={`Email: ${state.email}`} />
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemText primary={`Password: ******`} />
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemText primary={`Favorite Color: ${state.color}`} />
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemText primary={`Terms and Conditions: ${state.terms ? 'Agreed' : 'Not Agreed'}`} />
          </ListItem>
        </List>

        <Button variant="contained" color="primary" onClick={navBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

Confirmation.propTypes = propTypes;

export default Confirmation;
