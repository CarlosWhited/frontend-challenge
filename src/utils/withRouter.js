// Pulled from https://reactrouter.com/en/main/start/faq#what-happened-to-withrouter-i-need-it
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

export default function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}