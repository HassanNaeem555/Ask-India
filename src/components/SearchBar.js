import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {WP, HP, colors, size} from '../utilities';
import styles from '../screens/Main/style';

const SearchBarComponent = ({placeholder, showSearchIcon}) => {
  return (
    <View style={[styles.paddingHorizontal3Percent, styles.margin2Percent]}>
      <SearchBar
        placeholder={placeholder}
        lightTheme={true}
        containerStyle={
          Platform.OS == 'android'
            ? [
                style.containerStyle,
                {
                  elevation: 5,
                },
              ]
            : [
                style.containerStyle,
                {
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                },
              ]
        }
        inputContainerStyle={style.inputContainerStyle}
        inputStyle={{fontSize: size.small}}
        searchIcon={showSearchIcon}
        // icon={{type: 'font-awesome', name: 'search', size: 40}}
        //   onChangeText={this.updateSearch}
        //   value={search}
      />
    </View>
  );
};

export default SearchBarComponent;
const style = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    height: HP('7%'),
  },
  inputContainerStyle: {
    backgroundColor: colors.white,
    height: HP('2.3%'),
  },
});
