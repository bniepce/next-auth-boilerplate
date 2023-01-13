// next auth
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
// axios
import httpClient from "utils/httpClient";
// jwt
import jwt from 'jwt-decode';

export default NextAuth({
    providers: [
        CredentialProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "coucou@coucou.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            const {data:response} = await httpClient.post(process.env.NEXT_API_URL + 'auth/login', {
                email: credentials?.email,
                password: credentials?.password
            })
            const decoded_token:object = jwt(response.token)
            const user = {
                ...decoded_token,
                access_token: response.token
            };
            if (user) {
              return user;
            } else {
              return null;
            }
          },
        })
    ],
    callbacks: {
        jwt: ({ token, user }) => {
          if (user) {
            token.user = user
          }
          return token;
        },
        session: ({ session, token }) => {
          if (token) {
            session.user = token.user;
          }
          return session;
        },
      },
});
