import { View, Text, ImageBackground, ScrollView, Image, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import { MyGap, MyHeader } from '../../components'
import { MyDimensi, colors, fonts } from '../../utils'
import { Icon } from 'react-native-elements'


export default function Orientasi({navigation}) {
  const backPage = () => {
    navigation.goBack()
  };
  return (
  <ImageBackground source={require('../../assets/bghome.png')} style={{
    flex:1,
    width:'100%',
    height:"100%"
  }}>
 {/* HEADERS */}
 <View style={{padding:10, backgroundColor:colors.secondary, borderBottomRightRadius:20, borderBottomLeftRadius:20,
 flexDirection:"row"}}>
 <View style={{justifyContent:'center'}}>
        <TouchableNativeFeedback onPress={backPage}>
        <Icon type='ionicon' name='chevron-back-outline' size={MyDimensi / 2} color={colors.tertiary} />
        </TouchableNativeFeedback>
 </View>

 <View style={{alignSelf:'center', justifyContent:"center", left:80}}>
    <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:"center"}}>Langkah Pertama</Text>
    <Text style={{fontFamily:fonts.primary[600], fontSize:25, textAlign:'center'}}>Orientasi</Text>
 </View>

 </View>


    <ScrollView>
    <View style={{padding:10,}}>

    <View style={{padding:10 ,}}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>Tahap Orientasi: Mengenal Puisi dan <Text style={{fontStyle:'italic'}}>Dolabololo</Text> </Text>
        <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>• Apa itu puisi ?</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>   Puisi merupakan jenis karya sastra yang bentuknya dipilih{'\n'}dan ditata dengan cermat sehingga mampu mempertajam{'\n'}kesadaran orang akan sesuatu pengalaman dan{'\n'}membangkitkan tanggapan khusus melalui bunyi, irama, dan{'\n'}makna khusus. Puisi juga merupakan seni berbahasa, yang{'\n'}disusun dengan menggunakan bahasa sebagai bahan baku dalam sebuah karya sastra.</Text>
       </View>
    </View>

    <View style={{padding:10 , top:-10}}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>• Apa saja unsur pembangun sebuah puisi ?</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Unsur pembangun sebuah puisi terdiri dari unsur instrinstik dan ektrinstik. Unsur pembangun intrinsik adalah unsur yang terdapat di dalam puisi dan terbagi menjadi dua, yaitu unsur batin dan fisik. Dalam unsur batin terdapat amanat, tema, rasa, dan nada, sedangkan dalam unsur fisik terdapat diksi, tipografi, imaji, rima, dan gaya bahasa.</Text>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left', top:10}}>Berikut penjelasanya :</Text>
       </View>
    </View>


    <View style={{padding:10 , top: -10}}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>Unsur Batin</Text>
        <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Tema</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Tema adalah gagasan pokok dalam puisi, dengan adanya tema maka seorang penyair dapat menentukan diksi yang akan digunakannya</Text>
       </View>
        <MyGap jarak={10}/>
       <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Rasa</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Rasa adalah ungkapan perasaan seorang penyair yang dituangkan ke dalam puisinya.</Text>
       </View>
       <MyGap jarak={10}/>
       <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Nada</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Nada adalah cara seorang penyair menyampaikan puisi dengan susunan kata-katanya, nada juga dianggap sebagai sikap seorang penyair dalam puisi sehingga efeknya dapat terasa oleh para pembaca.</Text>
       </View>
       <MyGap jarak={10}/>
       <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Amanat</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>   Amanat adalah pesan yang ingin disampaikan seorang penyair kepada pembaca puisinya.</Text>
       </View>
    </View>


    <View style={{padding:10 , top: -10}}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:12, }}>Unsur Fiksi</Text>
        <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Diksi</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Diksi adalah pilihan kata yang tepat. Dengan menggunakan diksi maka puisi jadi terkesan lebih indah dan berguna sebagai unsur yang membantu penyair dalam mengungkapkan ekspresinya.</Text>
       </View>
        <MyGap jarak={10}/>
       <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Tipografi</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Tipografi adalah tata cara peletakan huruf dalam puisi, tipografi juga berguna untuk menggambarkan tema dan isi pada puisi.</Text>
       </View>
       <MyGap jarak={10}/>
       <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Imaji</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Nada adalah cara seorang penyair menyampaikan puisi dengan susunan kata-katanya, nada juga dianggap sebagai sikap seorang penyair dalam puisi sehingga efeknya dapat terasa oleh para pembaca.</Text>
       </View>
       <MyGap jarak={10}/>
       <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Rima</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Rima adalah kesamaan bunyi atau nada.</Text>
       </View>
       <MyGap jarak={10}/>
       <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Gaya Bahasa</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Gaya bahasa adalah cara penyair dalam menggunakan rangkaian kata guna mengungkapkan sesuatu.</Text>
       </View>
       <MyGap jarak={10}/>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Selanjutnya Unsur pembangun ekstrinsik adalah unsur yang terdapat di luar puisi dan terbagi menjadi tiga, yaitu unsur biografi, unsur sosial, dan unsur nilai. Berikut ini penjelasannya:</Text>
       </View>
       <MyGap jarak={10}/>
       <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Biografi</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Unsur biografi adalah unsur yang berkaitan dengan latar belakang seorang penyair.</Text>
       </View>
       <MyGap jarak={10}/>
       <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Sosial</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Unsur sosial adalah unsur yang berkaitan dengan kondisi masyarakat ketika puisi itu dibuat.</Text>
       </View>
       <MyGap jarak={10}/>
       <Text style={{fontFamily:fonts.primary[400], fontSize:12, }}>• Nilai</Text>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}>    Unsur nilai adalah unsur yang berkaitan dengan pendidikan, politik, sosial, ekonomi, budaya, adat istiadat, dan lainnya.</Text>
       </View>
       <MyGap jarak={10}/>
       <View style={{}}>
       <Text style={{fontFamily:fonts.primary[400], fontSize:10, textAlign:'left'}}><Text style={{fontFamily:fonts.primary[600]}}>Contoh Puisi</Text> Karya Sapardi Djoko Damono dengan Judul “yang fana adalah waktu”</Text>
       </View>
    </View>

    <View style={{padding:10, backgroundColor:colors.white, borderRadius:10, }}>
      <Text style={{fontFamily:fonts.primary[800], textAlign:'left', fontSize:10}}>YANG FANA ADALAH WAKTU - SAPARDI DJOKO DAMONO</Text>
      <Text style={{fontFamily:fonts.primary[400], textAlign:'left', fontSize:10}}>Yang fana adalah waktu. Kita abadi:{'\n'}memungut detik demi detik, merangkainya seperti bunga{'\n'}sampai pada suatu hari{'\n'}kita lupa untuk apa.{'\n'}“Tapi, yang fana adalah waktu, bukan?”{'\n'}tanyamu.{'\n'}Kita abadi.{'\n'}{'\n'}Perahu Kertas,{'\n'}Kumpulan Sajak,{'\n'}1982</Text>
    </View>
    <MyGap jarak={20}/>
    <TouchableNativeFeedback onPress={() => navigation.navigate('OrientasiInput')}>
      <View style={{padding:10, backgroundColor:colors.tertiary, borderRadius:30, }}>
        <Text style={{fontFamily:fonts.primary[600], fontSize:12, textAlign:'center', color:"white"}}>Selanjutnya</Text>
      </View>
    </TouchableNativeFeedback>

    </View>
    </ScrollView>
  </ImageBackground>
  )
}