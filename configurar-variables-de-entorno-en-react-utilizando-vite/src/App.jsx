import { getEnvironments } from "./helpers/getEnvironments";

const { lastname, name, secret_password } = getEnvironments();

export const App = () => {
  return (
    <div>
      <p>
        user: {name} {lastname}
      </p>
      <p>password: {secret_password}</p>
    </div>
  );
};
