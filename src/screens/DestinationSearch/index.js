import React, {useState, useEffect} from 'react'
import { View, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './styles';
import {GOOGLE_PLACES_KEY} from "@env";

const DestinationSearch = () => {

    const [originPlace, setOriginPlace] = useState(null);
    const [destinationPlace, setDestinationPlace] = useState(null);

    useEffect(()=>{
        if(originPlace && destinationPlace){
            console.warn('Redirect to result')
        }
    }, [originPlace, destinationPlace])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput style={styles.textInput} value={originPlace} onChangeText={setOriginPlace} placeholder='Current location' />
                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setDestinationPlace( {data, details} );
                        console.log(data, details);
                    }}
                    styles={{
                        textInput: styles.textInput,
                    }}
                    fetchDetails
                    query={{
                        key: `${GOOGLE_PLACES_KEY}`,
                        language: 'en',
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default DestinationSearch
