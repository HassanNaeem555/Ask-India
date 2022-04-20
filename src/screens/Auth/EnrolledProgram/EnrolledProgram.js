import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import HeaderMain from '../../../components/HeaderMain';
import Logo from '../../../components/logo';
import Image from '../../../components/Img';
import { appLogos } from '../../../assets';
import { colors, WP, HP } from '../../../utilities';
import { appImages } from '../../../assets';
import { enrollProgram } from '../../../utils/api';
import { getApi } from '../../../utils/apiFunction';
import styles from '../style';
import style from './styles';

const EnrolledProgram = ({ navigation }) => {
  const [enrolledProgramList, setEnrolledProgramList] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState([]);
  const bearer_token = useSelector(state => state.authReducer.bearer_token);
  const handlePress = board_id => {
    const foundItem = selectedProgram.filter(e => e?.board_id === board_id);
    if (foundItem && foundItem.length > 0) {
      const foundItem = selectedProgram.filter(e => e?.board_id !== board_id);
      setSelectedProgram(foundItem);
      console.log('inside if');
    } else {
      const idSave = [{ board_id }];
      const newUpdatedArray = selectedProgram?.concat(idSave);
      setSelectedProgram(newUpdatedArray);
      navigation.navigate('TopicFollow', { board_id });
      console.log('inside else', idSave);
    }
  };
  const getEnrolled = async () => {
    const { data, message, status } = await getApi(enrollProgram, bearer_token);
    if (status == 1) {
      setEnrolledProgramList(data);
    } else if (status == 0) {
      Toast.show(message, Toast.LONG);
    }
  };
  const renderItem = item => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.directionRow,
          styles.justifySpaceBetween,
          styles.margin1Percent,
          styles.padding2Percent,
          styles.paddingHorizontal4Percent,
          style.customSelectionBox,
          selectedProgram.length > 0 &&
            selectedProgram.filter(e => e?.board_id === item?.item?.board_id)
              .length > 0
            ? {
              borderColor: colors.primary,
            }
            : { borderColor: colors.lightGray },
        ]}
        onPress={() => {
          handlePress(item?.item?.board_id);
        }}>
        <Text style={[style.selectionBoxText, styles.colorBlack]}>
          {item?.item?.board_name}
        </Text>
        {/* <View
          style={
            selectedProgram.length > 0 &&
            selectedProgram.filter(e => e?.board_id === item?.item?.board_id)
              .length > 0
              ? [style.customSelectionCircle, style.customSelectionCircleActive]
              : style.customSelectionCircle
          }></View> */}
        <Image
          local={true}
          resizeMode={'contain'}
          style={style.selectedImage}
          src={
            selectedProgram.length > 0 &&
              selectedProgram.filter(e => e?.board_id === item?.item?.board_id)
                .length > 0
              ? appImages?.selectedTopic
              : appImages?.unselectTopic
          }
        />
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    getEnrolled();
  }, []);
  return (
    <View style={[styles.mainContainer, { padding: 16 }]}>
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
        {enrolledProgramList.length > 0 ? (
          <FlatList
            data={enrolledProgramList}
            renderItem={renderItem}
            keyExtractor={item => item.board_id}
          />
        ) : (
          <>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                flexDirection="row"
                alignItems="center"
                marginVertical={HP('0.8%')}>
                <SkeletonPlaceholder.Item
                  width={WP('90%')}
                  height={50}
                  borderRadius={10}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                flexDirection="row"
                alignItems="center"
                marginVertical={HP('0.8%')}>
                <SkeletonPlaceholder.Item
                  width={WP('90%')}
                  height={50}
                  borderRadius={10}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                flexDirection="row"
                alignItems="center"
                marginVertical={HP('0.8%')}>
                <SkeletonPlaceholder.Item
                  width={WP('90%')}
                  height={50}
                  borderRadius={10}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                flexDirection="row"
                alignItems="center"
                marginVertical={HP('0.8%')}>
                <SkeletonPlaceholder.Item
                  width={WP('90%')}
                  height={50}
                  borderRadius={10}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          </>
        )}
      </View>
    </View>
  );
};

export default EnrolledProgram;
