import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'

export default class MyRelease extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            page: 1
        }
    }
    componentWillMount() {
        fetch('https://cnodejs.org/api/v1/topics?limit=10').then(res => res.json()).then(res => {
            this.setState({
                data: res.data
            })
        })
        ToastAndroid.show('正在加载数据，请稍等',100);
    }
    up = () => {
        if (this.state.page == 1) {
            ToastAndroid.show('已经是第一页', 100);
        } else {
            ToastAndroid.show('正在跳转上一页',100);
            var uppage = this.state.page;
            uppage--;
            fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + uppage).then(res => res.json()).then(res => {
                this.setState({
                    data: res.data,
                    page: uppage
                })
            })
        }
    }
    down = () => {
        ToastAndroid.show('正在跳转下一页', 100);
        var downpage = this.state.page;
        downpage++;
        fetch('https://cnodejs.org/api/v1/topics?limit=10&page=' + downpage).then(res => res.json()).then(res => {
            this.setState({
                data: res.data,
                page: downpage
            })
        })
    }
    render() {
        return (
            <View style={{ width: '100%', height: '100%',flex:1 }}>
                <View style={{ paddingLeft: 10, marginTop: 10 }}>
                    {
                        this.state.data.map((item) => {
                            var randomNumber = parseInt(Math.random() * 2);
                            var randomAnswer = '';
                            var textColor = '';
                            if (randomNumber == 0) {
                                randomAnswer = "待回复";
                                textColor = "rgb(242,48,48)";
                            } else {
                                randomAnswer = "已回复";
                                textColor = "black";
                            }
                            if (item.title.length > 15) { //判断标题长度是否超过15
                                return (
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 13 }}>{item.title.slice(0, 15)}...{"\n"}</Text>
                                        <Text style={{ position: 'absolute', left: '60%' }}>{item.create_at.slice(0, 10)}</Text>
                                        <Text style={{ color: textColor, position: 'absolute', left: '85%' }}>{randomAnswer}</Text>
                                    </View>
                                )
                            } else {
                                return (
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 13 }}>{item.title}{"\n"}</Text>
                                        <Text style={{ position: 'absolute', left: '60%' }}>{item.create_at.slice(0, 10)}</Text>
                                        <Text style={{ color: textColor, position: 'absolute', left: '85%' }}>{randomAnswer}</Text>
                                    </View>
                                )
                            }
                        })
                    }
                    <View style={{ flexDirection: 'row', alignItems: 'center',width:'95%' }}>
                        <TouchableOpacity onPress={this.up} style={{ width: '25%', height: 40, backgroundColor: 'rgb(242,48,48)', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>上一页</Text>
                        </TouchableOpacity>
                        <Text style={{ marginLeft: '20%' }}>第{this.state.page}页</Text>
                        <TouchableOpacity onPress={this.down} style={{ marginLeft: '20%', width: '25%', height: 40, backgroundColor: 'rgb(242,48,48)', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>下一页</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
