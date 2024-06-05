import {db} from "@repo/db/client"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

export const authOptions ={
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            tagname: { label: 'tagname', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials: any) {

            try {
                const user = await db.user.create({
                    data: {
                        tagname: credentials.tagname,
                        password: credentials.password
                    }
                });
                return {
                    id:user.id
                }
                
            } catch(e) {
                console.error(e);
            }
            return null
          },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async session({token,session}:any){
            session.user.id = token.sub

            return session

        }
    }
  }