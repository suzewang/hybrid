import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

export default class Home extends Component {
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView>
                        <View style={{width:'100%',height:'120%'}}>
                        <View style={{ flexDirection: 'row', width: '100%', height: 50, backgroundColor: 'rgb(242,48,48)', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '85%', height: 30, backgroundColor: 'rgb(251,184,184)', borderRadius: 15, paddingLeft: 15, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                                <Icon style={{position:'absolute',left:'5%'}} name="search" size={20} color="white" />
                                <TextInput placeholderTextColor="white" placeholder="请输入您要搜索的关键字" style={{ width: '95%',position:'absolute',left:'10%'}} />
                            </View>
                            <Icon name="shopping-cart" size={30} color="white" style={{ marginLeft: 5 }} />
                        </View>
                        <View>
                            <Swiper height={200} paginationStyle={{ bottom: 10 }} autoplay={true}>
                                <Image source={require('../assets/vip.png')} style={{ width: '100%', height: '100%' }} />
                                <Image source={require('../assets/vip.png')} style={{ width: '100%', height: '100%' }} />
                                <Image source={require('../assets/vip.png')} style={{ width: '100%', height: '100%' }} />
                            </Swiper>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 80, backgroundColor: 'white', marginTop: 10, alignItems: 'center' }}>
                            <Image source={require('../assets/s1.png')} style={{ width: 70, height: 70, marginLeft: 15 }} />
                            <Text style={{ fontSize: 20, marginLeft: 30 }}>居家维修保养</Text>
                            <Icon style={{ marginLeft: '42%' }} name="angle-right" size={20} />
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 80, backgroundColor: 'white', marginTop: 10, alignItems: 'center' }}>
                            <Image source={require('../assets/s2.png')} style={{ width: 70, height: 70, marginLeft: 15 }} />
                            <Text style={{ fontSize: 20, marginLeft: 30 }}>住宿优惠</Text>
                            <Icon style={{ marginLeft: '50%' }} name="angle-right" size={20} />
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 80, backgroundColor: 'white', marginTop: 10, alignItems: 'center' }}>
                            <Image source={require('../assets/s3.png')} style={{ width: 70, height: 70, marginLeft: 15 }} />
                            <Text style={{ fontSize: 20, marginLeft: 30 }}>出行接送</Text>
                            <Icon style={{ marginLeft: '50%' }} name="angle-right" size={20} />
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 80, backgroundColor: 'white', marginTop: 10, alignItems: 'center' }}>
                            <Image source={require('../assets/s4.png')} style={{ width: 70, height: 70, marginLeft: 15 }} />
                            <Text style={{ fontSize: 20, marginLeft: 30 }}>E族活动</Text>
                            <Icon style={{ marginLeft: '51%' }} name="angle-right" size={20} />
                        </View>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30, borderRadius: 7, left: '11%', width: '80%', height: 50, backgroundColor: 'rgb(242,48,48)' }}>
                            <Text style={{ color: 'white', fontSize: 20 }}>发布需求</Text>
                        </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}