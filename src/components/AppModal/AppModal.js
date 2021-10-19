import React from 'react';
import styles from './AppModalStyles';
import {View, ScrollView, Modal, Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon/Icon';

const AppModal = ({
  title,
  modalBody,
  modalFooter,
  isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <Modal visible={isModalVisible} transparent>
      <TouchableOpacity
        style={styles.modalWrapper}
        onPress={() => setIsModalVisible(false)}>
        <View style={styles.modalView}>
          <ScrollView>
            <View style={styles.header}>
              <Icon type="evil" name="close" size={27} />
              <Text style={styles.title}>{title || 'RNContacts'}</Text>
              <View />
              <View />
              <View />
              <View />
              <View />
            </View>
            <View style={styles.footerSeparator} />
            <View style={styles.body}>{modalBody}</View>

            {modalFooter}
            {!modalFooter && (
              <View style={styles.footer}>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;
