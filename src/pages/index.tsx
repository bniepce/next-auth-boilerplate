import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <main>
        {session ? (
            <button onClick={() => signOut()}>Log out</button>
          ) : (
            <button
              onClick={() => {
                router.push("/api/auth/signin");
              }}
            >
              Sign in
            </button>
        )}
      </main>
    </>
  )
}
