import { Linking } from "react-native";
import { ItemProps } from "../../utils/types";
import { Container, ExternalLink, TextContent, TextLabel } from "./style";

export default function Item({ gitHubItem }: ItemProps) {
    function openLink(url: string) {
        Linking.canOpenURL(url).then(() => {
            Linking.openURL(url);
        })
    }

    return (
        <Container>
            <TextLabel>
                Repo Name:
            </TextLabel>
            <TextContent>
                {gitHubItem.name}
            </TextContent>
            <TextLabel>
                Descrição:
            </TextLabel>
            <TextContent>
                {gitHubItem.description}
            </TextContent>
            <TextLabel>
                Repo link:
            </TextLabel>
            <ExternalLink onPress={() => openLink(gitHubItem.html_url)}>
                <TextContent>
                    {gitHubItem.html_url}
                </TextContent>
            </ExternalLink>
        </Container>
    );
}