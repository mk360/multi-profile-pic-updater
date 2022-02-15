import { GitlabUser } from "../interfaces/gitlab";

export default class RestClient {
    static async getGitlabAccount() {
        const response = await fetch('/api/gitlab-account');
        const json: GitlabUser = await response.json();
        return json;
    }

    static async loginToGoogle() {
        const response = await fetch('/api/google-account');
        const jsonUrl: {url: string } = await response.json();
        window.location.href = jsonUrl.url;
    };
}
