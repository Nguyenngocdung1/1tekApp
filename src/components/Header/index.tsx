import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    title: string
}

const Header = (props: Props) => {
    const { title } = props;
    return (
        <View style={{ display: 'flex', justifyContent: 'center' }}>
            <Text style={styles.titleContainer}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'OpenSans-Bold',
      textAlign: 'center',
    },
  });

export default Header;
