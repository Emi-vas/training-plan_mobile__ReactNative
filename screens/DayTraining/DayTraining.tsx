//react
import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//firebase
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../auth/firebase';
import { useAuth } from '../../auth/UserContext';
//styles
import { styles } from './DayTraining.styles';
//compo
import TrainingCard from '../../components/TrainingCard/TrainingCard';
import Loader from '../../components/Loader';
//utils
import { getDayy } from '../../utils/date';

const DayTraining = () => {
    const { user } = useAuth()
    const [trainings, setTrainings] = useState<any>()
    const date = getDayy()

    useEffect(() => {
        const collectionRefCafes = collection(db, `users/${user}/trainings`)
        const unsubscribed = onSnapshot( collectionRefCafes , (snapshot) => {
            setTrainings(
                snapshot.docs
                .map((doc) => ({...doc.data(), id: doc.id}))
                .filter((t: any) => t.date.includes(date))
            )
        } )

        return () => unsubscribed()
    }, [])



    if(!trainings) return <Loader />

    return (
        <View style={styles.wrapper}>
            <FlatList 
                data={trainings}
                renderItem={({ item }) => <TrainingCard trainingData={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false} //showsHorizontalScrollIndicator={false}
                style={styles.flatlist}
            />
        </View>
    );
};

export default DayTraining;