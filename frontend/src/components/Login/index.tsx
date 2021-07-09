import { useForm } from "../../hooks/useForm";

export default function Login() {
  // defining the initial state for the form
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = useForm(UserLogin, initialState);

  async function UserLogin() {
    // send "values" to database via API call
  }
  return (
    <main className="container-A">
      <form onSubmit={onSubmit}>
        <div>
          <input
            name="name"
            id="email"
            type="text"
            placeholder="Name"
            onChange={onChange}
            required
          />
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Email"
            onChange={onChange}
            required
          />

          <input
            name="password"
            id="password"
            type="text password"
            placeholder="Password"
            onChange={onChange}
            required
          />
          <div>
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
    </main>
  );
}
