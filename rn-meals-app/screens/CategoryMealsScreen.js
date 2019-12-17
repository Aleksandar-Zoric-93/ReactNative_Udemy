import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

const CategoriesMealsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                });
            }} />

<Button title="Go Back" onPress={() => {
    {/* You can use push to stack the same screen on top of current page stack.  Pop to pop the page off the stack. */}
                props.navigation.goBack();
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

export default CategoriesMealsScreen;