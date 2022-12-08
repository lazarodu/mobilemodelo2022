import React, { useEffect, useRef, useState } from "react";
import { Text, ImageBackground, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { ButtonComp, CardSocialComp, LoadingComp } from "../../components";
import styles from "./styles";
import { useAuth } from "../../hook/auth";
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from "../../services/data/Push";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function Perfil() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && user.profile_photo_url) {
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    async function fetchToken() {
      const token = await registerForPushNotificationsAsync()
      console.log(token)
    }
    fetchToken()
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingComp />
      ) : (
        <ImageBackground
          source={require("../../assets/fundo.png")}
          style={styles.container}
        >
          <Image source={{ uri: user?.profile_photo_url }} style={styles.img} />
          <Text style={styles.title}>{user?.name}</Text>
          <CardSocialComp>
            <>
              <FontAwesome5 name="facebook" style={styles.icon} />
              <Text style={styles.link}>https://facebook.com</Text>
            </>
          </CardSocialComp>
          <CardSocialComp>
            <>
              <FontAwesome5 name="instagram" style={styles.icon} />
              <Text style={styles.link}>https://instagram.com</Text>
            </>
          </CardSocialComp>
          <CardSocialComp>
            <>
              <FontAwesome5 name="linkedin" style={styles.icon} />
              <Text style={styles.link}>https://linkedin.com</Text>
            </>
          </CardSocialComp>
          <ButtonComp
            title="Alterar Senha"
            type="third"
            onPress={() => console.log("Alterar Senha")}
          />
          <ButtonComp
            title="Sair"
            type="third"
            onPress={() => console.log("Sair")}
          />
        </ImageBackground>
      )}
    </>
  );
}
