import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'
import UberTypeRow from '../UberTypeRow';

import typesData from '../../assets/data/types'

const UberTypes = () => {
    const confirm = ()=>{
        console.warn('Confirm')
    }
    return (
        <View>
            {typesData.map(type => (
                <UberTypeRow type={type} key={type.id}/>
            ))}

            <Pressable onPress={confirm} style={styles.button}>
                <Text style={styles.buttonText}>
                    Confirm Gocab
                </Text>
            </Pressable>
        </View>
    )
}

export default UberTypes
