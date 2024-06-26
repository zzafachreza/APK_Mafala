import { View, Text, ImageBackground, StyleSheet, ScrollView, Image, TouchableNativeFeedback, TextInput, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'
import { apiURL, getData } from '../../utils/localStorage'
import axios from 'axios'
import { showMessage } from 'react-native-flash-message'
import { useIsFocused } from '@react-navigation/native'

export default function History({ navigation }) {


  const JustifiedText = ({ children, style }) => (
    <Text style={[style, styles.justifiedText]}>{children}</Text>
  );

  const isFocus = useIsFocused();
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState({
    orientasi_diksi: '',
    orientasi_imaji: '',
    orientasi_rima: '',
    orientasi_tipografi: '',
    orientasi_gaya_bahasa: '',
    orientasi_tema: '',
    orientasi_rasa: '',
    orientasi_nada: '',
    orientasi_amanat: '',
    jelajahi_bahasa: '',
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

  useEffect(() => {
    if (isFocus) {
      setLoading(true)
      getData('user').then(u => {

        axios.post(apiURL + 'get_riwayat', {
          nama_lengkap: u.nama_lengkap
        }).then(res => {
          console.log(res.data);
          setItem(res.data);
          setLoading(false);

        })
      })
    }
  }, [isFocus]);

  const Judul = ({ no, value }) => {
    return (
      <View style={{
        marginVertical: 10,
        flexDirection: 'row'
      }}>
        <Text style={{
          fontFamily: fonts.secondary[800],
          fontSize: 14,
        }}>{no}. </Text>
        <Text style={{
          fontFamily: fonts.secondary[800],
          fontSize: 14,
        }}>{value}</Text>
      </View>
    )
  }

  const Isian = ({ label, value }) => {
    return (
      <View style={{
        marginVertical: 4,
      }}>
        {label.length > 0 &&
          <Text style={{
            fontFamily: fonts.primary[600],
            fontSize: 12,
          }}>{label}</Text>
        }
        <View style={{
          paddingLeft: 30,
          paddingVertical: 10,
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: 50,
          backgroundColor: colors.white
        }}>
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: 12,
          }}>{value}</Text>
        </View>
      </View>
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
        <View>
          <Icon type='ionicon' name='chevron-back-outline' size={MyDimensi / 2} color={colors.tertiary} />
        </View>

        <View style={{ alignSelf: 'center', justifyContent: "center", left: 90 }}>
          <Text style={{ fontFamily: fonts.primary[600], fontSize: 25, }}>History</Text>
        </View>

      </View>
      {!loading && <ScrollView>
        <View style={{ padding: 10, flex: 1, }}>

          <Judul no={1} value='Langkah Pertama : Orientasi' />
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: 12,
          }}>Ayo temukan unsur pembangun dalam puisi tersebut !</Text>
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: 12,
          }}>A. Unsur Fisik Puisi</Text>
          <Isian label='1. Diksi' value={item.orientasi_diksi} />
          <Isian label='2. Imaji' value={item.orientasi_imaji} />
          <Isian label='3. Rima' value={item.orientasi_rima} />
          <Isian label='4. Tipografi' value={item.orientasi_tipografi} />
          <Isian label='5. Gaya Bahasa' value={item.orientasi_gaya_bahasa} />
          <Text style={{
            fontFamily: fonts.primary[400],
            fontSize: 12,
          }}>A. Unsur Batin Puis</Text>
          <Isian label='1. Tema' value={item.orientasi_tema} />
          <Isian label='2. Rasa' value={item.orientasi_rasa} />
          <Isian label='3. Nada' value={item.orientasi_nada} />
          <Isian label='4. Amanat' value={item.orientasi_amanat} />
          <Judul no={2} value='Langkah Kedua : Jelajahi' />
          <Text style={{
            marginVertical: 10,
            fontFamily: fonts.primary[400], textAlign: 'center', fontSize: 20, fontStyle: 'italic', color: colors.tertiary,
          }}>“{item.jelajahi_bahasa}”</Text>

          <Isian label='1. Terjemah Bahasa Indonesia' value={item.jelajahi_gaya_bahasa} />
          <Isian label='2. Tema' value={item.jelajahi_tema} />
          <Isian label='3. Gaya Bahasa' value={item.jelajahi_gaya_bahasa} />
          <Isian label='4. Pesan Moral' value={item.jelajahi_pesan_moral} />

          <Judul no={3} value='Langkah Ketiga : Eksplorasi & Kreasi' />
          <Isian label='Kelompok' value={item.eksplorasi_nama_kelompok} />
          <Isian label='Nama Anggota Kelompok :' value={item.eksplorasi_anggota_kelompok} />
          <View>
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              Tujuan :{'\n'}
              Siswa dapat menulis puisi dengan memanfaatkan{'\n'}
              <Text style={{ fontStyle: 'italic' }}>dolabololo.</Text>
            </JustifiedText>
          </View>
          <MyGap jarak={10} />

          <View>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, textAlign: 'center' }}>
              Puisi Bermuatan <Text style={{ fontStyle: 'italic' }}>Dolabololo</Text>
            </Text>
          </View>

          <MyGap jarak={10} />

          <View>
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              Petunjuk : {'\n'}
              1. Tulislah nama kelompok dan anggota kelompok pada tempat yang disediakan. {'\n'}
              2. Ambil kartu yang berisikan <Text style={{ fontStyle: "italic" }}>dolabololo</Text> yang telah disiapkan oleh guru. {'\n'}
              3. Bekerjalah dengan teman kelompokmu untuk dapat menyelesaikan tugas dalam LKS ini. {'\n'}
            </JustifiedText>
          </View>

          <MyGap jarak={20} />

          <View>
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              Kegiatan:{'\n'}
              Ikuti langkah-langkah berikut untuk dapat menulis puisi dengan memanfaatkan dolabololo.{'\n'}
              {'\n'}
              1. Baca dan lisankanlah bersama teman kelompokmu bentuk <Text style={{ fontStyle: 'italic' }}>dolabololo</Text> dalam kartu yang telah disiapkan oleh guru.{'\n'}
              2. Terjemahkanlah dolabololo dalam kartu tersebut ke dalam bahasa Indonesia. Tuliskanlah terjemahan tersebut ke dalam kotak 1 berikut.
            </JustifiedText>
          </View>

          <MyGap jarak={10} />

          <View>
            <Isian label='Kotak 1' value={item.kotak1} />
            <MyGap jarak={10} />
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              3. Tentukanlah tema yang terdapat dalam dolabololo yang telah diterjemahkan tersebut. Tulislah tema tersebut pada kotak 2 berikut.
            </JustifiedText>
          </View>

          <MyGap jarak={10} />

          <View>
            <Isian label='Kotak 2' value={item.kotak2} />
            <MyGap jarak={10} />
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              4. Tentukanlah gaya bahasa yang digunakan dalam dolabololo yang telah diterjemahkan tersebut. Tulislah bentuk gaya bahasa tersebut pada kotak berikut.
            </JustifiedText>
          </View>

          <MyGap jarak={10} />

          <View>

            <Isian label='Kotak 3' value={item.kotak3} />
            <MyGap jarak={10} />
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              5. Tentukanlah nilai atau pesan moral yang terdapat dalam dolabololo yang telah diterjemahkan tersebut. Tulislah nilai atau pesan moral tersebut pada kotak 4 berikut.
            </JustifiedText>
          </View>

          <MyGap jarak={10} />

          <View>
            <Isian label='Kotak 4' value={item.kotak4} />
          </View>

          <MyGap jarak={20} />

          <View>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>Tantangan!</Text>
            <MyGap jarak={10} />
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              Buatlah sebuah puisi dengan memanfaatkan unsur –unsur pembangun yang terdapat dalam dolabololo yang telah diidentifikasi sebelumnya. Ikutilah instruksi yang diberikan oleh guru dan tata cara yang telah disediakan dalam kotak berikut ini!
            </JustifiedText>
          </View>

          <MyGap jarak={10} />

          <View>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>1. Mari ciptakan imajinasi!</Text>
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              a. Isilah kotak dibawah ini dengan terjemahan {'\n'}<Text style={{ fontStyle: 'italic' }}>dolabololo</Text> pada kotak 1
            </JustifiedText>
            <Isian label='' value={item.tantangan_1a} />
            <MyGap jarak={10} />
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              b. Ciptakanlah sepenggal kalimat imajinatif yang memiliki bentuk dan jumlah larik seperti terjemahan <Text style={{ fontStyle: 'italic' }}>dolabololo</Text> pada kotak sebelumnya. Tulislah kalimat imajinatif tersebut pada kotak di bawah ini.
            </JustifiedText>
            <MyGap jarak={10} />
            <Isian label='' value={item.tantangan_1b} />
          </View>

          <MyGap jarak={20} />

          <View>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>2. Mari membangun ide dan gagasan!</Text>
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              a. Isilah kotak dibawah ini dengan tema <Text style={{ fontStyle: 'italic' }}>dolabololo</Text> pada kotak 2.
            </JustifiedText>
            <Isian label='' value={item.tantangan_2a} />
            <MyGap jarak={10} />
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              b. Ciptakanlah sebuah judul yang menggambarkan tema yang terdapat pada kotak sebelumnya.
            </JustifiedText>
            <MyGap jarak={10} />
            <Isian label='' value={item.tantangan_2b} />
          </View>

          <MyGap jarak={20} />

          <View>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>3.Mari merakit puisi!</Text>
            <MyGap jarak={10} />
            <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
              Rakitlah sebuah puisi dengan memanfaatkan unsur –unsur pembangun yang terdapat dalam dolabololo yang telah diidentifikasi sebelumnya dan ikutilah instruksi yang diberikan oleh guru. Gunakanlah kotak untuk merakit puisi bermuatan dolabololo yang terdapat pada halaman berikutnya.
            </JustifiedText>
          </View>

          <MyGap jarak={20} />

          <View>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 12, textAlign: 'center' }}>Kotak Merakit Puisi yang Bermuatan{'\n'}
              <Text style={{ fontStyle: "italic" }}>Dolabololo</Text>
            </Text>

            <MyGap jarak={20} />

            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12, fontStyle: "italic" }}>
                Dolabololo :
              </JustifiedText>
              <MyGap jarak={5} />
              <Isian label='' value={item.tantangan_3a} />
            </View>

            <MyGap jarak={10} />

            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                Tema :
              </JustifiedText>
              <MyGap jarak={5} />
              <Isian label='' value={item.tantangan_3b} />
            </View>

            <MyGap jarak={10} />

            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                Judul :
              </JustifiedText>
              <MyGap jarak={5} />
              <Isian label='' value={item.tantangan_3c} />
            </View>

            <MyGap jarak={10} />

            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                Kalimat Imajinatif :
              </JustifiedText>
              <MyGap jarak={5} />
              <Isian label='' value={item.tantangan_3d} />
            </View>

            <MyGap jarak={10} />

            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                Gaya Bahasa :
              </JustifiedText>
              <MyGap jarak={5} />
              <Isian label='' value={item.tantangan_3e} />
            </View>

            <MyGap jarak={10} />

            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                Kalimat Imajinatif :
              </JustifiedText>
              <MyGap jarak={5} />
              <Isian label='' value={item.tantangan_3f} />
            </View>

            <MyGap jarak={10} />

            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                Pesan :
              </JustifiedText>
              <MyGap jarak={5} />
              <Isian label='' value={item.tantangan_3g} />
            </View>

            <MyGap jarak={10} />

            <View>
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                Kalimat Imajinatif :
              </JustifiedText>
              <MyGap jarak={5} />
              <Isian label='' value={item.tantangan_3h} />
            </View>

            <MyGap jarak={10} />

            <View>
              <Text style={{ fontFamily: fonts.primary[600], fontSize: 12 }}>3. Mari memadukan Keutuhan Puisi!</Text>
              <MyGap jarak={10} />
              <JustifiedText style={{ fontFamily: fonts.primary[400], fontSize: 12 }}>
                Susunlah kembali bagungunan struktur puisi yang telah dikerjakan pada kegiatan merakit puisi sebelumnya menjadi sebuah karya puisi yang utuh. Tuliskanlah puisi tersebut ke dalam kotak di bawah ini.
              </JustifiedText>
            </View>

            <MyGap jarak={10} />

            <View>
              <Text style={{ fontSize: 12, fontFamily: fonts.primary[600] }}>Puisi:</Text>
              <MyGap jarak={10} />
              <Isian label='' value={item.tantangan_4} />
            </View>
          </View>
          <MyGap jarak={40} />
        </View>
      </ScrollView>}

      {loading &&

        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}><ActivityIndicator size="large" color={colors.primary} /></View>}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  justifiedText: {
    textAlign: 'justify'
  }
});