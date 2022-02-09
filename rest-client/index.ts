export default class RestClient {
    static a() {
        fetch('/api/gitlab-account').then(j => j.json()).then(console.log);
    }
}
