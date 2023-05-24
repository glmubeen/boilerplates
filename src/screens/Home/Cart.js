import React, { useState, useEffect, useMemo } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQty, increaseQty } from '../../redux/productSlice';
import { decreaseCartQty, increaseCartQty, removeItem } from '../../redux/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart);

    console.log('[CART DATA]: ', cartData?.length);

    const price = useMemo(() => {
        let amount = 0;
        let qty = 0;
        cartData.map((item) => {
            amount += (item.price * item.qty)
            qty += item.qty
        })
        return { amount, qty }
    }, [cartData])


    return (
        <>
            <View style={{ padding: 10 }}>
                <FlatList
                    data={cartData}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity disabled style={{ alignItems: "center", flexDirection: "row", padding: 10, marginTop: 12, borderRadius: 10, backgroundColor: '#d9d9d9' }}>
                            <Image resizeMode='stretch' style={{ borderRadius: 10, width: 80, height: 80 }} source={{ uri: item.images[0] }} />
                            <View style={{ marginLeft: 18 }}>
                                <Text style={{ color: "#000", fontSize: 18, fontWeight: "700" }}>{item.title}</Text>
                                <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 2 }}>${item.price}</Text>
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
                            </View>
                        </TouchableOpacity>
                    )} />


            </View>
            {cartData?.length > 0 && <View style={{
                padding: 10, flexDirection: "row",
                justifyContent: "space-between", position: "absolute",
                bottom: 0, left: 0, right: 0, width: "100%", height: 70,
                backgroundColor: "#f4511e"
            }}>
                <View>
                    <Text style={{ color: '#fff', fontWeight: "500", fontSize: 16 }}>Qty: </Text>
                    <Text style={{ color: '#fff', fontWeight: "500", fontSize: 20 }}>Total Amount:</Text>
                </View>
                <View>
                    <Text style={{ textAlign: "right", color: '#fff', fontWeight: "500", fontSize: 16 }}>{price.qty}</Text>
                    <Text style={{ textAlign: "right", color: '#fff', fontWeight: "500", fontSize: 20 }}>${price.amount}</Text>
                </View>
            </View>}
        </>
    )
}

export default Cart

const styles = StyleSheet.create({})