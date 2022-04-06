import * as React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Image from './Img';
import {appImages, appIcons} from '../assets';
import {colors, size, WP, HP} from '../utilities';
import styles from './style';

export default function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.activeTabRound}>
      <ImageBackground
        resizeMode={'stretch'}
        source={appImages.footer}
        style={styles.activeTabIcon}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              activeOpacity={0.9}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.singleTabSpace}>
              {label === 'Feed' && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 0,
                    top: '0%',
                    borderRadius: 0,
                  }}>
                  {/* <MaterialIcons
                    style={{
                      position: 'relative',
                      zIndex: 0,
                    }}
                    name="my-library-books"
                    size={size.h6}
                    color={isFocused ? colors.primary : colors.gray}
                  /> */}
                  <Image
                    local={true}
                    resizeMode={'contain'}
                    style={{
                      width: WP('7%'),
                      height: HP('4%'),
                    }}
                    src={
                      isFocused
                        ? appIcons?.selectedFeed
                        : appIcons?.unSelectedFeed
                    }
                  />
                  <Text
                    style={{
                      color: isFocused ? colors.primary : colors.gray,
                      fontSize: size.tiny,
                      top: 3,
                    }}>
                    My Feed
                  </Text>
                </View>
              )}
              {label === 'Topic' && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 0,
                    top: '0%',
                    borderRadius: 0,
                  }}>
                  {/* <FontAwesome
                    style={{
                      position: 'relative',
                      zIndex: 0,
                    }}
                    name="book"
                    size={size.h5}
                    color={isFocused ? colors.primary : colors.gray}
                  /> */}
                  <Image
                    local={true}
                    resizeMode={'contain'}
                    style={{
                      width: WP('7%'),
                      height: HP('4%'),
                    }}
                    src={
                      isFocused
                        ? appIcons?.selectedTopic
                        : appIcons?.unSelectedTopic
                    }
                  />
                  <Text
                    style={{
                      color: isFocused ? colors.primary : colors.gray,
                      fontSize: size.tiny,
                      top: 3,
                    }}>
                    Topics
                  </Text>
                </View>
              )}
              {label === 'Profile' && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 0,
                    top: '0%',
                    borderRadius: 0,
                  }}>
                  <FontAwesome
                    style={{
                      position: 'relative',
                      zIndex: 0,
                    }}
                    name="user"
                    size={size.h1}
                    color={isFocused ? colors.primary : colors.gray}
                  />
                  <Text
                    style={{
                      top: 3,
                      color: isFocused ? colors.primary : colors.gray,
                      fontSize: size.tiny,
                    }}>
                    {label}
                  </Text>
                </View>
              )}
              {label === 'QA' && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 0,
                    top: '0%',
                    borderRadius: 0,
                  }}>
                  <Image
                    local={true}
                    resizeMode={'contain'}
                    style={{
                      width: WP('8%'),
                      height: HP('4%'),
                    }}
                    src={
                      isFocused ? appIcons?.selectedQA : appIcons?.unSelectedQA
                    }
                  />
                  <Text
                    style={{
                      color: isFocused ? colors.primary : colors.gray,
                      fontSize: size.tiny,
                      top: 3,
                    }}>
                    Q&A
                  </Text>
                </View>
              )}
              {label === 'Discover' && (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 0,
                    top: '0%',
                    borderRadius: 0,
                  }}>
                  <Ionicons
                    style={{
                      position: 'relative',
                      zIndex: 0,
                    }}
                    name="compass"
                    size={size.h3}
                    color={isFocused ? colors.primary : colors.gray}
                  />
                  <Text
                    style={{
                      color: isFocused ? colors.primary : colors.gray,
                      fontSize: size.tiny,
                      top: 3,
                    }}>
                    {label}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ImageBackground>
    </View>
  );
}
