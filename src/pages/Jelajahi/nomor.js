import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback, TextInput, FlatList } from 'react-native'
import React from 'react'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'


export default function JelajahiNomor({ navigation }) {
    const backPage = () => {
        navigation.goBack()
    };

    const DATA = [
        'Bara jou no gulaha, no tuduba nage adi',
        'Daka toma dehe doka, sema dehe ika moju',
        'Doro to waro marua, ara dodo ma to taru',
        'Ngori doka I gaba cina, jaha ua to ruru',
        'Dinya ne doka nga saya, waktu wange dahe bunga muraha ma bau sai',
        'Eli-eli susunyinga demo mo dero afa mara cobo salah demo kanang ne',
        'Gula-gula nyinga afa, nyinga ma bubang nyinga',
        'Gudu moju si tosuba ri jou si tononako',
        'Gudu-gudu to tede suba, karena no ronga budi se Bahasa',
        'Hau fo Makati pasi, moro-moro fo maku ise',
        'Hele fo nyonyomo-nyonyomo, ma nyonyohi ena bato',
        'Jagamoi I tolole, to magali jagamoi',
        'Kangela fo hisa ngolo kore se bao ma gine',
        'Kangela fo padi gahe, caka gole lui gia',
        'Kangela to fai doro, oti dofu ma luleo',

    ]

    const __renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('JelajahiInput', item)
            }} style={{
                flex: 1,
                borderWidth: 1,
                padding: 10,
                height: 100,
                margin: 5,
                borderRadius: 10,
                backgroundColor: colors.white,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[800],
                    fontSize: 30,
                    color: colors.tertiary
                }}>{index + 1}</Text>
            </TouchableOpacity>
        )
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

            <View style={{
                flex: 1,
                padding: 10,
            }}>
                <FlatList numColumns={3} data={DATA} renderItem={__renderItem} />
            </View>
        </ImageBackground>
    )
}