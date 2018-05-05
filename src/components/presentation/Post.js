import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import config from '../../config'

class Post extends Component {
    
    constructor(){
        super()
        this.state = {
            screenWidth: Dimensions.get('window').width,
            liked: false
        }
    }
    
    componentDidMount(){
       this.setState({
           screenWidth: Dimensions.get('window').width,
           screenHeight: Dimensions.get('window').height
       })
    }

    likeToggled(){
        this.setState({
            liked: !this.state.liked
        })
    }
    
    render(){

        const imageHeight = Math.floor(this.state.screenHeight * 1.1)
        const imageUri = "https://lh3.googleusercontent.com/SkhoG-TiIpNPC1GP25ezviZ5vK7eT6jGxMVRScToDsZknTyku7l3QlmEY5dvNKT1hgULGV-e4CvvFHBNYAc3DLY7" + "=s" + imageHeight + "-c"

        const heartColour = (this.state.liked) ? 'rgb(252,61,57)' : null

        return(
            <View style={{flex: 1, width: 100 + '%'}}>
                <View style={styles.userBar}>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image 
                            style={styles.userPic}
                            sorce={{
                                uri: "https://lh3.googleusercontent.com/ihqLdYqkE_y_O85sFRQI8cyhU039yQLnjI_k1x0Qs8MNp_rHgByUgPneg8_x-Fg65G4YdbN1X5t4M6EJFDfoQHWeCQ"
                            }}
                        />
                        <Text style={{marginLeft: 10}}>StephenCassedy</Text>
                    </View>

                    <View>
                        <Text style={{fontSize: 30}}>...</Text>
                    </View>

                </View>
                
                <TouchableOpacity 
                    activeOpacity={0.6}
                    onPress={() => {
                    this.likeToggled()
                }}>
                    <Image
                        style={{width: this.state.screenWidth, height: 425}}
                        source={{
                            uri: imageUri
                        }}
                    />
                </TouchableOpacity>
            

                <View style={styles.iconBar}>
                    <Image style={[styles.icon, {tintColor: heartColour}]} source={config.images.heartIcon}/>
                    <Image style={styles.icon} source={config.images.messageIcon}/>
                    <Image style={styles.icon} source={config.images.arrowIcon}/>
                </View>

                <View style={styles.iconBar}>
                    <Image style={styles.likesHeart} 
                        source={config.images.likesHeart}
                    />
                    <Text>125 Likes</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 100 + '%', 
        height: 100
    },
    userBar: {
        width: 100 + '%',
        height: config.styleConstants.rowHeight,
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + '%',
        borderColor: 'rgb(233, 233, 233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        height: 40,
        width: 40,
        marginHorizontal: 3
    },
    likesHeart: {
        height: 20,
        width: 20,
        marginHorizontal: 5
    }
})

export default Post