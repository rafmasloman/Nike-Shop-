import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import ArrowRightIcon from '../../../public/img/icons/fi-rr-arrow-small-right.svg';

const Card = ({imageURL, name, price}) => {
  return (
    <TouchableOpacity style={style.card}>
      <View>
        <Image source={imageURL} style={style.image} />
      </View>
      <View style={style.control}>
        <View>
          <Text style={style.name}>{name}</Text>
          <Text style={style.price}>${price}</Text>
        </View>
        <TouchableOpacity style={style.btnIcon}>
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  card: {
    display: 'flex',
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  image: {
    width: 160,
    height: 160,
  },
  name: {
    fontSize: 16,
    fontFamily: 'WorkSans-Bold',
    color: 'black',
  },
  price: {
    fontSize: 16,
    fontFamily: 'WorkSans-Medium',
    color: 'black',
  },
  control: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  btnIcon: {
    paddingHorizontal: 4,
    paddingVertical: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(55, 73, 87, 0.2)',
  },
});

export default Card;
