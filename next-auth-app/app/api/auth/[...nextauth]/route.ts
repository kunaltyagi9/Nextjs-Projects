import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from 'bcrypt';
import NextAuth from "next-auth/next";

export const authOptions : AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username",
                    type: "text",
                    placeholder: "Enter your username"
                },
                password: {
                    label: "Password",
                    placeholder: "Enter your password"
                }
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.username
                    }
                })

                if (!user) throw new Error("Username or password is incorrect");

                if (!credentials?.password) throw new Error("Please provide your password");
                
                const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);

                if (!isCorrectPassword) {
                    throw new Error("Username or password is incorrect");
                }

                const { password, ...userWithoutPass } = user;

                return userWithoutPass;
            }
        })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };