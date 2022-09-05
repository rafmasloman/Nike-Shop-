import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../../Card/Card';
import NavbarLogo from '../../../../public/img/icons/fi-rr-align-left.svg';
import IconCart from '../../../../public/img/icons/fi-rr-shopping-bag.svg';

const nikeGreen = require('../../../../public/img/nike-green.png');
const nikeMax = require('../../../../public/img/nike-airmax-97.png');
const nikeMaxBlue = require('../../../../public/img/nike-airmax-97-blue.png');
const nikeReact = require('../../../../public/img/nike-react-presto.png');
const nikeLogo = require('../../../../public/img/nike-logo.png');

const Home = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.headerLeft}>
          <NavbarLogo />
          <Image source={nikeLogo} style={style.nikeLogo} />
        </View>
        <View style={style.headerRight}>
          <IconCart />
        </View>
      </View>
      <View style={style.card}>
        <View style={style.left}>
          <Text style={style.title}>
            <Text style={style.discountText}>20%</Text> Discount
          </Text>
          <Text style={style.descriptionText}>on your first purchase</Text>

          <TouchableOpacity style={style.btnPrimary}>
            <Text style={style.btnText}>Shop now</Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* <Image source={{uri: require('../../../public/img/Green 1.png')}} /> */}
          <Image source={nikeGreen} style={style.image} />
        </View>
      </View>

      <View style={style.productView}>
        <Card imageURL={nikeMax} name={'Air Max 97'} price={'20.99'} />
        <Card imageURL={nikeReact} name={'React Presto'} price={'25.99'} />
      </View>
      <View style={style.productView}>
        <Card imageURL={nikeMaxBlue} name={'Air Max 97 Blue'} price={'28.99'} />
        <Card imageURL={nikeReact} name={'React Presto'} price={'25.99'} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },

  nikeLogo: {
    marginLeft: 15,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  card: {
    backgroundColor: '#EFEFEF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 19,
    height: 150,
    borderRadius: 20,
    marginTop: 100,
  },
  image: {
    width: 250,
    height: 170,
    left: -27,
    top: -86,
    position: 'absolute',
  },
  left: {
    marginLeft: 30,
  },
  title: {
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 20,
    color: '#202727',
  },
  discountText: {
    fontSize: 30,
    fontFamily: 'WorkSans-Bold',
  },
  descriptionText: {
    color: '#202727',
    fontFamily: 'WorkSans-Regular',
    fontSize: 14,
  },
  btnPrimary: {
    display: 'flex',
    alignItems: 'center',
    width: 90,
    paddingVertical: 8,
    borderRadius: 120 / 2,
    backgroundColor: 'black',
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontFamily: 'WorkSans-SemiBold',
    fontSize: 10,
  },
  productView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    // backgroundColor: 'blue',
  },
});
export default Home;
