import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { Card } from 'react-native-elements';
import { useSelector } from 'react-redux';
import Toast from 'react-native-simple-toast';
import { image_url } from '../../../utils/url';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import HeaderMain from '../../../components/HeaderMain';
import Post from '../../../components/Post';
import Image from '../../../components/Img';
import ModalComponent from '../../../components/Modal';
import { appIcons, appImages } from '../../../assets';
import { WP, HP, colors, size } from '../../../utilities';
import styles from '../style';
import style from './styles';
const gallery = [
  {
    id: 0,
    image: appImages?.learningFirst,
  },
  {
    id: 1,
    image: appImages?.learningSecond,
  },
  {
    id: 2,
    image: appImages?.learningThird,
  },
  {
    id: 3,
    image: appImages?.learningFourth,
  },
];

const CreatePost = ({ navigation }) => {
  const user_profile_data = useSelector(state => state.authReducer.user);
  const [postGalleryImages, setPostGalleryImages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const pickImages = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 600,
      cropping: true,
      multiple: true
    }).then(images => {
      const updatedImageGallery = postGalleryImages.length > 0 ? postGalleryImages.concat(images) : images;
      setPostGalleryImages(updatedImageGallery);
    });
  }
  const deleteGalleryImage = (creationDate) => {
    const getRemainingImages = postGalleryImages.filter((e) => e?.creationDate !== creationDate);
    setPostGalleryImages(getRemainingImages);
    Toast.show('Image Removed Successfully', Toast.LONG);
  }
  const toggleModalPostType = () => {
    setIsModalVisible(!isModalVisible)
  }
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <HeaderMain
        navigateLeftIcon={navigation.pop}
        leftIcon={'chevron-back'}
        showSearch={false}
        showNotifications={false}
        headerText={'CREATE POST'}
        navigation={navigation}
      />
      <ScrollView>
        <Card
          containerStyle={[
            styles.margin1Percent,
            {
              marginHorizontal: 0,
              borderRadius: 10,
              borderWidth: 0,
            },
          ]}>
          <View style={[styles.directionRow, styles.justifyCenter]}>
            <View
              style={[
                style.postImageDivision,
                styles.alignCenter,
                styles.positionRelative,
              ]}>
              {/* <Image
                local={true}
                resizeMode={'contain'}
                style={[style.postImageBorder, styles.positionRelative]}
                src={appImages?.postImageBorder}
              /> */}
              <Image
                local={true}
                resizeMode={'cover'}
                style={style.postImage}
                src={{ uri: image_url + user_profile_data?.user_image }}
              />
            </View>
            <View
              style={[
                style.postContentDivision,
                styles.paddingHorizontal4Percent,
                styles.marginHalfPercent,
                { marginLeft: WP('0.5%') },
              ]}>
              <Text style={style.postHeading} numberOfLines={1}>
                {user_profile_data && user_profile_data?.user_name}
              </Text>
              <Text style={style.postDate} numberOfLines={1}>
                Public
              </Text>
            </View>
            <View style={[styles.alignCenter, style.postIconDivision]}>
              {/* <LinearGradient
                colors={[colors.primary, colors.secondary]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={[
                  styles.margin1Percent,
                  style.followButton,
                  styles.justifyCenter,
                  styles.alignCenter,
                  { borderRadius: 10 },
                ]}>
                <TouchableOpacity activeOpacity={0.9}>
                  <Text style={style.textUnderBtn}>POST</Text>
                </TouchableOpacity>
              </LinearGradient> */}
              <View style={[styles.directionRow, styles.justifySpaceBetween, styles.alignCenter]}>
                <Text style={style.postDate}>
                  Post as:{' '}
                </Text>
                <TouchableOpacity onPress={toggleModalPostType} activeOpacity={0.9} style={[styles.directionRow, styles.justifyCenter, styles.alignCenter]}>
                  <Text
                    style={[style.postDate, styles.colorPrimary]}>
                    Post
                  </Text>
                  <Entypo name={'chevron-small-down'} size={size.xxlarge} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TextInput placeholder={"What's in your mind"} multiline={true} style={[styles.margin1Percent]} />
          <View style={[styles.margin5Percent, styles.directionRow]}>
            {
              postGalleryImages.length > 0 && (
                <ScrollView horizontal={true}>
                  {postGalleryImages.map((item, index) => {
                    return (
                      <TouchableOpacity
                        activeOpacity={0.9}
                        style={[styles.positionRelative, { marginRight: WP('3%') }]}
                        onPress={() => { deleteGalleryImage(item?.creationDate) }}
                        key={index}>
                        <Image
                          local={true}
                          resizeMode={'contain'}
                          style={[style.galleryImage,
                            //   {
                            //   width: item?.width / 10,
                            //   height: item?.height / 10
                            // }
                          ]}
                          src={{ uri: item?.sourceURL.replace('file://', '') }}
                        />
                        <Image
                          local={true}
                          resizeMode={'contain'}
                          style={style.icon}
                          src={appIcons?.cross}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              )
            }
            <TouchableOpacity
              onPress={pickImages}
              activeOpacity={0.9}
              style={[styles.positionRelative, { marginLeft: WP("3%") }]}>
              <Image
                local={true}
                resizeMode={'contain'}
                style={style.addGalleryImage}
                src={appImages?.learningThird}
              />
              <Image
                local={true}
                resizeMode={'contain'}
                style={style.iconAdd}
                src={appIcons?.add}
              />
            </TouchableOpacity>
          </View>
        </Card>
        {/* <Post showPostImage={true} showTag={false} navigation={navigation} />
        <Post showPostImage={false} showTag={true} navigation={navigation} /> */}
      </ScrollView>
      <ModalComponent isModalVisible={isModalVisible} toggleModalPostType={toggleModalPostType} />
    </View>
  );
};

export default CreatePost;
