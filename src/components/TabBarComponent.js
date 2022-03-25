import * as React from 'react';

import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {appImages} from '../assets';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../utilities';
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
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.singleTabSpace}>
              {label === 'Feed' && (
                <View
                  style={{
                    backgroundColor: isFocused ? 'white' : undefined,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: isFocused ? 'absolute' : 'relative',
                    zIndex: isFocused ? 1 : 0,
                    top: isFocused ? '-75%' : '0%',
                    width: isFocused ? 50 : undefined,
                    height: isFocused ? 50 : undefined,
                    borderRadius: isFocused ? 25 : 0,
                  }}>
                  <Entypo
                    style={{
                      position: isFocused ? 'absolute' : 'relative',
                      zIndex: isFocused ? 1 : 0,
                    }}
                    name="home"
                    size={isFocused ? 30 : 22}
                    color={isFocused ? colors.primary : 'white'}
                  />
                </View>
              )}
              {label === 'Topic' && (
                <View
                  style={{
                    backgroundColor: isFocused ? 'white' : undefined,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: isFocused ? 'absolute' : 'relative',
                    zIndex: isFocused ? 1 : 0,
                    top: isFocused ? '-75%' : '0%',
                    width: isFocused ? 50 : undefined,
                    height: isFocused ? 50 : undefined,
                    borderRadius: isFocused ? 25 : 0,
                  }}>
                  <Ionicons
                    style={{
                      position: isFocused ? 'absolute' : 'relative',
                      zIndex: isFocused ? 1 : 0,
                    }}
                    name="ios-list-circle-sharp"
                    size={isFocused ? 30 : 22}
                    color={isFocused ? colors.primary : 'white'}
                  />
                </View>
              )}
              {label === 'Profile' && (
                <View
                  style={{
                    backgroundColor: isFocused ? 'white' : undefined,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: isFocused ? 'absolute' : 'relative',
                    zIndex: isFocused ? 1 : 0,
                    top: isFocused ? '-75%' : '0%',
                    width: isFocused ? 50 : undefined,
                    height: isFocused ? 50 : undefined,
                    borderRadius: isFocused ? 25 : 0,
                  }}>
                  <MaterialCommunityIcons
                    style={{
                      position: isFocused ? 'absolute' : 'relative',
                      zIndex: isFocused ? 1 : 0,
                    }}
                    name="storefront"
                    size={isFocused ? 30 : 22}
                    color={isFocused ? colors.primary : 'white'}
                  />
                </View>
              )}
              {label === 'QA' && (
                <View
                  style={{
                    backgroundColor: isFocused ? 'white' : undefined,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: isFocused ? 'absolute' : 'relative',
                    zIndex: isFocused ? 1 : 0,
                    top: isFocused ? '-75%' : '0%',
                    width: isFocused ? 50 : undefined,
                    height: isFocused ? 50 : undefined,
                    borderRadius: isFocused ? 25 : 0,
                  }}>
                  <MaterialCommunityIcons
                    style={{
                      position: isFocused ? 'absolute' : 'relative',
                      zIndex: isFocused ? 1 : 0,
                    }}
                    name="brightness-percent"
                    size={isFocused ? 30 : 22}
                    color={isFocused ? colors.primary : 'white'}
                  />
                </View>
              )}
              {label === 'Discover' && (
                <View
                  style={{
                    backgroundColor: isFocused ? 'white' : undefined,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: isFocused ? 'absolute' : 'relative',
                    zIndex: isFocused ? 1 : 0,
                    top: isFocused ? '-75%' : '0%',
                    width: isFocused ? 50 : undefined,
                    height: isFocused ? 50 : undefined,
                    borderRadius: isFocused ? 25 : 0,
                  }}>
                  <MaterialCommunityIcons
                    style={{
                      position: isFocused ? 'absolute' : 'relative',
                      zIndex: isFocused ? 1 : 0,
                    }}
                    name="brightness-percent"
                    size={isFocused ? 30 : 22}
                    color={isFocused ? colors.primary : 'white'}
                  />
                </View>
              )}

              {!isFocused && <Text style={{color: 'white'}}>{label}</Text>}
            </TouchableOpacity>
          );
        })}
      </ImageBackground>
    </View>
  );
}
