import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const History = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.styleComing}>History Coming Soon !</Text>
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

export default History;
