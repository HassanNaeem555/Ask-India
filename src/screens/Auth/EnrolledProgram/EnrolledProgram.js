import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import {appLogos} from '../../../assets';
import Button from '../../../components/Button';
import {colors, WP, HP} from '../../../utilities';
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
const EnrolledProgram = ({navigation}) => {
  const [selectedProgram, setSelectedProgram] = useState([]);
  const handlePress = id => {
    const foundItem = selectedProgram.filter(e => e[0]?.id === id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedProgram.filter(e => e[0]?.id !== id);
      setSelectedProgram(foundItem);
      console.log('inside if');
    } else {
      const idSave = [{id}];
      const newUpdatedArray = [...selectedProgram, idSave];
      setSelectedProgram(newUpdatedArray);
      navigation.navigate('TopicFollow', {id});
      console.log('inside else', idSave);
    }
  };
  const handleNavigate = () => {
    navigation.navigate('Login');
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
          headerText={'SELECT ENROLLED'}
          navigation={navigation}
        />
        <View style={styles.alignSelfStretch}>
          <Logo logo={appLogos.logo} marginVertical={HP('1%')} />
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
                  selectedProgram.filter(e => e[0]?.id === item?.id).length > 0
                    ? {
                        borderColor: colors.primary,
                      }
                    : {borderColor: colors.lightGray},
                ]}
                onPress={() => {
                  handlePress(item?.id);
                }}>
                <Text style={style.selectionBoxText}>{item?.title}</Text>
                <View
                  style={
                    selectedProgram.length > 0 &&
                    selectedProgram.filter(e => e[0]?.id === item?.id).length >
                      0
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
              buttonText={'CONTINUE'}
              handlePress={handleNavigate}
              width={WP('90%')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default EnrolledProgram;
