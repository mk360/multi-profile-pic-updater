import { GitlabUser } from "../interfaces/gitlab";

export default class RestClient {
    static async getGitlabAccount() {
        const response = await fetch('/api/gitlab-account');
        const json: GitlabUser = await response.json();
        return json;
    }
}
