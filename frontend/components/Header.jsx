import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'
import { colors } from '../styles/styles'
import { useNavigation, useRoute } from '@react-navigation/native'

const Header = ({ back, emptycart = false }) => {

    const navigate = useNavigation();
    const route = useRoute()

    const emptyCartHandler = () => {
        console.log("Empty Cart")
    }

    return (
        <>
            {
                back && (
                    <TouchableOpacity style={{ position: "absolute", top: 40, left: 20, zIndex: 10 }} onPress={() => navigate.goBack()}>
                        <Avatar.Icon style={{ backgroundColor: colors.color4 }} icon={"arrow-left"} color={colors.color3} />
                    </TouchableOpacity>
                )
            }

            <TouchableOpacity style={{ position: "absolute", top: 40, right: 20, zIndex: 10 }} onPress={emptycart ? emptyCartHandler : () => navigate.navigate("cart")}>
                <Avatar.Icon style={{ backgroundColor: colors.color4 }} icon={emptycart ? 'delete-outline' : 'cart-outline'} color={route.name === "productdetailes" ? colors.color2 : colors.color3} />
            </TouchableOpacity>
        </>
    )
}

export default Header