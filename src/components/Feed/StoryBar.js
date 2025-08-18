import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import StoryItem from './StoryItem';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const StoryBar = ({ stories }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={stories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <StoryItem
            uri={item.uri}
            isOnline={item.isOnline}
            isUser={item.isUser}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: wp('2%') }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: wp('2.5%') },
});

export default StoryBar;
