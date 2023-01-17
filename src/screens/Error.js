import { useNavigate } from 'react-router-dom';
import {
  Button
} from '@mui/material';
import { useStateMachine } from "little-state-machine";
import { reset } from '../actions/SignUpFlow';
import PageHeader from '../components/PageHeader';

const Error = () => {
  const navigate = useNavigate();
  const { actions } = useStateMachine({ reset });

  const restartFlow = () => {
    actions.reset();
    navigate('../');
  }

  return (
    <>
      <PageHeader title="Error"/>
      <p>Uh oh, something went wrong. Please try again later.</p>
      <Button variant="contained" color="success" onClick={restartFlow}>
        Restart
      </Button>
    </>
  );
};

export default Error;
