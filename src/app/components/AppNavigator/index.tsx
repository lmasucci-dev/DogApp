import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import Navigator from "../../navigator"

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    )
}

export default AppNavigator;