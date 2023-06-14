import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TeamEntity from './src/entities/team_entity';
import { Image as ExpoImage } from 'expo';

export default function App() {
    return (
      <View style={styles.container}>
        <Text>Campeonato Brasileiro</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

const tabelaBrasileirao = [
  {
    posicao: 1,
    nome: 'Flamengo',
    escudo: require('./caminho/para/escudo/flamengo.png'),
    pontos: 90,
    golsAFavor: 86,
    golsSofridos: 37,
    saldoGols: 49
  },
  {
    posicao: 2,
    nome: 'Santos',
    escudo: require('./caminho/para/escudo/santos.png'),
    pontos: 74,
    golsAFavor: 60,
    golsSofridos: 33,
    saldoGols: 27
  },
  {
    posicao: 3,
    nome: 'Botafogo',
    escudo: require('./caminho/para/escudo/botafogo.png'),
    pontos: 73,
    golsAFavor: 50,
    golsSofridos: 32,
    saldoGols: 26
  },
  {
    posicao: 4,
    nome: 'Fluminense',
    escudo: require('./caminho/para/escudo/fluminense.png'),
    pontos: 72,
    golsAFavor: 49,
    golsSofridos: 31,
    saldoGols: 25
  },
  {
    posicao: 5,
    nome: 'São Paulo',
    escudo: require('./caminho/para/escudo/sãopaulo.png'),
    pontos: 72,
    golsAFavor: 48,
    golsSofridos: 30,
    saldoGols: 25
  },
  {
    posicao: 6,
    nome: 'Palmeiras',
    escudo: require('./caminho/para/escudo/palmeiras.png'),
    pontos: 71,
    golsAFavor: 47,
    golsSofridos: 29,
    saldoGols: 24
  },
  {
    posicao: 7,
    nome: 'Bragantino',
    escudo: require('./caminho/para/escudo/bragantino.png'),
    pontos: 70,
    golsAFavor: 46,
    golsSofridos: 23,
    saldoGols: 26
  },
  {
    posicao: 8,
    nome: 'Fortaleza',
    escudo: require('./caminho/para/escudo/fortaleza.png'),
    pontos: 70,
    golsAFavor: 47,
    golsSofridos: 22,
    saldoGols: 25
  },
  {
    posicao: 9,
    nome: 'Gremio',
    escudo: require('./caminho/para/escudo/gremio.png'),
    pontos: 69,
    golsAFavor: 47,
    golsSofridos: 21,
    saldoGols: 24
  },
  {
    posicao: 10,
    nome: 'Atletico MG',
    escudo: require('./caminho/para/escudo/atleticomg.png'),
    pontos: 68,
    golsAFavor: 20,
    golsSofridos: 20,
    saldoGols: 23
  },
  {
    posicao: 11,
    nome: 'Bahia',
    escudo: require('./caminho/para/escudo/bahia.png'),
    pontos: 55,
    golsAFavor: 19,
    golsSofridos: 29,
    saldoGols: 21
  },
  {
    posicao: 12,
    nome: 'Goias',
    escudo: require('./caminho/para/escudo/goias.png'),
    pontos: 47,
    golsAFavor: 30,
    golsSofridos: 22,
    saldoGols: 29
  },
  {
    posicao: 13,
    nome: 'Avai',
    escudo: require('./caminho/para/escudo/avai.png'),
    pontos: 43,
    golsAFavor: 29,
    golsSofridos: 32,
    saldoGols: 28
  },
  {
    posicao: 14,
    nome: 'Coritiba',
    escudo: require('./caminho/para/escudo/coritiba.png'),
    pontos: 33,
    golsAFavor: 25,
    golsSofridos: 36,
    saldoGols: 25
  },
  {
    posicao: 15,
    nome: 'Internacional',
    escudo: require('./caminho/para/escudo/internacional.png'),
    pontos: 33,
    golsAFavor: 24,
    golsSofridos: 32,
    saldoGols: 24
  },
  {
    posicao: 17,
    nome: 'Resende',
    escudo: require('./caminho/para/escudo/resende.png'),
    pontos: 32,
    golsAFavor: 23,
    golsSofridos: 36,
    saldoGols: 23
  },
  {
    posicao: 18,
    nome: 'Chapecoense',
    escudo: require('./caminho/para/escudo/cheapecoense.png'),
    pontos: 32,
    golsAFavor: 23,
    golsSofridos: 36,
    saldoGols: 23
  },
  {
    posicao: 19,
    nome: 'Atletico Pr',
    escudo: require('./caminho/para/escudo/atletico-pr.png'),
    pontos: 31,
    golsAFavor: 22,
    golsSofridos: 37,
    saldoGols: 20
  },
  {
    posicao: 20,
    nome: 'Vasco',
    escudo: require('./caminho/para/escudo/vasco.png'),
    pontos: 20,
    golsAFavor: 20,
    golsSofridos: 40,
    saldoGols: 10
  },
  
  
];

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Tabela do Brasileirão</Text>
      {tabelaBrasileirao.map((equipe, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('Detalhes', { equipe })}
        >
          <View>
            <ExpoImage source={equipe.escudo} />
            <Text>{equipe.nome}</Text>
            <Text>Posição: {equipe.posicao}</Text>
            <Text>Pontos: {equipe.pontos}</Text>
            <Text>Gols a Favor: {equipe.golsAFavor}</Text>
            <Text>Gols Sofridos: {equipe.golsSofridos}</Text>
            <Text>Saldo de Gols: {equipe.saldoGols}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const DetalhesScreen = ({ route }) => {
  const { equipe } = route.params;

  return (
    <View>
      <ExpoImage source={equipe.escudo} />
      <Text>{equipe.nome}</Text>
      <Text>Posição: {equipe.posicao}</Text>
      <Text>Pontos: {equipe.pontos}</Text>
      <Text>Gols a Favor: {equipe.golsAFavor}</Text>
      <Text>Gols Sofridos: {equipe.golsSofridos}</Text>
      <Text>Saldo de Gols: {equipe.saldoGols}</Text>
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 30,
      marginBottom: 16,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 30,
      fontWeight: '700',
      marginBottom: 16,
      marginTop: 30
    },
    table: {
      flex: 1,
      width: '100%'
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingHorizontal: 16,
      paddingTop: 8,
      height: 50
    },
    team_shield: {
      width: 30,
      height: 30
    },
    team_name:{
      fontSize: 20,
      width: 150,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    team_position:{
      width: 30,
      fontSize: 20,
    }
  });