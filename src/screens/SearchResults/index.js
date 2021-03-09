import React from 'react'
import { View, Text } from 'react-native';
import UberTypes from '../../components/UberTypes';
import HomeMap from './../../components/HomeMap';

const SearchResults = () => {
    return (
        <View>
            <HomeMap />
            <UberTypes />
        </View>
    )
}

export default SearchResults
