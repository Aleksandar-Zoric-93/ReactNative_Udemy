import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
        <Text style={StyleSheet.headertitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#F7287B',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headertitle: {
        color: 'black',
        fontSize: 18
    }
});

export default Header;