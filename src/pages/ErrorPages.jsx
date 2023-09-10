import { useRouteError } from "react-router-dom";
import "../css/all.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" style={{ textAlign: "center", margin: "20%" }}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
