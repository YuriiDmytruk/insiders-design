import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

import Camera from '../assets/account/camera-alt.svg';
import { colors } from '../styles';

type Props = {
    Logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    logo_width: number;
    logo_height: number;
    bottom: number;
    right: number;
}

const LogoCamera: React.FC<Props> = ({ Logo, logo_width, logo_height, bottom, right }) => {
  const cameraContainerStyle: ViewStyle = {
    ...styles.camera_container,
    bottom: bottom,
    right: right,
  };

  return (
    <View style={styles.container}>
      <Logo width={logo_width} height={logo_height} />
      <View style={[cameraContainerStyle, colors.bgWhite]}>
        <Camera />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative', // Ensure the container is positioned relatively
    gap: 12,
    paddingHorizontal: 20,
  },
  camera_container: {
    padding: 10,
    position: 'absolute',
    borderRadius: 32,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
});

export default LogoCamera;
