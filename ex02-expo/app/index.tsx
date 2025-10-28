import * as React from "react";
import { useRouter } from "expo-router";
import { useState } from "react";
import {Alert,Image,Pressable,ScrollView,StyleSheet,View,} from "react-native";
import {Text,Button,TextInput,Card,Divider,} from "react-native-paper";
import { SectionListExample } from "@/components/SectionListExample";

export default function Index() {
  const router = useRouter();
  const [idade, onChangeIdade] = useState("");
  const [showDetails, setShowDetails] = useState(true);
  const anoNasc = new Date().getFullYear() - parseInt(idade);

  return (
    
      <ScrollView contentContainerStyle={styles.container}>
        <Text variant="displayMedium" style={styles.title}>
          Olá Turma!
        </Text>

        <Card style={styles.card}>
          <Card.Cover
            source={require("@/assets/images/avatar.jpg")}
            style={styles.avatar}
          />
          <Card.Content>
            <Pressable onPress={() => setShowDetails(!showDetails)}>
              <Text
                numberOfLines={showDetails ? 0 : 2}
                style={styles.text}
                variant="bodyLarge"
              >
                Este é um App de exemplo da disciplina Programação Web e Mobile
                do Curso de Ciência da Computação da Universidade Católica de
                Pernambuco (semestre 2025.2)
              </Text>
            </Pressable>
          </Card.Content>
        </Card>

        {!isNaN(anoNasc) && (
          <Text variant="titleMedium" style={{ marginVertical: 10 }}>
            Você nasceu em {anoNasc}
          </Text>
        )}

        <TextInput
          mode="outlined"
          label="Qual a sua idade?"
          value={idade}
          onChangeText={onChangeIdade}
          keyboardType="numeric"
          style={styles.input}
        />

        <View style={styles.buttonsContainer}>
          <Button
            mode="contained"
            onPress={() => Alert.alert("Botão OK pressionado")}
          >
            OK
          </Button>
          <Button
            mode="outlined"
            onPress={() => Alert.alert("Botão Cancel pressionado")}
          >
            Cancelar
          </Button>
        </View>

        <Divider style={{ marginVertical: 20, width: "80%" }} />

        <Button
          icon="arrow-right"
          mode="contained-tonal"
          onPress={() => router.navigate("/taskList")}
        >
          Ir para Lista de Tarefas
        </Button>

        <View style={styles.space} />
      </ScrollView>
    
  );
}


function App() {
  
  return <SectionListExample />;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FAF3E0",
    padding: 20,
  },
  title: {
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    width: "90%",
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
  },
  avatar: {
    height: 150,
  },
  text: {
    marginTop: 15,
  },
  input: {
    width: 250,
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 280,
    marginTop: 20,
  },
  space: {
    height: 80,
  },
});
