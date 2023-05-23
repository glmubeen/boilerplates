import React, { useState, useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, decreaseCartQty, increaseCartQty, removeItem } from '../redux/cartSlice';
import { decreaseQty, increaseQty } from '../redux/productSlice';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const cartData = useSelector((state) => state.cart);
    const data = useSelector((state) => state.product);
    console.log('[CART DATA]: ', cartData);
    console.log('[DATA]: ', data);


    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <TouchableOpacity disabled onPress={() => navigation.navigate("Other")} style={{ flexDirection: "row", padding: 10, marginTop: 10, borderRadius: 10, backgroundColor: '#d9d9d9' }}>
                        <Image style={{ width: 80, height: 80 }} source={{ uri: item.img }} />
                        <View style={{ marginLeft: 10 }}>
                            <Text>{item.title}</Text>
                            <Text>{item.price}</Text>

                            {item.qty == 0 ? (
                                <TouchableOpacity onPress={() => {
                                    dispatch(addToCart(item))
                                    dispatch(increaseQty(item.id))
                                }} style={{ alignSelf: 'flex-start', backgroundColor: "red", padding: 7, borderRadius: 7 }}>
                                    <Text>ADD TO CART</Text>
                                </TouchableOpacity>
                            ) :
                                (
                                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                        <TouchableOpacity onPress={() => {
                                            dispatch(increaseQty(item.id))
                                            dispatch(increaseCartQty(item.id))
                                        }} style={{ backgroundColor: 'red', padding: 6, borderRadius: 3 }}>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                        <Text>{item?.qty}</Text>
                                        <TouchableOpacity onPress={() => {
                                            dispatch(decreaseQty(item.id))
                                            dispatch(decreaseCartQty(item.id))
                                            if (item?.qty < 2) {
                                                dispatch(removeItem(item.id))
                                            }
                                        }} style={{ backgroundColor: 'red', padding: 6, borderRadius: 3 }}>
                                            <Text>-</Text>
                                        </TouchableOpacity>

                                    </View>
                                )}
                        </View>
                    </TouchableOpacity>
                )}

            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})