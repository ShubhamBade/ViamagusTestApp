import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {slickHeight, slickWidth, slickFontSize} from 'slick-sizer-ui';
import {PrimaryWhite, CardHeadingColor} from '../constants/colorsConstant';
type Props = {};

export const ResultCardComponent = (props: Props) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={require('../assets/images/listItemIcon.png')}
        style={styles.imageStyle}
      />
      <View style={{alignItems: 'center'}}>
        <Text style={styles.cardHeadingStyle}>First Stripe Earned</Text>
        <Text style={styles.cardSubHeadingStyle}>
          Top 10% of highest spending players in a month
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: slickHeight(10),
    width: slickWidth(90),
    marginTop: slickHeight(2),
    borderRadius: slickWidth(3),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: PrimaryWhite,
  },
  imageStyle: {
    height: slickWidth(15),
    width: slickWidth(15),
  },
  cardHeadingStyle: {
    fontSize: slickFontSize(4.5),
    color: CardHeadingColor,
    fontWeight: 'bold',
  },
  cardSubHeadingStyle: {
    width: slickWidth(50),
    fontSize: slickFontSize(4),
  },
});
