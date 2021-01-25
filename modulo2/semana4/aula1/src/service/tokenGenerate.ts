import * as jwt from "jsonwebtoken";

const expiresIn = 60;
export function generateToken(input: AuthenticationData): string {

    const token: string = jwt.sign(
        {
        id: input.id,
        },
         process.env.JWT_KEY as string,
         {expiresIn});

    return token;
}


export function getTokenData(token: string): AuthenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY!);
    return payload as AuthenticationData;
}


export type AuthenticationData = {
    id: string
}



