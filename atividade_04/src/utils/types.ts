export type GitHubContent = {
    name: string;
    description: string;
    html_url: string;
}

export interface ItemProps {
    gitHubItem: GitHubContent;
}