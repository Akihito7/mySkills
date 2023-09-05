import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    ScrollView,
    FlatList
}
    from "react-native";
import { Button } from "./components/Button";
import { SkillCards } from "./components/SkillCards";

interface dataMySkill {
    id: string;
    name: string;
    data?: Date;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [skills, setSkills] = useState<dataMySkill[]>([]);
    const [greeting, setGreeting] = useState('');

    function handleAddNewSkill() {
        
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        };
        setSkills(oldState => [...oldState, data]);
        setNewSkill('');
    };

    function handleRemoveSkills(id: string) {
        setSkills(oldState => oldState.filter(skill => {
            return skill.id !== id;

        }))
    }


    function getGreetings() {
        const currentHour = new Date().getHours();
        if (currentHour < 12) setGreeting("Good morning");
        else if (currentHour >= 12 && currentHour < 18) setGreeting("Good afternoon");
        else setGreeting("Good nigth");

    }

    useEffect(() => {
        getGreetings();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Akihito</Text>
            <Text style={{ color: '#FFF' }}>{greeting}</Text>

            <TextInput
                value={newSkill}
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}

            />

            <Button
                title='add'
                onPress={handleAddNewSkill}
            />

            <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>



            <FlatList
                data={skills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCards
                     skill={item.name}
                     onPress={() => handleRemoveSkills(item.id)} />
                )} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 80,
        paddingHorizontal: 20,
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        padding: Platform.OS === 'ios' ? 15 : 12,
        borderRadius: 8,
        marginTop: 30,
        color: '#FFF'
    }
});

