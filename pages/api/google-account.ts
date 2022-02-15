import { NextApiResponse } from "next";
import { google } from 'googleapis';

async function getGoogleAccount(_: any, res: NextApiResponse<{ url: string }>) {
    const oauthClient = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID!,
        process.env.GOOGLE_CLIENT_SECRET!,
        process.env.GOOGLE_REDIRECT_URL!
    );

    const scope = 'https://www.googleapis.com/auth/userinfo.profile';

    const url = oauthClient.generateAuthUrl({ scope });

    res.status(200).json({ url });
};

export default getGoogleAccount;
