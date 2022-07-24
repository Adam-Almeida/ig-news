import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession, signOut } from "next-auth/react";

import styles from "./styles.module.scss";

export default function SigInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      type="button"
      className={styles.sigInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#5cfb6c" />
      {session.user?.name}
      <FiX className={styles.closeIcon} color="#737380" />
    </button>
  ) : (
    <button
      type="button"
      className={styles.sigInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#FD89BA" />
      Entrar com o Gihtub
    </button>
  );
}
