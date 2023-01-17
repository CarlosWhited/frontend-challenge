import { useNavigate } from 'react-router-dom';
import {
  Button
} from '@mui/material';
import { useStateMachine } from "little-state-machine";
import { reset } from '../actions/SignUpFlow';

const Error = () => {
  const navigate = useNavigate();
  const { actions } = useStateMachine({ reset });

  const restartFlow = () => {
    actions.reset();
    navigate('../');
  }

  return (
    <>
      <h1>Error</h1>
      <p>Uh oh, something went wrong. Please try again later.</p>
      <Button variant="contained" color="success" onClick={restartFlow}>
        Restart
      </Button>
    </>
  );
};

export default Error;
