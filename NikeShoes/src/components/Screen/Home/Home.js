import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
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
    <ScrollView>
      <View style={style.container}>
        <View style={style.header}>
          <View style={style.headerLeft}>
            <TouchableOpacity style={style.navbarIcon}>
              <NavbarLogo />
            </TouchableOpacity>
            <Image source={nikeLogo} style={style.nikeLogo} />
          </View>
          <View style={style.headerRight}>
            <TouchableOpacity style={style.navbarIcon}>
              <IconCart />
            </TouchableOpacity>
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

        <ScrollView horizontal={true}>
          <View style={style.categories}>
            <TouchableOpacity style={style.category}>
              <Text style={style.categoryText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.category}>
              <Text style={style.categoryText}>Running</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.category}>
              <Text style={style.categoryText}>Sneakers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.category}>
              <Text style={style.categoryText}>Sport</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.category}>
              <Text style={style.categoryText}>Formal</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={style.productView}>
          <Card imageURL={nikeMax} name={'Air Max 97'} price={'20.99'} />
          <Card imageURL={nikeReact} name={'React Presto'} price={'25.99'} />
        </View>

        <View style={style.productView}>
          <Card
            imageURL={nikeMaxBlue}
            name={'Air Max 97 Blue'}
            price={'28.99'}
          />
          <Card imageURL={nikeReact} name={'React Presto'} price={'25.99'} />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
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

  navbarIcon: {
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(55, 73, 87, 0.2)',
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
    marginTop: 30,
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

  categories: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
  },
  category: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: 'black',
    borderRadius: 18,
    marginRight: 20,
  },

  categoryText: {
    color: 'white',
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
