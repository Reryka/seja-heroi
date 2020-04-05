import React, {useState, useEffect} from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import {View,FlatList, Image, Text, TouchableOpacity} from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles';
import api from '../../services/api';

export default function Casos(){
  const navigation = useNavigation();
  const [casos, setCasos] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(caso){
    navigation.navigate('Detail', { caso });
  }
  
  async function loadCasos(){
    if (loading) {
      return;
    }

    if (total > 0 && casos.length === total) {
      return;
    }
    
    setLoading(true);

    const response = await api.get('casos', {
      params: { page}
    });

    setCasos([ ... casos, ... response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadCasos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>
      <Text style={styles.titulo}>Bem-Vindo!</Text>
      <Text style={styles.descricao}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList
        style={styles.CasosList} 
        data = {casos}
        keyExtractor={caso => String(caso.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadCasos}
        onEndReachedThreshold={0.2}
        renderItem={({ item: caso })=>{
          <View  style={styles.casos}>
            <Text style={styles.casoPropriedade}>ONG:</Text>
            <Text style={styles.casoValor}>{caso.nome}</Text>

            <Text style={styles.casoPropriedade}>CASO:</Text>
            <Text style={styles.casoValor}>{caso.descricao}</Text>

            <Text style={styles.casoPropriedade}>Valor:</Text>
            <Text style={styles.casoValor}>
                {Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL'
                }).format(caso.valor)}
            </Text>

            <TouchableOpacity 
              style={stykes.detailButton}
              onPress={() => navigateToDetails(caso)}>

            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
            <Feather name="arraow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        }}
      />
    </View>
  )
}