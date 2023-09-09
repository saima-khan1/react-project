import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

function ErrorPage() {
  const error = useRouteError;

  return (
    <>
      <NavBar />
      <h1>Oops</h1>
      <p>
        {isRouteErrorResponse(error)
          ? 'this page does not exist'
          : 'An unexpected error'}
      </p>
    </>
  );
}

export default ErrorPage;