// import { View, Text, StyleSheet, Animated, useWindowDimensions, PanResponder } from 'react-native'
// import React, { useRef, useState } from 'react'
// import { Ionicons, MaterialIcons,Entypo , Octicons, AntDesign,SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { Divider } from 'react-native-elements';



// const ExtendScreen = () => {
//     // const scroll = useRef(new Animated.Value(0)).current;
//     // const scrollY = useRef(new Animated.Value(0)).current;
//     // const {height: windowHeight} = useWindowDimensions();

//     // const pan = useRef(new Animated.ValueXY()).current;

//     // const panResponder = PanResponder.create({
//     //     onStartShouldSetPanResponder: () => true,
//     //     onPanResponderMove: Animated.event([
//     //       null,
//     //       {
//     //         dx: pan.x, // x,y are Animated.Value
//     //         dy: pan.y,
//     //       },
//     //     ]),
//     //     onPanResponderRelease: () => {
//     //       Animated.spring(
//     //         pan, // Auto-multiplexed
//     //         {toValue: {x: 0, y: 0}, useNativeDriver: true}, // Back to zero
//     //       ).start();
//     //     },
//     //   });
//     // const positionY = useState(new Animated.Value(0))[0];

//     // const scrollY = () => {
//     //     // Will change fadeAnim value to 1 in 5 seconds
//     //     Animated.timing(positionY, {
//     //       toValue: 200,
//     //       duration: 1000,
//     //       useNativeDriver: true,
//     //     }).start();
//     //   };

//     // const scrollUp = () =>{
//     //     Animated.timing(200,{
//     //         toValue:0,
//     //         duration:2000,
//     //         useNativeDriver:true,
//     //     }).start();
//     // };


//     const pan = useRef(new Animated.ValueXY()).current;

//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//     //   onPanResponderGrant: () => {
//     //     pan.setOffset({x: 0, y:0});
//     //   },
//       onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y, }], {useNativeDriver:false}),

//       onPanResponderRelease: () => {
//         // pan.extractOffset();

//         Animated.spring(pan, {
//             toValue:{x:0, y:200},
//             duration:5000,
//             useNativeDriver:true
//         }).start();
//       },
//     }),
//   ).current;

//   return (
//     <Animated.View  style = {
        
//             {
//                 flex: 1,
//                 transform: [{translateY:pan.y}],
//                 backgroundColor:'black',
//                 opacity:0.9,
//                 position:'absolute',
//                 top:"35%",
//                 height:'65%',
//                 width:'100%',
//                 borderTopRightRadius: 20,
//                 borderTopLeftRadius:20
//             }
        
//     }  {...panResponder.panHandlers} >
//         <View >
       
//             <View style={{alignItems:'center'}} >
//                 <Entypo name="minus" size={50} color="white" />
//             </View>

//             <View style={styles.iconOptions}>
//                 <View style={{flexDirection:'column', alignItems:'center',}}>
//                     <View style={styles.icon}>
//                         <Ionicons name="ios-bookmark-outline" size={30} color="white" />
//                     </View>
//                     <Text style={{color:'white', fontWeight:600, }} >Lưu</Text>
//                 </View>

//                 <View style={{flexDirection:'column', alignItems:'center'}}>
//                     <View style={styles.icon}>
//                         <Octicons name="diff-added" size={30} color="white" />  
//                     </View>
//                     <Text style={{color:'white', fontWeight:600, }}>Lưu</Text>
//                 </View>
//                 <View style={{flexDirection:'column', alignItems:'center'}}>
//                     <View style={styles.icon}>
//                     <MaterialIcons name="qr-code-scanner" size={30} color="white" />
//                     </View>
//                     <Text style={{color:'white', fontWeight:600, }}>Lưu</Text>
//                 </View>
//             </View>
//             <Divider width={0.2} orientation='vertical' />

//             <View style= {{flexDirection:'row', height:60, justifyContent:'flex-start', alignItems:'center', paddingLeft:20}}>
//                 <AntDesign name="staro" size={28} color="white" />
//                 <Text style={{color:'white', paddingLeft:12, fontSize:16, }}>Thêm vào mục ưu thích</Text>
//             </View>
//             <View style= {{flexDirection:'row', height:60, justifyContent:'flex-start', alignItems:'center', paddingLeft:20}}>
//                 <SimpleLineIcons name="user-unfollow" size={28} color="white" />
//                 <Text style={{color:'white', paddingLeft:12,fontSize:16,}}>Bỏ theo dõi</Text>
//             </View>

//             <Divider width={0.2} orientation='vertical'/>

//             <View style= {{flexDirection:'row', height:60, justifyContent:'flex-start', alignItems:'center', paddingLeft:20}}>
//                 <Ionicons name="information-circle-outline" size={28} color="white" />
//                 <Text style={{color:'white', paddingLeft:12,fontSize:16, }}>Lý do bạn nhìn thấy bài viết này</Text>
//             </View>
//             <View style= {{flexDirection:'row', height:60, justifyContent:'flex-start', alignItems:'center', paddingLeft:20}}>
//                 <Ionicons name="eye-off-outline" size={28} color="white" />
//                 <Text style={{color:'white', paddingLeft:12,fontSize:16,}}>Ẩn</Text>
//             </View>
//             <View style= {{flexDirection:'row', height:60, justifyContent:'flex-start', alignItems:'center', paddingLeft:20}}>
//                 <MaterialCommunityIcons name="account-circle-outline" size={28} color="white" />
//                 <Text style={{color:'white', paddingLeft:12,fontSize:16,}}>Giới thiệu về tài khoản này</Text>
//             </View>

//             <View style= {{flexDirection:'row', height:60, justifyContent:'flex-start', alignItems:'center', paddingLeft:20}}>
//                 <MaterialCommunityIcons name="message-alert-outline" size={28} color="red" />
//                 <Text style={{color:'red', paddingLeft:12,fontSize:16,}}>Báo cáo</Text>
//             </View>
        
//             </View>
        
//     </Animated.View>
        

    
//   )
// }


// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
        
//         backgroundColor:'black',
//         opacity:0.9,
//         position:'absolute',
//         top:"35%",
//         height:'65%',
//         width:'100%',
//         borderTopRightRadius: 20,
//         borderTopLeftRadius:20
//     },

//     iconOptions:{
//         paddingTop: 10,
//         paddingBottom: 12,
//         flexDirection:'row',
//         alignItems:'center',
//         justifyContent:'space-around',
//     },
//     icon:{
//         width:50,
//         height:50,
//         borderRadius:50,
//         alignItems:'center',
//         justifyContent:'center',
//         borderColor:'white',
//         borderWidth:1
//     }
// })

// export default ExtendScreen