import { SafeAreaView, Text, TextInput, ImageBackground, View, TouchableOpacity, ToastAndroid, StyleSheet, Image } from 'react-native';
import { useState } from 'react';
import JobImg from '../assets/images/Job.jpg'
import Home from './home';
import { launchCamera } from 'react-native-image-picker';
import Profile from '../assets/images/profile.png'
import styles from '../components/home/welcome/welcome.style';

const style = StyleSheet.create({
    ...styles,
    backgroundContainer: { flex: 1, justifyContent: 'space-evenly', alignItems: 'center', padding: 10 },
    InputColor: { fontWeight: 900, color: 'white', fontSize: 35 }
});

const PreHome = () => {
    const [inputName, setInputName] = useState('');
    const [toggle, setToggle] = useState(true);

    async function GalleryControl() {


        await launchCamera({ mediaType: 'photo', quality: 1, includeBase64: true, path: 'images' }, res => {
            console.log(res);
        });
    }

    return (
        <>{toggle ?
            <SafeAreaView>
                <ImageBackground source={JobImg} style={{ width: '100%', height: '100%' }} blurRadius={15}>
                    <View style={style.backgroundContainer}>
                        <TouchableOpacity style={{ width: 150, height: 150 }}
                            onPress={GalleryControl}>
                            <Image source={Profile} style={{ width: 150, height: 150 }} />
                        </TouchableOpacity>
                        <View>
                            <View style={styles.searchContainer}>
                                <TextInput
                                    placeholder='NAME '
                                    style={{
                                        ...styles.searchInput, width: '80%', backgroundColor: '#eeeeee'
                                        , elevation: 10
                                    }} value={inputName} onChangeText={text => setInputName(text)} />
                                <TouchableOpacity style={styles.searchBtn} onPress={() => {
                                    if (inputName !== '') { setToggle(false) }
                                    else {
                                        ToastAndroid.showWithGravity('Please Fill the field', ToastAndroid.SHORT, ToastAndroid.TOP)
                                        setToggle(true)
                                    }
                                }}>
                                    <Text style={style.InputColor}>&rarr;</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </SafeAreaView> : <Home toggle={toggle} inputName={inputName} />}</>
    )
}

export default PreHome;