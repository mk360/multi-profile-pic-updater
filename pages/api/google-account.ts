import { NextApiResponse } from "next";
import getQueryString from "../../utils/getQueryString";

async function getGoogleAccount(_: any, res: NextApiResponse<{ url: string }>) {
    const queryString = getQueryString({
        'client_id': process.env.GOOGLE_CLIENT_ID!,
        'client_secret': process.env.GOOGLE_CLIENT_SECRET!,
        'redirect_uri': 'http://localhost:3000',
        'scope': 'https://www.googleapis.com/auth/userinfo.profile',
        'response_type': 'token'
    });
    fetch(`https://accounts.google.com/o/oauth2/v2/auth?${queryString}`, {
        method: 'GET'
    }).then(r => {
        console.log(r.url);
        res.status(200).json({ url: r.url });
    });
};

export default getGoogleAccount;
