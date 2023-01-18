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
      <Container>
        <CheckCircleIcon fontSize="large" color="success" />
      </Container>
      <Container>
        <Typography variant="body1" align='center'>
          You should receive a confirmation email soon.
        </Typography>
      </Container>
      <Container sx={{ paddingTop: 4 }}>
        <Button variant="contained" color="success" onClick={restartFlow}>
          Restart
        </Button>
      </Container>
    </>
  );
};

export default Success;
