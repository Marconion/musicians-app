"use client";
import { useReducer } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import LogoBtn from "./components/LogoBtn";
// import Select from "react-select";
import MultiSelectField from "@/components/MultiSelectField";

const options = [
  {
    value: "pevač",
    label: "Pevač",
  },
  {
    value: "pevačica",
    label: "Pevačica",
  },
  {
    value: "klavijaturista",
    label: "Klavijaturista",
  },
  {
    value: "bubnjar",
    label: "Bubnjar",
  },
  {
    value: "gitarista",
    label: "Gitarista",
  },
  {
    value: "harmonikaš",
    label: "Harmonikaš",
  },
  {
    value: "violinista",
    label: "Violinista",
  },
  {
    value: "saksofonista",
    label: "Saksofonista",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "confirm_password":
      return { ...state, confirm_password: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "position":
      return { ...state, position: action.payload };
    default:
      return state;
  }
}

export default function RegistracijaPage() {
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    password: "",
    // confirm_password: "",
    email: "",
    phone: "",
    position: "",
  });

  const router = useRouter();

  async function handleRegister(e) {
    e.preventDefault();
    console.log("submit");
    console.log(state);
    const registerInfo = {
      username: state.username,
      password: state.password,
      email: state.email,
      phone: state.phone,
      position: state.position,
    };

    try {
      const register = await fetch("http://localhost:1337/api/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerInfo),
      });

      if (!register.ok) {
        const errorData = await register.json();
        console.error("Error:", errorData);
        return;
      }

      const registerResponse = await register.json();
      console.log(registerResponse);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  function fetchRegister() {
    fetch("http://localhost:1337/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: state.username,
        password: state.password,
        confirm_password: state.confirm_password,
        email: state.email,
        phone: state.phone,
        position: state.position,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/");
      });
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}>
      <main className="flex flex-col items-center justify-center p-4 mb-12 drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
        <h1 className="text-4xl mt-8">Registracija</h1>
        <LogoBtn />

        {/* REGISTRATION FORM */}
        <form
          onSubmit={handleRegister}
          className="flex flex-col items-left gap-3 justify-center">
          <div className="grid grid-cols-2">
            <label htmlFor="username">Korisničko ime</label>
            <input
              type="text"
              id="username"
              placeholder="Unesi korisničko ime"
              value={state.username}
              // required
              className="w-40 h-7 p-2 rounded-sm text-black"
              onChange={(e) => {
                dispatch({ type: "username", payload: e.target.value });
              }}></input>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="password">Lozinka</label>
            <input
              type="password"
              id="password"
              placeholder="Unesi lozinku"
              value={state.password}
              // required
              className="w-40 h-7 p-2 rounded-sm text-black"
              onChange={(e) => {
                dispatch({ type: "password", payload: e.target.value });
              }}></input>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="confirm_password">Potvrdi lozinku</label>
            <input
              type="password"
              id="confirm_password"
              placeholder="Potvrdi lozinku"
              value={state.confirm_password}
              // required
              className="w-40 h-7 p-2 rounded-sm text-black"
              onChange={(e) => {
                dispatch({ type: "confirm_password", payload: e.target.value });
              }}></input>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              placeholder="Unesi e-mail"
              value={state.email}
              // required
              className="w-40 h-7 p-2 rounded-sm text-black"
              onChange={(e) => {
                dispatch({ type: "email", payload: e.target.value });
              }}></input>
          </div>
          <div className="grid grid-cols-2">
            <label htmlFor="phone">Broj telefona</label>
            <input
              type="number"
              id="phone"
              placeholder="Unesi broj telefona"
              value={state.phone}
              // required
              className="w-40 h-7 p-2 rounded-sm text-black"
              onChange={(e) => {
                dispatch({ type: "phone", payload: e.target.value });
              }}></input>
          </div>

          <div className="grid grid-cols-2">
            <label htmlFor="position">Pozicija</label>
            <MultiSelectField
              className={"w-40"}
              onChange={(selectedOption) => {
                dispatch({ type: "position", payload: selectedOption.value });
              }}
            />
            {/* <Select
              // instanceId="unique-instance-id"
              options={options}
              id="position"
              // value={position}
              className="w-40 h-4 rounded-sm text-black"
              onChange={(selectedOption) => {
                dispatch({ type: "position", payload: selectedOption.value });
              }}
            /> */}
          </div>

          {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" className="text-white">
              Pozicija
            </InputLabel>
            <Select
              className="text-white border-white"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={null}
              label="Age"
              onChange={(e) => {
                dispatch({ type: "phone", payload: e.target.value });
              }}>
              <MenuItem value={"pevač"}>Pevač</MenuItem>
              <MenuItem value={"pevačica"}>Pevačica</MenuItem>
              <MenuItem value={"klavijaturista"}>Klavijaturista</MenuItem>
              <MenuItem value={"bubnjar"}>Bubnjar</MenuItem>
              <MenuItem value={"gitarista"}>Gitarista</MenuItem>
              <MenuItem value={"harmonikaš"}>Harmonikaš</MenuItem>
              <MenuItem value={"violinista"}>Violinista</MenuItem>
              <MenuItem value={"saksofonista"}>Saksofonista</MenuItem>
            </Select>
          </FormControl> */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="bg-blue-500 border-2 rounded-md p-2 m-8">
            Registruj se
          </motion.button>
          <div className="flex flex-col items-center">
            <p>* bićete preusmereni na stranicu za logovanje</p>
          </div>
        </form>
      </main>
    </motion.div>
  );
}
