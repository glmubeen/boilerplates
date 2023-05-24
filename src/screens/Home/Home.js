import React, { useState, useEffect } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, decreaseCartQty, increaseCartQty, removeItem } from '../../redux/cartSlice';
import { decreaseQty, increaseQty, setProduct } from '../../redux/productSlice';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const cartData = useSelector((state) => state.cart);
    const data = useSelector((state) => state.product);
    console.log('[CART DATA]: ', cartData?.length);
    console.log('[DATA]:', data?.length);

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const jsonData = await fetch('https://dummyjson.com/products')
        const result = await jsonData.json()
        const mapData = await result?.products?.map((item) => ({ ...item, qty: 0 }))
        dispatch(setProduct(mapData));

    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View style={{ alignSelf: "center", width: "100%", height: 140, borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
                        <FlatList
                            data={data ? data[0]?.images : []}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={{ width: 352.5, }}>
                                    <Image resizeMode='contain' style={{ width: '100%', height: 140, borderRadius: 20 }} source={{ uri: item }} />
                                </View>
                            )} />
                    </View>
                )}
                renderItem={({ item, index }) => (
                    <TouchableOpacity disabled style={{ alignItems: "center", flexDirection: "row", padding: 10, marginTop: 12, borderRadius: 10, backgroundColor: '#d9d9d9' }}>
                        <Image resizeMode='stretch' style={{ borderRadius: 10, width: 80, height: 80 }} source={{ uri: item.images[0] }} />
                        <View style={{ marginLeft: 18 }}>
                            <Text style={{ color: "#000", fontSize: 18, fontWeight: "700" }}>{item.title}</Text>
                            <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 2 }}>${item.price}</Text>

                            {item.qty == 0 ? (
                                <TouchableOpacity onPress={() => {
                                    dispatch(addToCart(item))
                                    dispatch(increaseQty(item.id))
                                }} style={{ marginTop: 8, alignSelf: 'flex-start', backgroundColor: "#f4511e", padding: 7, borderRadius: 7 }}>
                                    <Text style={{ color: "#fff" }}>ADD TO CART</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={{ width: "50%", marginTop: 8, flexDirection: "row", justifyContent: "space-between" }}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            dispatch(increaseQty(item.id))
                                            dispatch(increaseCartQty(item.id))
                                        }}
                                        style={{ alignItems: "center", justifyContent: "center", backgroundColor: '#f4511e', width: 30, height: 30, borderRadius: 3 }}>
                                        <Text style={{ color: "#fff" }}>+</Text>
                                    </TouchableOpacity>
                                    <Text style={{ marginLeft: 8, marginRight: 8, fontSize: 16, fontWeight: "800" }}>{item?.qty}</Text>
                                    <TouchableOpacity
                                        onPress={() => {
                                            dispatch(decreaseQty(item.id))
                                            dispatch(decreaseCartQty(item.id))
                                            if (item?.qty < 2) {
                                                dispatch(removeItem(item.id))
                                            }
                                        }}
                                        style={{ alignItems: "center", justifyContent: "center", backgroundColor: '#f4511e', width: 30, height: 30, borderRadius: 3 }}>
                                        <Text style={{ color: "#fff" }}>-</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </TouchableOpacity>
                )} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})