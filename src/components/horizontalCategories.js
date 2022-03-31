import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {WP, HP, colors, size} from '../utilities';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../screens/Main/style';

const HorizontalCategories = ({category, selectCategory, selectedCategory}) => {
  return (
    <>
      {category.map((item, index) => {
        return (
          <>
            {selectedCategory.length > 0 &&
            selectedCategory.filter(e => e?.id === item?.id).length > 0 ? (
              <LinearGradient
                key={index}
                colors={[colors.secondary, colors.primary]}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                style={[styles.margin1Percent, {borderRadius: 15}]}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    selectCategory(item?.id);
                  }}
                  style={style.activeCategoryButton}>
                  <Text style={[style.catgoryTitle, style.activeCatgoryTitle]}>
                    {item?.title}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              <TouchableOpacity
                key={index}
                activeOpacity={0.9}
                onPress={() => {
                  selectCategory(item?.id);
                }}
                style={[style.categoryButton, styles.margin1Percent]}>
                <Text style={style.catgoryTitle}>{item?.title}</Text>
              </TouchableOpacity>
            )}
          </>
        );
      })}
    </>
  );
};

export default HorizontalCategories;

const style = StyleSheet.create({
  activeCategoryButton: {
    paddingVertical: HP('1%'),
    paddingHorizontal: WP('7%'),
    borderWidth: 1.2,
    borderColor: colors.lightGray,
    marginRight: WP('1.8%'),
  },
  categoryButton: {
    paddingVertical: HP('1%'),
    paddingHorizontal: WP('6%'),
  },
  catgoryTitle: {
    fontSize: size.small,
    color: colors.gray,
  },
  activeCatgoryTitle: {
    color: colors.white,
  },
});
