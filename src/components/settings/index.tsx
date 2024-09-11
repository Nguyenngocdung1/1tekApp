import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.styleComing}>Setting Coming Soon !</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleComing: {
        fontSize: 30,
        fontWeight: '500',
        fontStyle: 'italic',
    },
  });

export default SettingsScreen;
