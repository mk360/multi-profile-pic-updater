import { NextApiResponse } from "next";
import oauth2Client from "../../utils/oauth-client";

async function getGoogleAccount(_: any, res: NextApiResponse<{ url: string }>) {
    const scope = 'https://www.googleapis.com/auth/userinfo.profile';

    const url = oauth2Client.generateAuthUrl({ scope });

    res.status(200).json({ url });
};

export default getGoogleAccount;
