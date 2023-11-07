import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {slickHeight, slickWidth, slickFontSize} from 'slick-sizer-ui';
import {
  PrimaryWhite,
  PrimaryBlue,
  PrimaryGrey,
} from '../constants/colorsConstant';
type Props = {};

export const ChooseCategoryComponent = (props: Props) => {
  const [category, setCategory] = useState<string>('gamesPlayed');
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.categoryConatiner,
          {
            borderBottomColor:
              category == 'gamesPlayed' ? PrimaryBlue : PrimaryWhite,
          },
        ]}
        onPress={() => {
          setCategory('gamesPlayed');
        }}>
        <Text
          style={[
            styles.categoryTextStyle,
            {color: category == 'gamesPlayed' ? PrimaryBlue : PrimaryGrey},
          ]}>
          Games played
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.categoryConatiner,
          {
            borderBottomColor:
              category == 'badges' ? PrimaryBlue : PrimaryWhite,
          },
        ]}
        onPress={() => {
          setCategory('badges');
        }}>
        <Text
          style={[
            styles.categoryTextStyle,
            {color: category == 'badges' ? PrimaryBlue : PrimaryGrey},
          ]}>
          Badges
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: slickWidth(90),
    height: slickHeight(8),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryConatiner: {
    borderBottomColor: PrimaryWhite,
    borderBottomWidth: slickWidth(0.5),
    width: slickWidth(45),
    alignItems: 'center',
    height: slickHeight(8),
    justifyContent: 'center',
  },
  categoryTextStyle: {
    fontSize: slickFontSize(4.5),
    fontWeight: '400',
  },
});
