import { useRef, useState } from "react";
import { authVerify } from "../utils/authVerify";
import { FormGroup } from "../components/FormGroup";
import { Eye, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { type UserData } from "../utils/props";

export const AuthPage = () => {
  const inputUserNameRef = useRef<HTMLInputElement | null>(null);
  const inputPasswordRef = useRef<HTMLInputElement | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const accountsAvailable = import.meta.env.VITE_USERNAMES?.split(",") ?? [];
  const navigate = useNavigate();

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const username = inputUserNameRef.current?.value;
    const password = inputPasswordRef.current?.value;

    const userData: UserData = {
      username: username || "",
      password: password || "",
    };

    const stateUser = authVerify(userData);
    localStorage.setItem("authStatus", stateUser);

    if (stateUser === "Authorized user") {
      navigate("/dashboard");
    } else {
      alert("Você não está autorizado a acessar o painel de administração!");
      inputUserNameRef.current!.value = "";
      inputPasswordRef.current!.value = "";
    }
  };

  return (
    <div className="w-full max-w-[500px]">
      <div className="dashboard">
        <h1 className="title">Login de Admin</h1>
        <p className="subtitle">
          Temos apenas {accountsAvailable?.length} contas de Admin
        </p>
        <form className="form" onSubmit={handleOnSubmit}>
          <FormGroup>
            <label htmlFor="inputUserName">Nome de usuário:</label>
            <input
              type="text"
              id="inputUserName"
              name="inputUserName"
              ref={inputUserNameRef}
              required
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="inputPassword">Digite a senha:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="inputPassword"
              name="inputPassword"
              ref={inputPasswordRef}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-10 text-white/60 hover:text-white transition"
            >
              {showPassword ? <EyeClosed /> : <Eye />}
            </button>
          </FormGroup>

          <button type="submit" className="btn-send">
            Logar
          </button>
        </form>
      </div>
    </div>
  );
};
