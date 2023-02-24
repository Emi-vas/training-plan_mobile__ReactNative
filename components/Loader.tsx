import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Loader = () => {
    return (
       <View style={styles.container}>
            <ActivityIndicator size="large" color="rgb(58, 27, 7)" />
       </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "white",
        marginVertical: 50
    }
})