import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorWarning = () => (
  <>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
  </>
);

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error))
    return (
      <div id="error-page">
        <ErrorWarning />
        <p>
          {error.status} {error.statusText}
        </p>
      </div>
    );

  return (
    <div id="error-page">
      <ErrorWarning />
      <p>Unknown Error</p>
    </div>
  );
};
