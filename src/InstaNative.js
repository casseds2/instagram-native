import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Post } from './components/presentation'
import { PostFeed } from './components/container'

class InstaNative extends Component {

    render(){
        return(
            <View style={{flex: 1, width: 100 + '%', height: 100 + '%'}}>
                <View style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                <PostFeed />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tempNav: {  
        width: 100 + '%', 
        height: 56,
        marginTop: 10,         
        backgroundColor:'rgb(250, 250, 250)',
        borderBottomColor: 'rgb(233, 233, 233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default InstaNative