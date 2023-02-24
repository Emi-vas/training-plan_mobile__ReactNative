import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
//assets
import { run, main } from '../../assets/img';
//styles
import { styles } from './TrainingCard.styles';

interface Props {
    trainingData: any
}

const TrainingCard = ({ trainingData }: Props) => {
    const [sourceImage, setSourceImage] = useState(main)

    useEffect(() => {
        switch(trainingData.sport) {
            case 'Course à pied':
                setSourceImage(run)
            default:
                return
        }
    },[])

    return (
        <View style={styles.wrapper}>
            <Image 
                style={styles.background}
                source={sourceImage}
            />
            <View style={styles.blocTxt}>
                <Text style={styles.title}>{trainingData.sport}</Text>
                {
                    trainingData.running && <Text style={styles.subTitle}>{trainingData.running.type}</Text>
                }
            </View>
        </View>
    );
};

export default TrainingCard;