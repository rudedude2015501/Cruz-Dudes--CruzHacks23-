import { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { Text, Input } from "@rneui/themed";
import CashSlider from "./CashSlider";

type DisposableProps = {
    accountStatus: any;
    setAccountStatus: any;
};

export default function Disposable(p: DisposableProps) {

    /*const [income, setIncome] = useState("0");
    const [savings, setSavings] = useState("0");
    const [tuition, setTuition] = useState("0");
    const [debt, setDebt] = useState("0");
    const [supplies, setSupplies] = useState("0");
    const [rent, setRent] = useState("0");
    const [utilities, setUtilities] = useState("0");
    const [groceries, setGroceries] = useState("0");
    const [disposable, setDisposable] = useState("0");*/

    const fixedItems = ['income', 'savings', 'tuition','debt', 'supplies', 'rent', 'utilities', 'groceries', 'disposable']
    //[["Income", income, setIncome], ["Savings", savings, setSavings], ["Tuition", tuition, setTuition], ["Debt", debt, setDebt], ["Supplies", supplies, setSupplies], ["Rent", rent, setRent], ["Utilities", utilities, setUtilities], ["Groceries", groceries, setGroceries], ["Fun Money", disposable, setDebt]];
    
    const updateStatus = (val: any, key: any) => {
            p.setAccountStatus((prevState: any) => {
                // Taking a copy of the initial filters obj         
                // const { prevStatecurrentState } = prevState;
                // Updating it's property as per the key, value pair retrieved (key being the filter, value being "on" or "off")        
                prevState[key] = val;
                // Returning the updated object         
                return { prevState };
              });
        }

    const listItems = fixedItems.map(function(item) { return (
        <Input key={item} value={p.accountStatus[item]} onBlur={(val) => updateStatus(val, item)} style={styles.textInput} labelStyle={styles.textLabel as any} inputStyle={styles.inputStyle} textAlign={"left"} keyboardType="numeric" label={item}></Input>
    );});
    //.toLocaleString('en-US', { 
    //     style: 'currency', 
    //     currency: 'USD' 
    // })
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
        color: "yellow",
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