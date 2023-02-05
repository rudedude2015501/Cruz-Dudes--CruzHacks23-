import { useState } from "react";
import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LivingScreen from "./living";
import Disposable from "./Disposable";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    const defaultState = {'income': '520', 'savings': '230', 'tuition': '11000','debt': '100000', 'supplies': '230', 'rent': '2000', 'utilities': '250', 'groceries': '300', 'disposable': '230'};
    const [accountStatus, setAccountStatus] = useState(defaultState);
    // const [income, setIncome] = useState("0");
    // const [savings, setSavings] = useState("0");
    // const [tuition, setTuition] = useState("0");
    // const [debt, setDebt] = useState("0");
    // const [supplies, setSupplies] = useState("0");
    // const [rent, setRent] = useState("0");
    // const [utilities, setUtilities] = useState("0");
    // const [groceries, setGroceries] = useState("0");
    // const [disposable, setDisposable] = useState("0");

    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name = "Home" children={()=><Disposable accountStatus={accountStatus} setAccountStatus={setAccountStatus}/>} />
            <Tab.Screen name = "Budget" children={()=><LivingScreen accountStatus={accountStatus} setAccountStatus={setAccountStatus}/>} />
        </Tab.Navigator>
    )
}

export default TabNavigator;