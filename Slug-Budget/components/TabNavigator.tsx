import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LivingScreen from "./living";
import Disposable from "./Disposable";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Budget" component={LivingScreen} />
            <Tab.Screen name = "Home" component={Disposable} />
        </Tab.Navigator>
    )
}

export default TabNavigator;