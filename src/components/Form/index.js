import React, {useState} from "react";
import { TextInput,Text, View, TouchableOpacity } from "react-native";
import ResultImc from './ResultImc/index';
import styles  from "./style";

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator() { 
        return setImc({(weight/(height * height)).toFixed(2) })
    }

    function vadlidationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e altura")
    }

    return {
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                    <TextInput 
                    style={styles.input}
                    onChangeText={
                        setHeight
                    }
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                style={styles.input}
                onChangeText={
                    setWeight
                }
                    placeholder="Ex 86.5"
                    keyboardType="numeric"
                />

                <TouchableOpacity>
                    style={styles.buttonCalculator}
                    onPress={
                        () => vadlidationImc() 
                    }
                    <Text style={styles.textButtonCalculator}>{textButton</Text>
                </TouchableOpacity>
               

            </View>

            <ResultImc mesageResultImc={messageImc} resultImc={imc}/>
        </View>
    };
}