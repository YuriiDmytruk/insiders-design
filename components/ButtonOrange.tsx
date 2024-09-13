import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import {colors, text} from '../styles';

type Props = {
  title: string;
  Image?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  marginTop?: number;
  paddingHorizontal?: number,
  paddingVertical?: number,
};

const ButtonOrange: React.FC<Props> = ({title, Image, marginTop, paddingHorizontal, paddingVertical}) => {

    const buttonContainerStyle: ViewStyle = {
        ...styles.button,
        marginTop: marginTop,
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
      };

  return (
    <TouchableOpacity style={[buttonContainerStyle, colors.bgOrange]}>
        {Image && (
            <Image width={20} height={20} />
        )}
        <Text style={[text.popins_700, text.size_14_20, text.textWhiteColor]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 40,
    gap: 10,
  },
});

export default ButtonOrange;
