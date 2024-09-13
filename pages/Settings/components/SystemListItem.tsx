import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {text} from '../../../styles';

type Props = {
  image: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string,
}

const SystemListItem: React.FC<Props>  = ({image: Image, title}) => {
  return (
    <View style={styles.container}>
        <Image width={20} height={20}/>
        <Text style={[text.popins_500, text.size_14_20, text.textMainColor]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 12,
        paddingVertical: 12,
    },
    image: {

    },
});

export default SystemListItem;
