import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {WP, HP, colors, size} from '../../../utilities';
import styles from '../style';
import style from './styles';

function Home() {
  return (
    <View style={[styles.mainContainer, styles.paddingHorizontal2Percent]}>
      <View style={[styles.directionRow, styles.justifySpaceBetween]}>
        <TouchableOpacity>
          <Ionicons name={'ios-grid'} size={25} color={colors.black} />
        </TouchableOpacity>
        <Text>Welcome Rajesh</Text>
        <View style={[styles.directionRow, styles.justifySpaceBetween]}>
          <TouchableOpacity>
            <AntDesign name={'search1'} size={25} color={colors.black} />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name={'bell'}
              size={25}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Home;
