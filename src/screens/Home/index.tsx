import React from "react";
import { Button } from "react-native";
// Components
import Title from "components/Title";
import Description from "components/Description";
import Container from "components/Container";
// Utils
import { SafeAreaView } from "react-native-safe-area-context";
// Locales
import i18n from "locales/index";
// Types
import { HomeScreenNavigationProp } from "navigation/types";

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => (
  <SafeAreaView>
    <Container>
      <Title>{i18n.t("title")} </Title>
      <Description>{i18n.t("description")}</Description>
      <Button
        title={i18n.t("gotToWelcome")}
        onPress={() => navigation.navigate("Welcome")}
      />
    </Container>
  </SafeAreaView>
);

export default HomeScreen;
