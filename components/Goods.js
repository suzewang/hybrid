import React, { Component } from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	Text
} from 'react-native';

export default class Goods extends Component {
	render() {
		return (
			<>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>
					<ScrollView>
						<View style={{width:'100%',height:'100%'}}>
						<View style={{ flexDirection: 'row', height: 55, justifyContent: "center", alignItems: 'center', backgroundColor: 'rgb(255,255,255)' }}>
							<View style={{
								width: '85%',
								height: 40,
								backgroundColor: 'rgb(238,238,238)',
								flexDirection: 'row',
								borderRadius: 5,
								paddingLeft: 5,
							}}>
								<TextInput placeholder='请输入商品名称' placeholderTextColor="gray" />
								<TouchableOpacity style={{ justifyContent: 'center',position:'absolute',left:'90%',top:10}}>
									<Image style={{ width: 20, height: 20 }} source={require('../assets/search.png')} />
								</TouchableOpacity>
							</View>
						</View>
						<View style={{ justifyContent: 'center', flexDirection: 'row', width: '100%', backgroundColor: 'rgb(255,255,255)' }}>
							<View style={{ width: '97%', height: 50, backgroundColor: 'rgb(255,255,255)', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
								<TouchableOpacity>
									<Text style={{ fontSize: 15, color: 'red' }}>综合</Text>
								</TouchableOpacity>
								<TouchableOpacity>
									<Text style={{ fontSize: 15 }}>销量</Text>
								</TouchableOpacity>
								<TouchableOpacity>
									<Text style={{ fontSize: 15 }}>新品</Text>
								</TouchableOpacity>
								<TouchableOpacity>
									<Text style={{ fontSize: 15 }}>价格</Text>
								</TouchableOpacity>
								<TouchableOpacity>
									<Text style={{ fontSize: 15 }}>信用</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View style={{ justifyContent: 'center', flexDirection: 'row' }}>
							<View style={{ width: '94%', backgroundColor: 'rgb(250,250,250)', height: 1000, top: 13, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
								<View style={{ width: '49%', height: 300, backgroundColor: 'rgb(255,255,255)', marginBottom: 10, alignItems: 'center' }}>
									<Image style={{ width: 120, height: 190, top: 20 }} source={require('../assets/g1.png')} />
									<Text style={{ top: 35, left: 5 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
									<Text style={{ color: 'red', top: 50 ,left: '-35%'}}>36.00</Text>
								</View>
								<View style={{ width: '49%', height: 300, backgroundColor: 'rgb(255,255,255)', alignItems: 'center' }}>
									<Image style={{ width: 120, height: 190, top: 20 }} source={require('../assets/g1.png')} />
									<Text style={{ top: 35, left: 5 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
									<Text style={{ color: 'red', top: 50, left: '-35%' }}>36.00</Text>
								</View>
								<View style={{ width: '49%', height: 300, backgroundColor: 'rgb(255,255,255)', marginBottom: 10, alignItems: 'center' }}>
									<Image style={{ width: 120, height: 190, top: 20 }} source={require('../assets/g1.png')} />
									<Text style={{ top: 35, left: 5 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
									<Text style={{ color: 'red', top: 50, left: '-35%' }}>36.00</Text>
								</View>
								<View style={{ width: '49%', height: 300, backgroundColor: 'rgb(255,255,255)', alignItems: 'center' }}>
									<Image style={{ width: 120, height: 190, top: 20 }} source={require('../assets/g1.png')} />
									<Text style={{ top: 35, left: 5 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
									<Text style={{ color: 'red', top: 50, left: '-35%' }}>36.00</Text>
								</View>
								<View style={{ width: '49%', height: 300, backgroundColor: 'rgb(255,255,255)', alignItems: 'center' }}>
									<Image style={{ width: 120, height: 190, top: 20 }} source={require('../assets/g1.png')} />
									<Text style={{ top: 35, left: 5 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
									<Text style={{ color: 'red', top: 50, left: '-35%' }}>36.00</Text>
								</View>
								<View style={{ width: '49%', height: 300, backgroundColor: 'rgb(255,255,255)', alignItems: 'center' }}>
									<Image style={{ width: 120, height: 190, top: 20 }} source={require('../assets/g1.png')} />
									<Text style={{ top: 35, left: 5 }}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
									<Text style={{ color: 'red', top: 50, left: '-35%' }}>36.00</Text>
								</View>
							</View>
						</View>
						</View>
					</ScrollView>
				</SafeAreaView>
			</>
		)
	}
}