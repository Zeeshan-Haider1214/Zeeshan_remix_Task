import { Link } from "@remix-run/react";
import mainstyle from "~/styles/LoginForm.css";

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>try early beta and never loose trick of your notes again!</p>
      <p id="cta">
        <Link to="/login">try notes!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: mainstyle }]
}
