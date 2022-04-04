import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Button from '../../../components/Button';
import CustomInput from '../../../components/CustomInput';
import Image from '../../../components/Img';
import HeaderMain from '../../../components/HeaderMain';
import {appIcons} from '../../../assets';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const data = [
  {
    title: 'Technology',
    image: appIcons?.topics,
    id: 0,
  },
  {
    title: 'Neet',
    image: appIcons?.topics,
    id: 1,
  },
  {
    title: 'Current affair',
    image: appIcons?.topics,
    id: 2,
  },
  {
    title: 'Jee Main',
    image: appIcons?.topics,
    id: 3,
  },
  {
    title: 'Travel',
    image: appIcons?.topics,
    id: 4,
  },
  {
    title: 'C A Foundation',
    image: appIcons?.topics,
    id: 5,
  },
  {
    title: 'C S Foundation',
    image: appIcons?.topics,
    id: 6,
  },
];

const SelectTopic = ({navigation}) => {
  const [selectedProgram, setSelectedProgram] = useState([]);
  const handlePress = id => {
    const foundItem = selectedProgram.filter(e => e?.id === id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedProgram.filter(e => e?.id !== id);
    } else {
      const idSave = [{id}];
      setSelectedProgram(idSave);
    }
  };
  const handleSearch = () => {
    console.log('search');
  };
  const handleNavigate = () => {
    navigation.navigate('Quiz');
  };
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'SELECT TOPIC'}
        navigation={navigation}
      />
      <ScrollView>
        <CustomInput
          placeholder={'Search'}
          iconNameRight={'search'}
          iconType={'Ionicons'}
          rightIconShow={true}
          rightIconSize={25}
          rightIconColor={colors.black}
          handlePress={handleSearch}
        />
        <Text
          style={[
            styles.paddingHalfPercent,
            styles.paddingHorizontal4Percent,
            style.heading,
          ]}>
          Select Topic
        </Text>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.9}
              style={[
                styles.directionRow,
                styles.justifySpaceBetween,
                styles.margin1Percent,
                styles.padding2Percent,
                styles.paddingHorizontal4Percent,
                style.customSelectionBox,
                selectedProgram.length > 0 &&
                selectedProgram.filter(e => e?.id === item?.id).length > 0
                  ? {
                      borderColor: colors.primary,
                    }
                  : {borderColor: colors.lightGray},
              ]}
              onPress={() => {
                handlePress(item?.id);
              }}>
              <View style={{flex: 1.7}}>
                <Image
                  local={true}
                  resizeMode={'contain'}
                  style={style.image}
                  src={item?.image}
                />
              </View>
              <View style={[styles.justifyCenter, {flex: 7.3}]}>
                <Text style={style.selectionBoxText} numberOfLines={1}>
                  {item?.title}
                </Text>
              </View>
              <View style={[styles.justifyCenter, {flex: 1}]}>
                <View
                  style={
                    selectedProgram.length > 0 &&
                    selectedProgram.filter(e => e?.id === item?.id).length > 0
                      ? [
                          style.customSelectionCircle,
                          style.customSelectionCircleActive,
                        ]
                      : style.customSelectionCircle
                  }></View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View
        style={[
          styles.directionRow,
          styles.justifyCenter,
          styles.alignCenter,
          styles.marginVerticle2Percent,
        ]}>
        <Button
          buttonText={'NEXT'}
          handlePress={handleNavigate}
          width={WP('90%')}
        />
      </View>
    </View>
  );
};

export default SelectTopic;
