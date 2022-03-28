import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {WP, HP, colors, size} from '../utilities';

const HorizontalCategories = ({category, selectCategory, selectedCategory}) => {
  return (
    <>
      {category.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            onPress={() => {
              selectCategory(item?.id);
            }}
            style={
              selectedCategory.length > 0 &&
              selectedCategory.filter(e => e?.id === item?.id).length > 0
                ? [style.categoryButton, style.activeCategoryButton]
                : [style.categoryButton]
            }>
            <Text
              style={
                selectedCategory.length > 0 &&
                selectedCategory.filter(e => e?.id === item?.id).length > 0
                  ? [style.catgoryTitle, style.activeCatgoryTitle]
                  : [style.catgoryTitle]
              }>
              {item?.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
};

export default HorizontalCategories;

const style = StyleSheet.create({
  categoryButton: {
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
    paddingVertical: HP('1%'),
    paddingHorizontal: WP('8%'),
    borderWidth: 1.2,
    borderColor: colors.lightGray,
    marginRight: WP('1.8%'),
  },
  activeCategoryButton: {
    backgroundColor: colors.primary,
  },
  catgoryTitle: {
    fontSize: size.small,
  },
  activeCatgoryTitle: {
    color: colors.white,
  },
});
