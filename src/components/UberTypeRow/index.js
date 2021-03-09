import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const UberTypeRow = ({type}) => {
    const getImage = ()=>{
        if(type.type === 'CabX'){
            return require('../../assets/images/CabX.jpeg');
        }
        if(type.type === 'Comfort'){
            return require('../../assets/images/Comfort.jpeg');
        }
        return require('../../assets/images/EliteXL.jpeg')
    }

    return (
        <View style={styles.mainContainer}>
            <Image style={styles.leftContainer} source={getImage()}/>
            <View style={styles.middleContainer}>
                <Text style={styles.type}>
                    {type.type} {' '}
                    <Ionicons name={'person'} size={15}/>
                    3
                </Text>
                <Text style={styles.time}>{type.duration}mins to drop off</Text>
            </View>
            <View style={styles.rightContainer}>
                <Ionicons name={'pricetag'} size={18} color={'#42d742'}/>
                <Text style={styles.price}>est. ${type.price}</Text>
            </View>
        </View>
    )
}

export default UberTypeRow
