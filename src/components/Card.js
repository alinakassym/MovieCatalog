import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';


const dimensions = Dimensions.get('screen')

class Card extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <View style={styles.imgWrapper}>
        <Image style={styles.img} source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgWrapper: {
    marginRight: 16,
    width: dimensions.width * 0.21,
    height: dimensions.height * 0.15,
    borderRadius: 5,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  }
});

export default Card;
