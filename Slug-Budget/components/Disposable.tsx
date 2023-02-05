import { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { Text, Input } from "@rneui/themed";
import CashSlider from "./CashSlider";

export default function Disposable() {

    const [income, setIncome] = useState("0");
    const [savings, setSavings] = useState("0");
    const [tuition, setTuition] = useState("0");
    const [debt, setDebt] = useState("0");
    const [supplies, setSupplies] = useState("0");
    const [rent, setRent] = useState("0");
    const [utilities, setUtilities] = useState("0");
    const [groceries, setGroceries] = useState("0");
    const [disposable, setDisposable] = useState("0");

    const fixedItems = [["Income", income, setIncome], ["Savings", savings, setSavings], ["Tuition", tuition, setTuition], ["Debt", debt, setDebt], ["Supplies", supplies, setSupplies], ["Rent", rent, setRent], ["Utilities", utilities, setUtilities], ["Groceries", groceries, setGroceries], ["Fun Money", disposable, setDebt]];
    const listItems = fixedItems.map(function(item) { return (
        <Input value={item[1] as any} onChangeText={(val) => (item[2] as any)(val)} style={styles.textInput} labelStyle={styles.textLabel as any} inputStyle={styles.inputStyle} textAlign={"left"} keyboardType="numeric" label={item[0]}></Input>
    );});
    //const scrollListItems = scrollItems.map(function(item) { return <Text style={styles.body} key={item}>{item}</Text>; });

    //let spendable = income.length ? Math.max(parseInt(income) - parseInt(savings) - parseInt(tuition) - parseInt(rent), 1) : 1;
    return (
        <ScrollView style={styles.body}>
            <Text style={styles.header}>Slug Money $_$</Text>
            {listItems}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f3cf',
    },
    header: {
        fontSize: 40,
        padding: "10%",
        backgroundColor: "#2089dc",
        textAlign: "center",
        borderRadius: 100,
    },
    textInput: {
        fontSize: 20,
        backgroundColor: '#F0F3FF',
        marginTop: "-11%",
        paddingTop: "5%",
        paddingBottom: "5%",
        maxLength: 9,
        borderRadius: 5,
    },
    textLabel: {
        color: "#444444",
        marginLeft: "2%",
        marginTop: "0%",
        fontSize: "20%",
        zIndex: 99,
    },
    inputStyle: {
        paddingLeft: "40%",
        size: "40%",
    },
    body: {
        backgroundColor: "#FFFAFE",
    }
});