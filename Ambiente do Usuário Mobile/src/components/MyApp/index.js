import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { useFonts} from 'expo-font';

export default function MyApp({text, font, color}){
    const [loaded] = useFonts({
        BloggerSans: require('../../assets/fonts/Blogger_Sans.otf'),
    });

    if(!loaded){
        return null;
    }

    return(
        <View>
            <Text style={styles.text, {fontSize: font, color: color}}>
                {text}
            </Text>
        </View>
    )
    
}