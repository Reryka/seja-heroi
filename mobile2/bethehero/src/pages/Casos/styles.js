import { StykeSheet } from 'react-native';
import Constants from 'react-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 15,
    color: '#737380',
  },
  headerTerxtBold: {
    fontWeight: 'bold'
  },
  titulo: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },
  descricao : {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  casoList: {
    marginTop: 32,
  },

  caso:{
    padding: 24,
    borderRadius: 8,
    BackgroundColor: "#FFF",
    marginBottom: 16,
  },

  casoPropriedade:{
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  casoValor: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  detailButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailButtonText: {
    color: '#e02041',
    fontSize: 35,
    fontWeight: 'bold'
  }
});
