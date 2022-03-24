import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../../../components/Button';
import {WP, HP} from '../../../utilities';
import styles from '../style';
import style from './styles';

const topics = [
  {
    id: 0,
    title: 'Technology',
  },
  {
    id: 1,
    title: 'Start ups',
  },
  {
    id: 2,
    title: 'Current affair',
  },
  {
    id: 3,
    title: 'Education Related News',
  },
  {
    id: 4,
    title: 'Crypto Currency',
  },
  {
    id: 5,
    title: 'Stock Market',
  },
  {
    id: 6,
    title: 'Travel',
  },
  {
    id: 7,
    title: 'Photography',
  },
  {
    id: 8,
    title: 'Sports',
  },
  {
    id: 9,
    title: 'Online Marketing',
  },
  {
    id: 10,
    title: 'Interview',
  },
  {
    id: 11,
    title: 'Group Discussion',
  },
];
const TopicFollow = ({navigation, route}) => {
  const {id} = route?.params;
  const handlePress = () => {
    navigation.goBack();
  };
  console.log('id', id);
  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          style.firstSection,
          styles.directionRow,
          styles.justifySpaceBetween,
          styles.alignCenter,
          styles.paddingHorizontal4Percent,
        ]}>
        <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
          <AntDesign name={'left'} size={25} color={'#000'} />
        </TouchableOpacity>
        <Text style={style.heading}>Follow Topics</Text>
        <View></View>
      </View>
      <View
        style={[
          style.secondSection,
          styles.directionRow,
          styles.flexWrap,
          styles.justifyCenter,
          styles.paddingHorizontal1Percent,
        ]}>
        <TouchableOpacity
          style={[
            styles.margin1Percent,
            style.selectionButton,
            style.selectedButton,
          ]}>
          <Text style={style.selectionButtonText}>@NEET</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.selectionButton, styles.margin1Percent]}>
          <Text style={style.selectionButtonText}>@JEE MAIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.selectionButton, styles.margin1Percent]}>
          <Text>@JEE ADVANCE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.margin1Percent, style.selectionButton]}>
          <Text style={style.selectionButtonText}>@CA FOUNDATION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.selectionButton, styles.margin1Percent]}>
          <Text style={style.selectionButtonText}>@CS FOUNDATION</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.selectionButton, styles.margin1Percent]}>
          <Text>@SSC</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.selectionButton, styles.margin1Percent]}>
          <Text>@ITI CERTIFICATE COURSES</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.selectionButton, styles.margin1Percent]}>
          <Text>@POLYTECHNIC</Text>
        </TouchableOpacity>
      </View>
      <View style={[style.thirdSection, styles.paddingHorizontal4Percent]}>
        <ScrollView showsVerticalScrollIndicator={true}>
          {topics.map((item, index) => {
            return (
              <View style={styles.directionRow} key={index}>
                <TouchableOpacity
                  style={[
                    style.selectionTopic,
                    styles.alignCenter,
                    styles.padding3Percent,
                    styles.margin1Percent,
                    style.selectedTopic,
                  ]}
                  activeOpacity={0.9}>
                  <Text>{item?.title}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    style.selectionTopic,
                    styles.padding3Percent,
                    styles.margin1Percent,
                    styles.alignCenter,
                  ]}
                  activeOpacity={0.9}>
                  <Text>{topics[index + 2]?.title}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={[style.fourthSection, styles.alignCenter]}>
        <Button
          buttonText={'DONE'}
          handlePress={handlePress}
          width={WP('90%')}
        />
      </View>
    </View>
  );
};

export default TopicFollow;
