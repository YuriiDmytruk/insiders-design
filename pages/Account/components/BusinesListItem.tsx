import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {text} from '../../../styles';

type Props = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    value: string;
}

const BusinesListItem: React.FC<Props> = ({Icon, title, value}) => {
  return (
    <View style={styles.container}>
        <Icon width={20} height={20}/>
        <View style={styles.text_container}>
            <Text style={[text.popins_400, text.size_12_16, text.textSecondaryColor]}>{title}</Text>
            <Text style={[text.popins_600, text.size_12_16, text.textMainColor]}>{value}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 16,
    },
    text_container: {
        gap: 4,
    },
});

export default BusinesListItem;
