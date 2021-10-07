import React from 'react';
import {View, Text, FlatList, Image, Dimensions, StyleSheet} from 'react-native';


const dimensions = Dimensions.get('screen')

class List extends React.PureComponent {
  render() {
    const {title, content} = this.props;
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
          horizontal={true}
          data={content}
          renderItem={({item}) => (
            <View style={styles.imgWrapper}>
              <Image style={styles.img} source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} />
            </View>
          )}>
        </FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
    fontSize: 24,
    color: '#000000'
  },
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

export default List;
