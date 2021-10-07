import React from 'react';
import {Image, Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const dimensions = Dimensions.get('screen');
const posterPlaceholder = require('../assets/images/poster-placeholder.png');

const propTypes = {
  item: PropTypes.object,
};

class Card extends React.PureComponent {
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.imgWrapper}>
        <Image style={styles.img} source={item.poster_path ?
          {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`} : posterPlaceholder} />

        {!item && <Text style={styles.title}>{item.title}</Text>}
      </TouchableOpacity>
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

Card.propTypes = propTypes;

export default Card;
