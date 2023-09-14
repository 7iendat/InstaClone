import { View, Text, Image,  TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { Feather, AntDesign,Ionicons ,  FontAwesome5 , Entypo} from '@expo/vector-icons';





const Post = ({post}) => {
  return (
    <View style = {{marginBottom: 30}}>
      <Divider width={1} orientation='vertical'/>
      <PostHeader post={post}/>
      <PostImage post = {post}/>
      <View style={{marginHorizontal:12, marginVertical:5}}>
        <PostFooter />
      </View>
      <Like post = {post}/>
      <Caption post = {post}/>
      <CommentSection post={post}/>
      <Comments post = {post}/>
    </View>
  )
}

const PostHeader = ({post}) => {
    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginLeft:5}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={{uri: post.profile_picture}} style={styles.story}/>
                <Text style={{color:'white', fontWeight:600, marginLeft: 6}}>{post.user}</Text>
            </View>

            <Entypo name="dots-three-vertical" size={24} color="white " />
            
        </View>
    )
}

const PostImage = ({post}) => {
    return (
        <View style={{width: '100%', height: 500}}>
          
            <Image source={{uri: post.imgUrl}} style ={{height:'100%', resizeMode:'cover'}}/>
            
        </View>
    )
}

const PostFooter = () =>
(
    <View style={{flexDirection:'row'}}>
        <View style = {styles.leftPostFooter} >
            <TouchableOpacity style={styles.footerIcon}>
                <AntDesign name="hearto" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon}>
                <Feather name="message-circle" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon}>
                <Ionicons name="ios-paper-plane-outline" size={24} color="white" />
            </TouchableOpacity>
        </View>

        <View style = {{flex:1, alignItems:'flex-end', marginRight:10}}>
            <TouchableOpacity >
                <FontAwesome5 name="bookmark" size={24} color="white" />
            </TouchableOpacity>
        </View>
        
    </View>
)

// const Icon = ({imgStyle, imgUrl}) =>(
//     <TouchableOpacity>
//         <Image style = {imgStyle} source={{uri: imgUrl}}/>
//     </TouchableOpacity>
// )

const Like = ({post}) => (
    <Text style = {{color: 'white', marginHorizontal:16, fontWeight: 600}}>{post.likes} lượt thích</Text>
)

const Caption = ({post}) => (
    <View style ={{marginTop:4, marginHorizontal:16}}>
        <Text >
            <Text style = {{color:'white', fontWeight:600}}>{post.user} </Text>
            <Text style={{color:'white'}}>{post.caption}</Text>
        </Text>
    </View>

)

const CommentSection = ({post}) =>(
    <Text style={{color:'gray', marginHorizontal: 12, marginTop: 6}}>{post.comments.length > 0 ? 'Xem tất cả' +' ' + post.comments.length + ' bình luận': ''}</Text>
)

const Comments = ({post}) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection:'row'}}>
                <Text style={{color:'white', marginHorizontal:12}}>
                    <Text style ={{fontWeight:600}}>{comment.user} </Text>
                    {comment.comment}
                </Text>
            </View>
        ) )}
    </>
)

const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        borderColor:'#ff8501',
        borderWidth:2,
        margin: 6
    },
    footerIcon:{
        width:28,
        height:28,
        marginHorizontal: 4
        
    },
    leftPostFooter:{
        flexDirection:'row',
        width: '32%',
        justifyContent:'center'
    }
})

export default Post