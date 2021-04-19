import React from "react";
import { Button } from "react-native";
// Components
import Title from "components/Title";
import Container from "components/Container";
// Utils
import { SafeAreaView } from "react-native-safe-area-context";
// Locales
import i18n from "locales/index";
// Types
import { WelcomeScreenNavigationProp } from "navigation/types";

interface Props {
  navigation: WelcomeScreenNavigationProp;
}

const WelcomeScreen: React.FC<Props> = ({ navigation }) => (
  <SafeAreaView>
    <Container>
      <Title>{i18n.t("welcome")} </Title>
      <Button
        title={i18n.t("goBack")}
        onPress={() => navigation.navigate("Home")}
      />
    </Container>
  </SafeAreaView>
);

export default WelcomeScreen;
