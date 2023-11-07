import {Image, StyleSheet, View, FlatList, Pressable} from 'react-native';
import React from 'react';
import {slickHeight, slickWidth, slickFontSize} from 'slick-sizer-ui';
import {Text} from 'react-native-paper';
import NotificationIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LogoutIcon from 'react-native-vector-icons/MaterialIcons';
import UpwardArrowIcon from 'react-native-vector-icons/Feather';
import DownwardArrowicon from 'react-native-vector-icons/Feather';
import {
  ChooseCategoryComponent,
  ResultCardComponent,
} from '../components/index';
import {
  PrimaryWhite,
  PrimaryGrey,
  SecondaryGreen,
  SecondaryRed,
  SecondaryGrey,
  TernaryGrey,
  DarkGrey,
} from '../constants/colorsConstant';

type Props = {};

export const HomeScreen = (props: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: PrimaryWhite}}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/images/appIcon.png')}
          style={styles.appIconStyle}
        />
        <Text style={styles.headingTextStyle}>Profile</Text>
        <NotificationIcon
          name="message-badge"
          size={slickWidth(9)}
          color={PrimaryGrey}
        />
      </View>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../assets/images/profileImage.png')}
          style={styles.profileImageStyle}
        />
        <View style={{alignItems: 'center'}}>
          <Text style={styles.nameStyle}>Jina Simons</Text>
          <Text style={styles.scoreStyle}>6000 Pts</Text>
        </View>
      </View>
      <Text style={styles.bioStyle}>
        I’m a software developer that has been in the crypto space since 2012.
        And I’ve seen it grow and falter over a period of time. Really happy to
        be here!
      </Text>
      <Pressable style={styles.logoutContainer}>
        <LogoutIcon name="logout" size={slickWidth(7)} color={PrimaryGrey} />
        <Text style={styles.logoutTextStyle}>Logout</Text>
      </Pressable>
      <View style={styles.scoreContainer}>
        <View style={{justifyContent: 'space-around'}}>
          <Text style={styles.scoreHeadingStyle}>Under or Over</Text>
          <View style={styles.arrangeHrStyle}>
            <UpwardArrowIcon
              name="arrow-up-circle"
              size={slickWidth(8)}
              color={SecondaryGreen}
            />
            <Text style={styles.numberScoreStyle}>80%</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-around'}}>
          <Text style={styles.scoreHeadingStyle}>Top 5</Text>
          <View style={styles.arrangeHrStyle}>
            <DownwardArrowicon
              name="arrow-down-circle"
              size={slickWidth(8)}
              color={SecondaryRed}
            />
            <Text style={styles.numberScoreStyle}> -51%</Text>
          </View>
        </View>
      </View>
      <ChooseCategoryComponent />
      <View style={styles.resultContainer}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          style={{marginBottom: slickHeight(4)}}
          renderItem={({item}) => <ResultCardComponent />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: slickHeight(8),
    width: slickWidth(90),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  appIconStyle: {
    height: slickWidth(11),
    width: slickWidth(11),
  },
  headingTextStyle: {
    fontSize: slickFontSize(5.5),
    color: PrimaryGrey,
  },
  profileImageContainer: {
    height: slickHeight(20),
    width: slickWidth(90),
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profileImageStyle: {
    height: slickWidth(25),
    width: slickWidth(25),
  },
  nameStyle: {
    fontSize: slickFontSize(5),
    color: '#333333',
  },
  scoreStyle: {
    fontSize: slickFontSize(4),
    color: PrimaryGrey,
  },
  bioStyle: {
    width: slickWidth(90),
    alignSelf: 'center',
    fontSize: slickFontSize(4),
    color: PrimaryGrey,
    letterSpacing: 0.8,
  },
  logoutContainer: {
    width: slickWidth(25),
    height: slickHeight(6),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  logoutTextStyle: {
    fontSize: slickFontSize(4),
    color: PrimaryGrey,
  },
  scoreContainer: {
    width: slickWidth(80),
    height: slickHeight(12),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    borderColor: TernaryGrey,
    borderWidth: slickWidth(1),
    borderRadius: slickWidth(2),
  },
  scoreHeadingStyle: {
    fontSize: slickFontSize(4),
    color: PrimaryGrey,
  },
  arrangeHrStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  numberScoreStyle: {
    fontSize: slickFontSize(6),
    color: DarkGrey,
    fontWeight: 'bold',
  },
  resultContainer: {
    width: slickWidth(100),
    height: slickHeight(30),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: SecondaryGrey,
  },
});
