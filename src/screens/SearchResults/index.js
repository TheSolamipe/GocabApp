import React from 'react'
import { View, Dimensions } from 'react-native';
import UberTypes from '../../components/UberTypes';
import RouteMap from './../../components/RouteMap';

const SearchResults = () => {
    return (
        <View style={{display: 'flex', justifyContent: 'space-between'}}>
            <View style={{height: Dimensions.get('window').height - 420}}>
                <RouteMap />
            </View>
        
            <UberTypes />
        </View>
    )
}

export default SearchResults
