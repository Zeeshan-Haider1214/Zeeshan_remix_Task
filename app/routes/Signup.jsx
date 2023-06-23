import { userLoginAuth } from "~/data/signup.server";
import UserloginForm from "~/components/Signup";
import Loginstyle from "~/styles/LoginForm.css";
import { redirect } from '@remix-run/node';

export default function AuthPage() {
  return <UserloginForm />
}

export async function action({ request }) {
  const formData = await request.formData();
  const loginEntries = Object.fromEntries(formData);
  const loginAuth = await userLoginAuth(loginEntries);
  console.log("login sdsa ", loginAuth);
  return redirect('/userdetail');
}

export function links() {
  return [{ rel: 'stylesheet', href: Loginstyle }]
}