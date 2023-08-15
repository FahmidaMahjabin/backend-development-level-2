import { useReducer } from "react";

export default function Form() {
  const initialState = {
    userName: "",
    email: "",
    contactNo: "",
    address: "",
    password: "",
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reducer = (state: any, action: any) => {
    if (action.type === "input") {
      return { ...state, [action.payload.name]: action.payload.value };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("state:", state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          onChange={(e) =>
            dispatch({
              type: "input",
              payload: {
                name: e.target.name,
                value: e.target.value,
              },
            })
          }
        />
      </label>

      <label>
        email:
        <input
          type="text"
          name="email"
          onChange={(e) =>
            dispatch({
              type: "input",
              payload: {
                name: e.target.name,
                value: e.target.value,
              },
            })
          }
        />
      </label>

      <label>
        address:
        <input
          type="text"
          name="address"
          onChange={(e) =>
            dispatch({
              type: "input",
              payload: {
                name: e.target.name,
                value: e.target.value,
              },
            })
          }
        />
      </label>

      <label>
        contactNo:
        <input
          type="text"
          name="contactNo"
          onChange={(e) =>
            dispatch({
              type: "input",
              payload: {
                name: e.target.name,
                value: e.target.value,
              },
            })
          }
        />
      </label>

      <label>
        password:
        <input
          type="password"
          name="password"
          onChange={(e) =>
            dispatch({
              type: "input",
              payload: {
                name: e.target.name,
                value: e.target.value,
              },
            })
          }
        />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}
