import { type UserData } from "../utils/props";

export function authVerify({ username, password }: UserData) {
  const usernamesEnv = import.meta.env.VITE_USERNAMES?.split(",") ?? [];
  const passwordsEnv = import.meta.env.VITE_PASSWORDS?.split(",") ?? [];
  
  const usernameOk = usernamesEnv.includes(username);
  const passwordOk = passwordsEnv.includes(password);

  let messageAllowed: string = '';

  if (usernameOk && passwordOk) {
    messageAllowed = 'Authorized user'
  } else {
    messageAllowed = 'Unauthorized user'
  }

  return messageAllowed;
}