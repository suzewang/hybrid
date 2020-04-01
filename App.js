import React, { useState, useEffect } from 'react';
import { Router, Overlay, Modal, Scene, Tabs, Actions,Lightbox } from 'react-native-router-flux';
import Home from './components/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import Goods from './components/Goods';
import My from './components/My';
import MyRelease from './components/MyRelease';
import { Image, TouchableOpacity, AsyncStorage, View, BackHandler, ToastAndroid} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SwiperPage from './components/SwiperPage';
import Login from './components/Login';
import Register from './components/Register';

console.disableYellowBox = true;

const App = () => {
	let [isLogin, setLogin] = useState(false);
	let [isInstall, setInstall] = useState(true);
	let now = 0;
	useEffect(() => {
		AsyncStorage.getItem('isInstall')
			.then(res => {
				if (res) {
					setInstall(false);
				}
			})
		AsyncStorage.getItem('user')
			.then(res => {
				let user = JSON.parse(res)
				if (!user) {
					SplashScreen.hide();
				}
				if (user && user.token) {
					setLogin(true);
					SplashScreen.hide();
				}
			})
	}, []);
	let afterInstall = () => {
		setInstall(false);
	}
	if (isInstall) {
		return <View style={{ flex: 1 }}>
			<SwiperPage afterInstall={afterInstall} />
		</View>
	}
	return (
		<Router
			backAndroidHandler={() => {
				if (Actions.currentScene == 'login' || Actions.currentScene == 'home') {
					if (new Date().getTime() - now < 2000) {
						BackHandler.exitApp();
					} else {
						ToastAndroid.show('确定要退出吗', 100);
						now = new Date().getTime();
						return true;
					}
				}
			}}
		>
			<Overlay>
				<Modal key="modal" >
					<Scene key="root" hideNavBar>
						<Tabs
							key='tabbar'
							hideNavBar
							activeTintColor="red"
							inactiveTintColor="gray"
							tabBarStyle={{ backgroundColor: '#ccc' }}
						>
							<Scene key='homePage'
								hideNavBar={true}
								title='首页'
								icon={
									({ focused }) => <Icon
										color={focused ? 'red' : 'gray'}
										name="home"
										size={25}
									/>
								}
							>
								<Scene key='home' component={Home} />
							</Scene>
							<Scene
								key='goodsPage'
								hideNavBar={true}
								title="商品分类"
								icon={
									({ focused }) => <Icon
										color={focused ? 'red' : 'gray'}
										name="suitcase"
										size={22}
									/>
								}
							>
								<Scene key="goods" component={Goods} />
							</Scene>
							<Scene
								key='myPage'
								hideNavBar={true}
								title="个人中心"
								icon={
									({ focused }) => <Icon
										color={focused ? 'red' : 'gray'}
										name="user"
										size={22}
									/>
								}
							>
								<Scene key="my" component={My} />
							</Scene>
						</Tabs>
					</Scene>
					<Scene
						key="myrelease"
						component={MyRelease}
						renderBackButton={() => ( //返回按钮图标
							<TouchableOpacity onPress={() => Actions.pop()}>
								<Image style={{ height: 56 }} source={require('./assets/r2.png')} />
							</TouchableOpacity>
						)}
						title="我的发布"
						titleStyle={{ flex: 1, textAlign: 'center', textAlignVertical: 'center', color: 'white', backgroundColor: 'rgb(242,48,48)', width: '100%', height: '100%' }}
						renderRightButton={() => ( //右按钮图标
							<TouchableOpacity>
								<Image style={{ height: 56 }} source={require('./assets/r3.png')} />
							</TouchableOpacity>
						)}
					/>
					<Scene initial={!isLogin} key="login" component={Login} hideNavBar />
					<Scene key="register" component={Register} hideNavBar />
				</Modal>
			</Overlay>
		</Router>
	);
};


export default App;