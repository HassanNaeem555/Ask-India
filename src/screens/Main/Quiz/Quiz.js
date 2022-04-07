import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {Card} from 'react-native-elements';
import ButtonNoBg from '../../../components/ButtonNoBg';
import Button from '../../../components/Button';
import Image from '../../../components/Img';
import HeaderMain from '../../../components/HeaderMain';
import {appIcons, appImages} from '../../../assets';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';
const {width} = Dimensions.get('window');

const data = [
  {
    title: 'Technology',
    uncheckimage: appIcons?.iconUnCheckQuestion,
    checkImage: appIcons?.iconCheckQuestion,
    id: 0,
  },
  {
    title: 'Neet',
    uncheckimage: appIcons?.iconUnCheckQuestion,
    checkImage: appIcons?.iconCheckQuestion,
    id: 1,
  },
  {
    title: 'Current affair',
    uncheckimage: appIcons?.iconUnCheckQuestion,
    checkImage: appIcons?.iconCheckQuestion,
    id: 2,
  },
  {
    title: 'Jee Main',
    uncheckimage: appIcons?.iconUnCheckQuestion,
    checkImage: appIcons?.iconCheckQuestion,
    id: 3,
  },
];

const Quiz = ({navigation, route}) => {
  const [selectedProgram, setSelectedProgram] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const handlePress = ({id, title}) => {
    const foundItem = selectedProgram.filter(e => e?.id === id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedProgram.filter(e => e?.id !== id);
    } else {
      const idSave = [{id, title}];
      setSelectedProgram(idSave);
    }
  };
  const {id, title} = route.params;
  const showNewScreen = () => {
    setShowResult(true);
  };
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={showResult ? 'QUIZ RESULT' : 'QUIZ QUESTIONS'}
        navigation={navigation}
      />
      {showResult ? (
        <QuizOver title={title} navigation={navigation} />
      ) : (
        <>
          <View
            style={[
              styles.paddingHorizontal3Percent,
              styles.marginVerticle1HalfPercent,
              {flex: 1.5},
            ]}>
            <Text style={[style.subHeading, styles.marginVerticleHalfPercent]}>
              Questions: 2 / 6
            </Text>
            <View style={[styles.justifyCenter, styles.alignCenter]}>
              <Progress.Bar
                progress={0.2}
                width={width * 0.9}
                height={10}
                color={colors.primary}
                borderColor={colors.primary}
                borderRadius={8}
              />
            </View>
            <Text
              style={[
                style.subHeading,
                styles.colorPrimary,
                styles.marginVerticle2Percent,
              ]}>
              Topic: <Text style={styles.colorBlack}>{title}</Text>
            </Text>
          </View>
          <View style={[styles.paddingHorizontal3Percent, {flex: 8.5}]}>
            <Card
              containerStyle={{
                borderRadius: 10,
                marginHorizontal: 0,
                borderWidth: 0,
              }}>
              <Text style={style.questions} numberOfLines={2}>
                How long do you like to go away?
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
                      styles.paddingHorizontal2Percent,
                      style.customSelectionBox,
                      selectedProgram.length > 0 &&
                      selectedProgram.filter(e => e?.id === item?.id).length > 0
                        ? {
                            borderColor: colors.primary,
                            backgroundColor: colors.primary,
                          }
                        : {borderColor: colors.lightGray},
                    ]}
                    onPress={() => {
                      handlePress(item);
                    }}>
                    <View style={{flex: 1.3}}>
                      <Image
                        local={true}
                        resizeMode={'contain'}
                        style={style.image}
                        src={
                          selectedProgram.length > 0 &&
                          selectedProgram.filter(e => e?.id === item?.id)
                            .length > 0
                            ? item?.checkImage
                            : item?.uncheckimage
                        }
                      />
                    </View>
                    <View style={[styles.justifyCenter, {flex: 8.7}]}>
                      <Text
                        style={[
                          style.selectionBoxText,
                          selectedProgram.length > 0 &&
                          selectedProgram.filter(e => e?.id === item?.id)
                            .length > 0
                            ? {color: colors.white}
                            : style.selectionBoxText,
                        ]}
                        numberOfLines={1}>
                        {item?.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View
                style={[
                  styles.directionRow,
                  styles.justifyCenter,
                  styles.alignCenter,
                  styles.marginVerticle2Percent,
                ]}>
                <Button
                  buttonText={'NEXT'}
                  handlePress={showNewScreen}
                  width={WP('80%')}
                />
              </View>
            </Card>
          </View>
        </>
      )}
    </View>
  );
};

export default Quiz;

const QuizOver = ({title, navigation}) => {
  const changeScreen = () => {
    navigation.navigate('ProductDetail', {id: 0, name: 'COUNSELLING'});
  };
  const goStudyAbroad = () => {
    navigation.navigate('StudyAbroad');
  };
  return (
    <View style={[styles.paddingHorizontal3Percent, styles.mainContainer]}>
      <View style={[styles.justifyCenter, styles.alignCenter, {flex: 1.2}]}>
        <Text style={[style.subHeading, styles.colorPrimary]}>Topic</Text>
        <Text style={[style.heading, styles.marginVerticleHalfPercent]}>
          {title}
        </Text>
      </View>
      <View
        style={{
          flex: 8.8,
        }}>
        <Card
          containerStyle={{
            borderRadius: 10,
            marginHorizontal: 0,
            borderWidth: 1,
            borderColor: colors.primary,
          }}>
          <View style={[styles.justifyCenter, styles.alignCenter]}>
            <Image
              local={true}
              resizeMode={'contain'}
              style={style.quizResult}
              src={appImages?.congratulations}
            />
            <Text
              style={[style.congratulations, styles.marginVerticleHalfPercent]}>
              Congratulations
            </Text>
            <Text style={style.details}>
              You have successfully finished the quiz
            </Text>
            <Text style={[style.heading, styles.margin1Percent]}>Score</Text>
            <Text style={[style.heading, styles.marginVerticleHalfPercent]}>
              90%
            </Text>
            <ButtonNoBg
              buttonText={'CHECK RECOMMENDED'}
              width={WP('78%')}
              handlePress={goStudyAbroad}
            />
            <View style={styles.marginVerticleHalfPercent}></View>
            <Button
              buttonText={'COUNSELLING'}
              handlePress={changeScreen}
              width={WP('80%')}
            />
          </View>
        </Card>
      </View>
    </View>
  );
};
