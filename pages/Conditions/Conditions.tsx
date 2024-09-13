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
import TextPart from './components/TextPart';

const Condition: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.arrow_container}>
        <ArrowBack width={24} height={24} />
      </TouchableOpacity>
      <View style={styles.title_container}>
        <Text style={[text.popins_700, text.size_24_32, text.textMainColor]}>
          Sample Terms and Conditions ("Terms")
        </Text>
      </View>

      <View style={styles.text_container}>
        <Text
          style={[text.popins_400, text.size_12_16, text.textSecondaryColor]}>
          Our Terms and Conditions were last updated on July 10th, 2024.{'\n\n'}
          Please read these terms and conditions carefully before using Our
          Service.
        </Text>
      </View>

      <View style={styles.interpretation_container}>
        <Text style={[text.popins_700, text.size_18_24, text.textMainColor]}>
          Interpretation and Definitions
        </Text>
        <Text
          style={[text.popins_500, text.size_14_14, text.textSecondaryColor]}>
          INTERPRETATION
        </Text>
        <Text
          style={[text.popins_400, text.size_12_20, text.textSecondaryColor]}>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </Text>
      </View>

      <View style={styles.definitions_container}>
        <Text
          style={[text.popins_500, text.size_14_14, text.textSecondaryColor]}>
          DEFINITIONS
        </Text>
        <Text
          style={[text.popins_400, text.size_12_20, text.textSecondaryColor]}>
          For the purposes of these Terms and Conditions:
        </Text>
        <View style={styles.parts_container}>
          <TextPart
            title="“Affiliate” "
            value='means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.'
          />
          <TextPart
            title="“Account” "
            value="means a unique account created for You to access our Service or parts of our Service."
          />
          <TextPart
            title="“Company” "
            value='(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to [COMPANY_INFORMATION].'
          />
          <TextPart title="“Country” " value="refers to [COMPANY_COUNTRY]." />
          <TextPart
            title="“Content” "
            value="refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content."
          />
          <TextPart
            title="“Device” "
            value="means any device that can access the Service such as a computer, a cell phone or a digital tablet."
          />
          <TextPart
            title="“Feedback” "
            value="means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service."
          />
          <TextPart title="“Service” " value="refers to the Website." />
          <TextPart
            title="“Terms and Conditions” "
            value='(also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.'
          />
          <TextPart
            title="“Third-party Social Media Service” "
            value=" means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service."
          />
          <TextPart
            title="“Website” "
            value="refers to [WEBSITE_NAME], accessible from [WEBSITE_URL]"
          />
          <TextPart
            title="“You” "
            value=" means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."
          />
        </View>
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
    paddingVertical: 12,
  },
  arrow_container: {
    paddingVertical: 12,
  },
  text_container: {
    marginTop: 16,
  },
  interpretation_container: {
    marginTop: 32,
    gap: 16,
  },
  definitions_container: {
    marginTop: 32,
    gap: 16,
  },
  parts_container:{
    gap: 4,
    marginBottom: 32,
  },
});
export default Condition;
