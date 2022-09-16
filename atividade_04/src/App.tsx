import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import Header from './components/Header';

import Item from './components/Item';
import { GitHubContent } from './utils/types';
import { fetchData } from './utils/utils';

export default function App() {
    const [gitHubContent, setGitHubContent] = useState<GitHubContent[]>();

    useEffect(() => {
        fetchData().then(res => {
            if (res == null) {
                Alert.alert("Erro ao buscar informações dos repositórios!😰");

                return;
            }

            setGitHubContent(res);
        })
    }, []);

    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Header />
                <View>
                    {gitHubContent ?
                        gitHubContent.map(element => (
                            <Item key={element.name} gitHubItem={element} />
                        ))
                        :
                        <Text>
                            Carregando....
                        </Text>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};