import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    Image,
    Text,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import { Actions } from "react-native-router-flux";

const options = {
    title: '选择头像',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'相册',
    cancelButtonTitle:'取消',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

export default class My extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: '' //用来存放图片地址
        }
    }
    componentWillMount() {
        AsyncStorage.getItem('imgpath').then((res)=>{ //判断是否上传过照片，如果上传过，获取地址显示，如果没有，则显示默认图片
            if(res==null){
                this.setState({
                    imageUrl:require('../assets/m1.png')
                })
            }else{
                const source={uri:res};
                this.setState({
                    imageUrl:source
                })
            }
        })
    }
    takephoto = () => {
        ImagePicker.showImagePicker(options,(response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else {
                const source = { uri: response.uri };
                AsyncStorage.setItem('imgpath', response.uri);
                this.setState({
                    imageUrl: source,
                });
            }
        });
    }
    clear = () => {
        AsyncStorage.removeItem("user");
        Actions.login();
        Actions.reset('login');
    }
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView>
                        <View style={{ width: '100%', height: 300, backgroundColor: 'rgb(242,48,48)', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { this.takephoto() }}>
                                <Image style={{ width: 100, height: 100, top: -10, borderRadius: 50 }} source={this.state.imageUrl} />
                            </TouchableOpacity>
                            <Text style={{ color: 'white', fontSize: 20 }}>BINNU DHILLON</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 60, backgroundColor: 'white', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                            <Icon name="user" size={30} color="gray" style={{ marginLeft: 15 }} />
                            <Text style={{ fontSize: 17, color: 'gray', marginLeft: 15 }}>我的个人中心</Text>
                        </View>
                        <View style={{ width: '100%', height: 300, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <TouchableOpacity style={{ width: '33%', height: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="gear" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>账户管理</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '33%', height: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="map-marker" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>收货地址</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '33%', height: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="credit-card" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>我的信息</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '33%', height: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="list-alt" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>我的订单</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '33%', height: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="qrcode" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>我的二维码</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '33%', height: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="database" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>我的积分</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '33%', height: '33%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="star-o" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>我的收藏</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', height: 60, backgroundColor: 'white', marginTop: 7, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'gray', borderBottomWidth: 1 }}>
                            <Icon name="tag" size={30} color="gray" style={{ marginLeft: 15 }} />
                            <Text style={{ fontSize: 17, color: 'gray', marginLeft: 15 }}>E族活动</Text>
                        </View>
                        <View style={{ width: '100%', height: 200, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                            <TouchableOpacity style={{ width: '33%', height: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="wrench" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>居家维修保养</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '33%', height: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="car" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>出行接送</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '33%', height: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="user" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>我的受赠人</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '33%', height: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="bed" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>我的住宿优惠</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '33%', height: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="flag" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>我的活动</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Actions.myrelease()} style={{ width: '33%', height: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name="edit" size={30} color="gray" />
                                <Text style={{ color: 'gray', marginTop: 5 }}>我的发布</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', height: 80, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => {
                                this.clear();
                            }} style={{ width: 80, height: 30, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                                <Text style={{ color: 'white' }}>退出登录</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        )
    }
}
