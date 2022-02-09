function getProcessVariables() {
    return {
        username: process.env.GITLAB_USERNAME!,
        serverUrl: process.env.SERVER_URL!,
        personalToken: process.env.GITLAB_PERSONAL_TOKEN!,
    };
};

export default getProcessVariables;
