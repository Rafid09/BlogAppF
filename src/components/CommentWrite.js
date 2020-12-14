import React,{useState} from 'react'
import { View } from 'react-native'
import { Card, Button ,Input} from 'react-native-elements'
import AddNotification from '../functions/NotificationFunction'


const WriteComment=({user,postDetails})=>{
    const [comment, setComment] = useState("");
    const input = React.createRef();
    return(<Card containerStyle={{borderRadius:10,marginLeft:5,marginRight:5, shadowOffset:10}}>
        <View style={{flexDirection:'row'}}>
            <Input
            ref={input}
            placeholder='write a comment'
            multiline={true}
            onChangeText={(text)=>{
                setComment(text) 
            }}
            rightIcon={<Button 
                type="clear" 
                disabled={comment.length==0?true:false}
                title='enter⎆' 
                titleStyle={{color:'black'}} onPress={() =>{
                    let newComment={
                        postid:postDetails.id,
                        comment:comment,
                        receiver:postDetails.user_email,
                        sender:user
                    }
                    AddNotification(newComment)
                    setComment("");
                    input.current.clear()
                }}/>}
            />

        </View>
    </Card>)
}

export default WriteComment

