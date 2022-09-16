import { GitHubContent } from "./types";

const baseUrl = "https://api.github.com/";
const orgPath = "orgs/";
const orgName = "rocketseat/";
const reposPath = "repos";

export function fetchData(): Promise<GitHubContent[]> {
    const url = baseUrl.concat(orgPath).concat(orgName).concat(reposPath);

    return fetch(url)
        .then(res => res.json())
        .then(res => res)
        .catch(() => null);
}