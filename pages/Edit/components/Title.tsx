import React from 'react';
import {Text} from 'react-native';

import {text} from '../../../styles';

type Props = {
    title: string,
}

const Title: React.FC<Props> = ({title}) => {
  return (
    <Text style={[text.popins_400, text.size_12_16, text.textSecondaryColor]}>{title}</Text>
  );
};

export default Title;
