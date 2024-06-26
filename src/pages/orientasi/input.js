import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'
import { apiURL, getData } from '../../utils/localStorage'
import axios from 'axios'
import { showMessage } from 'react-native-flash-message'


export default function OrientasiInput({ navigation }) {
    const backPage = () => {
        navigation.goBack()
    };

    const [kirim, setKirim] = useState({
        tipe: 'orientasi',
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
                    navigation.navigate('OrientasiFinal')
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

                <View style={{ alignSelf: 'center', justifyContent: "center", left: 80 }}>
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 10, textAlign: "center" }}>Langkah Pertama</Text>
                    <Text style={{ fontFamily: fonts.primary[600], fontSize: 25, textAlign: 'center' }}>Orientasi</Text>
                </View>

            </View>


            <ScrollView>
                <View style={{ padding: 10, }}>
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, }}>Ayo temukan unsur pembangun dalam puisi tersebut !</Text>
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, }}>A. Unsur Fiksi Puisi</Text>
                    <MyGap jarak={10} />
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[400], }}>1. Diksi</Text>
                        <TextInput onChangeText={x => setKirim({ ...kirim, orientasi_diksi: x })} style={{
                            backgroundColor: 'white', borderWidth: 0.5, borderRadius: 30,
                            paddingLeft: 10, paddingRight: 10, fontFamily: fonts.primary[400], fontSize: 12, top: 3
                        }}
                            placeholder='Isi Jawaban' placeholderTextColor='gray'
                        />
                    </View>

                    <MyGap jarak={0} />
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[400], }}>2. Imaji</Text>
                        <TextInput onChangeText={x => setKirim({ ...kirim, orientasi_imaji: x })} style={{
                            backgroundColor: 'white', borderWidth: 0.5, borderRadius: 30,
                            paddingLeft: 10, paddingRight: 10, fontFamily: fonts.primary[400], fontSize: 12, top: 3
                        }}
                            placeholder='Isi Jawaban' placeholderTextColor='gray'
                        />
                    </View>

                    <MyGap jarak={0} />
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[400], }}>3. Rima</Text>
                        <TextInput onChangeText={x => setKirim({ ...kirim, orientasi_rima: x })} style={{
                            backgroundColor: 'white', borderWidth: 0.5, borderRadius: 30,
                            paddingLeft: 10, paddingRight: 10, fontFamily: fonts.primary[400], fontSize: 12, top: 3
                        }}
                            placeholder='Isi Jawaban' placeholderTextColor='gray'
                        />
                    </View>

                    <MyGap jarak={0} />
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[400], }}>4. Tipografi</Text>
                        <TextInput onChangeText={x => setKirim({ ...kirim, orientasi_tipografi: x })} style={{
                            backgroundColor: 'white', borderWidth: 0.5, borderRadius: 30,
                            paddingLeft: 10, paddingRight: 10, fontFamily: fonts.primary[400], fontSize: 12, top: 3
                        }}
                            placeholder='Isi Jawaban' placeholderTextColor='gray'
                        />
                    </View>

                    <MyGap jarak={0} />
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[400], }}>5. Gaya Bahasa</Text>
                        <TextInput onChangeText={x => setKirim({ ...kirim, orientasi_gaya_bahasa: x })} style={{
                            backgroundColor: 'white', borderWidth: 0.5, borderRadius: 30,
                            paddingLeft: 10, paddingRight: 10, fontFamily: fonts.primary[400], fontSize: 12, top: 3
                        }}
                            placeholder='Isi Jawaban' placeholderTextColor='gray'
                        />
                    </View>
                    <MyGap jarak={10} />
                    <Text style={{ fontFamily: fonts.primary[400], fontSize: 12, }}>B. Unsur Batin Puisi</Text>
                    <MyGap jarak={10} />
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[400], }}>1. Tema</Text>
                        <TextInput onChangeText={x => setKirim({ ...kirim, orientasi_tema: x })} style={{
                            backgroundColor: 'white', borderWidth: 0.5, borderRadius: 30,
                            paddingLeft: 10, paddingRight: 10, fontFamily: fonts.primary[400], fontSize: 12, top: 3
                        }}
                            placeholder='Isi Jawaban' placeholderTextColor='gray'
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[400], }}>2. Rasa</Text>
                        <TextInput onChangeText={x => setKirim({ ...kirim, orientasi_rasa: x })} style={{
                            backgroundColor: 'white', borderWidth: 0.5, borderRadius: 30,
                            paddingLeft: 10, paddingRight: 10, fontFamily: fonts.primary[400], fontSize: 12, top: 3
                        }}
                            placeholder='Isi Jawaban' placeholderTextColor='gray'
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[400], }}>3. Nada</Text>
                        <TextInput onChangeText={x => setKirim({ ...kirim, orientasi_nada: x })} style={{
                            backgroundColor: 'white', borderWidth: 0.5, borderRadius: 30,
                            paddingLeft: 10, paddingRight: 10, fontFamily: fonts.primary[400], fontSize: 12, top: 3
                        }}
                            placeholder='Isi Jawaban' placeholderTextColor='gray'
                        />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontFamily: fonts.primary[400], }}>4. Amanat</Text>
                        <TextInput onChangeText={x => setKirim({ ...kirim, orientasi_amanat: x })} style={{
                            backgroundColor: 'white', borderWidth: 0.5, borderRadius: 30,
                            paddingLeft: 10, paddingRight: 10, fontFamily: fonts.primary[400], fontSize: 12, top: 3
                        }}
                            placeholder='Isi Jawaban' placeholderTextColor='gray'
                        />
                    </View>
                    <MyGap jarak={10} />
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