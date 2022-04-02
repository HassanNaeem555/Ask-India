import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Card} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import {appLogos} from '../../../assets';
import Button from '../../../components/Button';
import {colors, WP, HP, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

const data = [
  {
    title: '11th / 12th',
    id: 0,
  },
  {
    title: 'Bachelors of Arts / MA',
    id: 1,
  },
  {
    title: 'Bachelors of Commerce / Mcom',
    id: 2,
  },
  {
    title: 'Bachelors of Science / Bsc / BTech',
    id: 3,
  },
  {
    title: 'Bachelors of Agriculture / Master',
    id: 4,
  },
  {
    title: 'UPSC',
    id: 5,
  },
  {
    title: 'SSC',
    id: 6,
  },
  {
    title: 'Banking',
    id: 7,
  },
  {
    title: 'State PSC',
    id: 8,
  },
  {
    title: 'Others',
    id: 9,
  },
];
const TopicFollow = ({navigation, route}) => {
  const {id} = route.params;
  const [selectedProgram, setSelectedProgram] = useState([]);
  const handlePress = item => {
    const {title, id} = item;
    const foundItem = selectedProgram.filter(e => e?.id === id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedProgram.filter(e => e?.id !== id);
      setSelectedProgram(foundItem);
      console.log('inside if');
    } else {
      const idSave = [{id, title}];
      const newUpdatedArray = selectedProgram?.concat(idSave);
      setSelectedProgram(newUpdatedArray);
      console.log('inside else', idSave);
    }
  };
  const handleNavigate = () => {
    navigation.pop();
  };
  const goBack = () => {
    navigation.goBack();
  };
  console.log('selectedProgram', selectedProgram);
  return (
    <View style={[styles.mainContainer, {padding: 16}]}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}>
        <HeaderMain
          navigateLeftIcon={navigation.pop}
          leftIcon={'chevron-back'}
          showSearch={false}
          showNotifications={false}
          headerText={'FOLLOW TOPICS'}
          navigation={navigation}
        />
        <View style={styles.alignSelfStretch}>
          <Logo logo={appLogos.logo} marginVertical={HP('1%')} />
          {selectedProgram.length > 0 && (
            <Card
              containerStyle={[
                styles.paddingHorizontal1Percent,
                {
                  overflow: 'hidden',
                  marginHorizontal: 0,
                  borderRadius: 10,
                  marginBottom: HP('2%'),
                },
              ]}>
              <View style={[styles.directionRow, {flexWrap: 'wrap'}]}>
                {selectedProgram.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.9}
                      style={styles.directionRow}
                      onPress={() => {
                        handlePress(item);
                      }}>
                      <Text
                        style={[
                          styles.paddingHorizontal2Percent,
                          styles.paddingHalfPercent,
                          style.selectedTopic,
                        ]}>
                        {item?.title}
                      </Text>
                      <Entypo
                        name={'circle-with-cross'}
                        size={size.large}
                        color={colors.primary}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </Card>
          )}
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
                  handlePress(item);
                }}>
                <Text style={style.selectionBoxText}>{item?.title}</Text>
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
              </TouchableOpacity>
            );
          })}
          <View
            style={[
              styles.directionRow,
              styles.alignCenter,
              styles.marginVerticle2Percent,
            ]}>
            <Button
              buttonText={'DONE'}
              handlePress={handleNavigate}
              width={WP('90%')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default TopicFollow;
