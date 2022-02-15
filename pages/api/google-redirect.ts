import { NextApiRequest, NextApiResponse } from "next";
import oauth2Client from "../../utils/oauth-client";
import { google, people_v1 } from "googleapis";

async function GoogleOAuth(req: NextApiRequest, res: NextApiResponse) {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code.toString());
    oauth2Client.setCredentials(tokens);
    const { data } = await google.people('v1').people.get({
        auth: oauth2Client,
        resourceName: 'people/me',
        personFields: 'names,photos',
    });

    const names = data.names as people_v1.Schema$Name[];
    const firstEntry = names[0];
    const [firstPhoto] = data.photos as people_v1.Schema$Photo[];

    const { displayName, metadata } = firstEntry;
    const id = metadata?.source?.id;
    const photoUrl = firstPhoto.url;

    res.redirect(301, '/');
};

export default GoogleOAuth;
