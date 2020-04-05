import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {View,FlatList, Image, Text, TouchableOpacity, Linking} from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail(){
  const navigation = useNavigation();
  const route = useRoute();

  const caso = route.params.caso;
  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar com o valor de R$120,00';

  function navigateToBack(){
    navigation.goBack();
  }

  function sendEmail(){
    MailComposer.composeAsync({
      subject: 'Teste',
      recipents:['reryka@gmail.com'],
      body:message
    })
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5544991016370?text=${message}`);
  }

  return (
    <View  style={styles.container} >
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity style={stykes.detailButton} onPress={navigateToBack}>
            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
            <Feather name="arraow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View  style={styles.casos}>
        <Text style={[styles.casoPropriedade, {marginTop: 0}]}>ONG:</Text>
        <Text style={styles.casoValor}>{caso.nome} de {caso.cidade}/{caso.uf}</Text>

        <Text style={styles.casoPropriedade}>CASO:</Text>
        <Text style={styles.casoValor}>{caso.descricao}</Text>

        <Text style={styles.casoPropriedade}>Valor:</Text>
        <Text style={styles.casoValor}>
            {Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL'
            }).format(caso.valor)}
        </Text>
      </View>

      <View style={styles.contactBox}>
          <Text style={styles.heroTitulo}>Salve o dia</Text>
          <Text style={styles.heroTitulo}>Seja o herói deste caso</Text>

          <Text style={styles.heroDescricao}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>whatsApp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sendEmail}>
              <Text style={styles.actionText}>Email</Text>
            </TouchableOpacity>            

          </View>
      </View>
    </View>
  );
}