import React from 'react';
import WebView from 'react-native-webview';

const GameHub = () => {
    return (
        <WebView source={{ uri: 'https://game.1tek.vn/home' }} />
    );
};

export default GameHub;
