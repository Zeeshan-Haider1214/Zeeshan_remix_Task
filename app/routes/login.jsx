import Signup from "../components/UserloginForm";
import Loginstyle from "~/styles/LoginForm.css";
import { addUser } from "../data/signup.server";

// yah sign up screen hai........

export default function AuthPage() {
  return <Signup />
}

export async function action({ request }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);
  console.log(userData, formData);

  await addUser(userData);
  return null;


}

export function links() {
  return [{ rel: 'stylesheet', href: Loginstyle }]
}