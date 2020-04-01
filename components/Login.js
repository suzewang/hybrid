import React, { Component } from 'react';
import { View, Text, TextInput, AsyncStorage, TouchableOpacity, ToastAndroid, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { myFetch } from './utils/util';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      pwd: '',
      isloading: false
    }
  }
  userhandle = (text) => {
    this.setState({ username: text })
  }
  pwdhandle = (text) => {
    this.setState({ pwd: text })
  }
  login = () => {
    if (this.state.username == "" || this.state.pwd == "") {
      ToastAndroid.show("用户名或密码不能为空！", 100);
    } else {
      this.setState({ isloading: true })
      myFetch.post('/login', {
        username: this.state.username,
        pwd: this.state.pwd
      }
      ).then(res => {
        AsyncStorage.setItem('user', JSON.stringify(res.data))
          .then(() => {
            this.setState({ isloading: false })
            Actions.homePage();
          })
      })
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Image style={{ position: 'absolute', width: '100%', height: '100%' }} source={require('../assets/login.png')} />
        <View
          style={{ alignItems: 'center' }}>
          <Text style={{ marginBottom: 20, fontSize: 30 }}>欢迎使用</Text>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="gray" size={18} />
            <TextInput placeholder="用户名"
              onChangeText={this.userhandle}
              placeholderTextColor="gray"
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="lock" color="gray" size={20} />
            <TextInput
              onChangeText={this.pwdhandle}
              placeholder="密码"
              secureTextEntry={true}
              placeholderTextColor="gray"
            />
          </View>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 40,
              backgroundColor: '#53FF53',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20
            }}
            onPress={this.login}>
            <Text>登录</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 40,
              backgroundColor: '#66B3FF',
              marginTop: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20
            }}
            onPress={() => Actions.register()}>
            <Text>注册</Text>
          </TouchableOpacity>
        </View>
        {
          this.state.isloading
            ? ToastAndroid.show('正在登录', 100)
            : null
        }
      </View>
    );
  }
}