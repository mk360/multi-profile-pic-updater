import { NextApiRequest, NextApiResponse } from "next";
import { GitlabUser } from "../../interfaces/gitlab";
import getProcessVariables from "../../utils/getProcessVariables";

async function getGitlabAccount(req: NextApiRequest, res: NextApiResponse<GitlabUser | null>) {
    const variables = getProcessVariables();
    const headers = new Headers();
    headers.append('PRIVATE-TOKEN', variables.personalToken);
    headers.append('Accept', '*/*');
    headers.append('User-Agent', 'curl/7.79.1');

    const response = await fetch(`${process.env.GITLAB_SERVER_URL}/api/v4/users?username=${variables.username}`, {
        headers,
        method: 'GET',
    });

    const userList: GitlabUser[] = await response.json();

    if (userList.length) {
        res.status(200).json(userList[0]);
    } else {
        res.status(404).json(null);
    }

};

export default getGitlabAccount;
