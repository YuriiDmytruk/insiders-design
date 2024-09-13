import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {text} from '../../styles';

import ArrowBack from '../../assets/arrow-back.svg';

const Privacy: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.arrow_container}>
        <ArrowBack width={24} height={24} />
      </TouchableOpacity>
      <View style={styles.title_container}>
        <Text style={[text.popins_700, text.size_24_32, text.textMainColor]}>
          Privacy Policy
        </Text>
      </View>

      <View>
        <Text
          style={[text.popins_400, text.size_12_16, text.textSecondaryColor]}>
          Lorem ipsum dolor sit amet consectetur. Ornare sed urna arcu eu
          tincidunt. Amet in lorem sem sed. Arcu pretium quam ultricies arcu.
          Dui faucibus leo egestas habitant tincidunt. Molestie et nunc elit
          porttitor tincidunt mollis.
          {'\n\n'}
          Elementum ut ultricies malesuada suspendisse nec a amet sed. Tellus
          sed ultrices vehicula morbi ut fusce. Nulla eget vitae vivamus in et
          ut hendrerit. Eu congue arcu pharetra senectus eget lectus posuere.
          Eget tincidunt risus pharetra quis massa aliquam commodo. Magna eros
          auctor iaculis at cras.
          {'\n\n'}
          Aliquet viverra aenean ipsum ac libero. Venenatis sodales aliquam arcu
          tincidunt integer lacus nibh in eget. Mauris dolor tellus id metus
          duis ipsum vitae. Fermentum ullamcorper arcu nibh viverra diam
          pulvinar donec ut. Enim dignissim at nulla gravida mattis amet nisi.
        </Text>
      </View>
      <View style={styles.text_container}>
        <Text style={[text.popins_600, text.size_16_16, text.textMainColor]}>
          Sample sub-heading
        </Text>
        <Text
          style={[text.popins_400, text.size_12_20, text.textSecondaryColor]}>
          Lorem ipsum dolor sit amet consectetur. Lectus urna ipsum nibh lorem
          pharetra facilisis ullamcorper. Pharetra ut dignissim semper maecenas
          nibh malesuada purus augue sed. Libero facilisi placerat porttitor
          sapien feugiat posuere feugiat.
          {'\n\n'}
          Amet elit dolor vulputate suspendisse urna cursus. Ac congue massa
          consectetur ultricies. Tortor mauris etiam malesuada amet ipsum.
          Aliquet imperdiet et risus enim massa. Nunc aliquet et integer sem
          posuere adipiscing egestas mauris. Sed et viverra netus scelerisque
          ultrices quam. Id volutpat ac pulvinar lobortis lorem eget congue
          pulvinar. Id eu neque in feugiat sapien sapien lectus.
          {'\n\n'}
          Feugiat euismod vel ut neque sodales. Volutpat et adipiscing amet nunc
          consectetur tortor ullamcorper. Magna massa in aenean nunc in. Ut at
          leo amet mattis odio pharetra aliquam congue. Blandit dolor tempor
          amet risus quis. Pulvinar nulla nunc pretium elit etiam semper nunc
          mollis.
          {'\n\n'}
          Mauris nibh velit nunc convallis neque nullam. Arcu risus amet libero
          volutpat ut. Placerat faucibus viverra arcu neque venenatis blandit
          imperdiet. Tristique platea in volutpat faucibus sodales sed. Ac
          habitant morbi sit in eu rutrum iaculis.
          {'\n\n'}
          Amet commodo a justo pharetra ut tellus facilisis varius arcu.
          Scelerisque amet porttitor in a gravida ut eget in tellus. Imperdiet
          enim a nibh sit ut. Nullam dolor gravida euismod feugiat ornare rutrum
          ipsum. Odio phasellus consectetur interdum amet. Congue vitae id
          turpis ultrices tincidunt aliquam. Nibh eget purus donec in varius est
          tempus vulputate tristique. Id lectus adipiscing.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
  },
  title_container: {
    paddingVertical: 16,
  },
  arrow_container: {
    paddingVertical: 12,
  },
  text_container: {
    marginVertical: 32,
    gap: 16,
  },
});
export default Privacy;
