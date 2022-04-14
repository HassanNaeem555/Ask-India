import React from 'react';
import {TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';
import {WP, HP, colors, size} from '../utilities';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../screens/Main/style';

const HorizontalCategories = ({category, selectCategory, selectedCategory}) => {
  return (
    <ScrollView
      horizontal={true}
      style={[
        styles.marginVerticleHalfPercent,
        {marginLeft: WP('2%'), marginRight: WP('2%')},
      ]}>
      {category.map((item, index) => {
        return (
          <>
            {selectedCategory.length > 0 &&
            selectedCategory.filter(e => e?.id === item?.id).length > 0 ? (
              <LinearGradient
                key={index + item?.id}
                colors={[colors.secondary, colors.primary]}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                style={[styles.marginHalfPercent, {borderRadius: 30}]}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    selectCategory(item);
                  }}
                  style={[
                    style.activeCategoryButton,
                    styles.alignCenter,
                    styles.justifyCenter,
                  ]}>
                  <Text style={[style.catgoryTitle, style.activeCatgoryTitle]}>
                    {item?.title}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            ) : (
              <TouchableOpacity
                key={index + 2}
                activeOpacity={0.9}
                onPress={() => {
                  selectCategory(item);
                }}
                style={[style.categoryButton, styles.margin1Percent]}>
                <Text style={style.catgoryTitle}>{item?.title}</Text>
              </TouchableOpacity>
            )}
          </>
        );
      })}
    </ScrollView>
  );
};

export default HorizontalCategories;

const style = StyleSheet.create({
  activeCategoryButton: {
    paddingVertical: HP('1.1%'),
    paddingLeft: WP('4%'),
    paddingRight: WP('3%'),
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
