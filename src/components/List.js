import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Card from "./Card";

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
            <Card item={item} />
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
});

export default List;
