import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'
import { apiURL, getData } from '../../utils/localStorage'
import axios from 'axios'
import { showMessage } from 'react-native-flash-message'

export default function JelajahiInput({ navigation, route }) {
    const backPage = () => {
        navigation.goBack()
    };

    const [kirim, setKirim] = useState({
        tipe: 'jelajahi',
        jelajahi_bahasa: route.params,
        orientasi_diksi: '',
        orientasi_imaji: '',
        orientasi_rima: '',
        orientasi_tipografi: '',
        orientasi_gaya_bahasa: '',
        orientasi_tema: '',
        orientasi_rasa: '',
        orientasi_nada: '',
        orientasi_amanat: '',
        jelajahi_terjemah_indonesia: '',
        jelajahi_tema: '',
        jelajahi_gaya_bahasa: '',
        jelajahi_pesan_moral: '',
        eksplorasi_nama_kelompok: '',
        eksplorasi_anggota_kelompok: '',
        kotak1: '',
        kotak2: '',
        kotak3: '',
        kotak4: '',
        jumlah_makan: '',
        tantangan_1a: '',
        tantangan_1b: '',
        tantangan_2a: '',
        tantangan_2b: '',
        tantangan_3a: '',
        tantangan_3b: '',
        tantangan_3c: '',
        tantangan_3d: '',
        tantangan_3e: '',
        tantangan_3f: '',
        tantangan_3g: '',
        tantangan_3h: '',
        tantangan_4: '',

    })
    const sendServer = () => {
        getData('user').then(u => {
            let dt = {
                ...kirim,
                nama_lengkap: u.nama_lengkap
            }

            axios.post(apiURL + 'update_riwayat', dt).then(res => {
                console.log(res.data);
                if (res.data == 200) {
                    showMessage({
                        type: 'success',
                        message: 'Data berhasil disimpan'
                    });
                    navigation.navigate('Eksplorasi')
                }
            })
        })

    }
    return (
        <ImageBackground source={require('../../assets/bghome.png')} style={{
            flex: 1,
            width: '100%',
            height: "100%"
        }}>
            {/* HEADERS */}
            <View style={{
                padding: 10, backgroundColor: colors.secondary, borderBottomRightRadius: 20, borderBottomLeftRadius: 20,
                flexDirection: "row"
            }}>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableNativeFeedback onPress={backPage}>
                        <Icon type='ionicon' name='chevron-back-outline' size={MyDimensi / 2} color={colors.tertiary} />
                    </TouchableNativeFeedback>
                </View>

                <View style={{ alignSelf: 'center', justifyContent: "center", left: 90 }}>
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, textAlign: "center" }}>Langkah Kedua</Text>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 25, textAlign: 'center' }}>Jelajahi</Text>
                </View>

            </View>

            <ScrollView>
                <View style={{ padding: 10, }}>

                    <View style={{ padding: 10, }}>
                        <Text style={{
                            fontFamily: fonts.primary[400], textAlign: 'center', fontSize: 20, fontStyle: 'italic', color: colors.tertiary,
                        }}>“{route.params}”</Text>

                        <MyGap jarak={20} />

                        <View>
                            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, }}> 1. Terjemah Bahasa Indonesia</Text>
                            <MyGap jarak={5} />
                            <TextInput multiline onChangeText={x => setKirim({ ...kirim, jelajahi_terjemah_indonesia: x })} style={{
                                fontFamily: fonts.primary[400], fontSize: 12, paddingLeft: 10, paddingRight: 10, borderWidth: 1,
                                borderRadius: 30, color: 'black', backgroundColor: 'white'
                            }} placeholder='Isi Jawaban' placeholderTextColor='gray' />
                        </View>
                        <MyGap jarak={10} />
                        <View>
                            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, }}> 2. Tema</Text>
                            <MyGap jarak={5} />
                            <TextInput multiline onChangeText={x => setKirim({ ...kirim, jelajahi_tema: x })} style={{
                                fontFamily: fonts.primary[400], fontSize: 12, paddingLeft: 10, paddingRight: 10, borderWidth: 1,
                                borderRadius: 30, color: 'black', backgroundColor: 'white'
                            }} placeholder='Isi Jawaban' placeholderTextColor='gray' />
                        </View>
                        <MyGap jarak={10} />
                        <View>
                            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, }}> 3. Gaya Bahasa</Text>
                            <MyGap jarak={5} />
                            <TextInput multiline onChangeText={x => setKirim({ ...kirim, jelajahi_gaya_bahasa: x })} style={{
                                fontFamily: fonts.primary[400], fontSize: 12, paddingLeft: 10, paddingRight: 10, borderWidth: 1,
                                borderRadius: 30, color: 'black', backgroundColor: 'white'
                            }} placeholder='Isi Jawaban' placeholderTextColor='gray' />
                        </View>
                        <MyGap jarak={10} />
                        <View>
                            <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, }}> 4. Pesan Moral</Text>
                            <MyGap jarak={5} />
                            <TextInput multiline onChangeText={x => setKirim({ ...kirim, jelajahi_pesan_moral: x })} style={{
                                fontFamily: fonts.primary[400], fontSize: 12, paddingLeft: 10, paddingRight: 10, borderWidth: 1,
                                borderRadius: 30, color: 'black', backgroundColor: 'white'
                            }} placeholder='Isi Jawaban' placeholderTextColor='gray' />
                        </View>

                        <MyGap jarak={27} />

                    </View>
                    <TouchableNativeFeedback onPress={sendServer}>
                        <View style={{ padding: 10, backgroundColor: colors.tertiary, borderRadius: 30, }}>
                            <Text style={{ fontFamily: fonts.primary[600], textAlign: 'center', color: 'white' }}>Selanjutnya</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}