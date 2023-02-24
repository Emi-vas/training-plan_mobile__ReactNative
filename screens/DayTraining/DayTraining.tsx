//react
import React, { useEffect, useState } from 'react';
import { View, Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
//firebase
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../auth/firebase';
import { useAuth } from '../../auth/UserContext';
import TrainingCard from '../../components/TrainingCard/TrainingCard';
//styles
import { styles } from './DayTraining.styles';

const DayTraining = () => {
    const { user } = useAuth()
    const [dataUser, setDataUser] = useState<any>()

    useEffect(() => {
        const collectionRefCafes = collection(db, `users/${user}/trainings`)
        const unsubscribed = onSnapshot( collectionRefCafes , (snapshot) => {
            setDataUser(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
        } )

        return () => unsubscribed()
    }, [])

    useEffect(() => {
        console.log(dataUser)
    },[dataUser])

    if(!dataUser) return <View><Text>Loading...</Text></View>

    return (
        <View style={styles.wrapper}>
            <FlatList 
                data={dataUser}
                renderItem={({ item }) => <TrainingCard trainingData={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false} //showsHorizontalScrollIndicator={false}
                style={styles.flatlist}
            />
        </View>
    );
};

export default DayTraining;