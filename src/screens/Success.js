import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useStateMachine } from "little-state-machine";
import { reset } from '../actions/SignUpFlow';
import PageHeader from '../components/PageHeader';

const Success = () => {
  const navigate = useNavigate();
  const { actions } = useStateMachine({ reset });

  const restartFlow = () => {
    actions.reset();
    navigate('../');
  }

  return (
    <>
      <PageHeader title="Success!"/>
      <Container sx={{ margin: 2 }}>
        <CheckCircleIcon fontSize="large" color="success" />
        <Typography variant="body1">
          You should receive a confirmation email soon.
        </Typography>
      </Container>
      <Button variant="contained" color="success" onClick={restartFlow}>
        Restart
      </Button>
    </>
  );
};

export default Success;
