import React from 'react';
import {Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import cars from '../../assets/data/cars';

const HomeMap = ()=> {
        const getImage = (type)=>{
            if(type === 'CabX'){
                return require('../../assets/images/top-CabX.png');
            }
            if(type === 'Comfort'){
                return require('../../assets/images/top-Comfort.png');
            }
            return require('../../assets/images/top-EliteXL.png')
        }

    return (
            <MapView
                style={{ width: '100%', height: '100%'}}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}   
            >
                {cars.map(car => (
                    <Marker 
                    coordinate={{ latitude: car.latitude, longitude: car.longitude}}
                    key={car.id}
                    >
                        <Image 
                            style={{height: 70, width: 70, resizeMode: 'contain'}} 
                            source={getImage(car.type)} 
                        />
                    </Marker>
                ))}   
            </MapView>
    )
}

export default HomeMap;