import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const CategoriesScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button title="Go to Meals" onPress={() => {
                {/* Use replace instead of navigate when you don't want the user to be able to go back e.g. once they login */}
                props.navigation.navigate({routeName: 'CategoryMeals'});
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}
});

export default CategoriesScreen;