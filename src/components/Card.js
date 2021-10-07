import React from 'react';
import {View, Image, Dimensions, StyleSheet, Text} from 'react-native';

const dimensions = Dimensions.get('screen');
const posterPlaceholder = require('../assets/images/poster-placeholder.png');

class Card extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={item.poster_path ?
          {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`} : posterPlaceholder} />

        {!item && <Text style={styles.title}>{item.title}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgWrapper: {
    position: 'relative',
    marginRight: 16,
    justifyContent: 'center',
    width: dimensions.width * 0.21,
    height: dimensions.height * 0.15,
    borderRadius: 5,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute',
    top: 4,
    width: '100%',
    textAlign: 'center',
    fontSize: 12,
    color: '#000000',
  }
});

export default Card;
