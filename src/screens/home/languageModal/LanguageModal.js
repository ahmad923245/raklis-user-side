import React from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { setLanguage } from '../../../redux/actions/home';
import { theme } from '../../../theme/theme';
import Styles from '../../auth/login/styles';


const LanguageModal = ({ navigation }) => {

    const [modalVisibel, setmodalVisibel] = useState(true)
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1 }}>
            <Modal
                transparent={true}
                visible={modalVisibel}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{t('selectlanguage')}</Text>


                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-evenly'
                        }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    i18n.changeLanguage('en');
                                    dispatch(setLanguage('en'));
                                    navigation.replace('Login')

                                }}>
                                <Text style={[Styles.buttonText, { color: 'black' }]}>{t('english')}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    i18n.changeLanguage('ara');
                                    dispatch(setLanguage('ara'));
                                    navigation.replace('Login')

                                }}>
                                <Text style={[Styles.buttonText, { color: 'black' }]}>عربي</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </Modal>
        </View>
    )
}

export default LanguageModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        color: 'black'
    },
    button: {
        marginTop: 20,
        padding: 10,
        margin: 6,
        backgroundColor: theme.colors.bgColor
    }


})