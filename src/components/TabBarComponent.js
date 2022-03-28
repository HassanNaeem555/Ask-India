import * as React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {appImages} from '../assets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, size} from '../utilities';
import styles from './style';

export default function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.activeTabRound}>
      <ImageBackground
        // local={true}
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
                  <MaterialIcons
                    style={{
                      position: 'relative',
                      zIndex: 0,
                    }}
                    name="my-library-books"
                    size={size.h6}
                    color={isFocused ? colors.primary : colors.black}
                  />
                  <Text
                    style={{
                      color: isFocused ? colors.primary : colors.black,
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
                  <FontAwesome
                    style={{
                      position: 'relative',
                      zIndex: 0,
                    }}
                    name="hashtag"
                    size={size.h6}
                    color={isFocused ? colors.primary : colors.black}
                  />
                  <Text
                    style={{
                      color: isFocused ? colors.primary : colors.black,
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
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    zIndex: 1,
                    top: '-88%',
                    width: 50,
                    height: 50,
                    elevation: 4,
                    // borderRadius: 25,
                  }}>
                  <FontAwesome
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                    }}
                    name="user"
                    size={size.h1}
                    color={isFocused ? colors.primary : colors.black}
                  />
                  <Text
                    style={{
                      top: '85%',
                      color: isFocused ? colors.primary : colors.black,
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
                  <FontAwesome
                    style={{
                      position: 'relative',
                      zIndex: 0,
                    }}
                    name="comment"
                    size={size.h6}
                    color={isFocused ? colors.primary : colors.black}
                  />
                  <Text
                    style={{
                      color: isFocused ? colors.primary : colors.black,
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
                    size={size.h6}
                    color={isFocused ? colors.primary : colors.black}
                  />
                  <Text
                    style={{
                      color: isFocused ? colors.primary : colors.black,
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
