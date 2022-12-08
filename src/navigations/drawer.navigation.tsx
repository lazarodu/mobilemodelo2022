import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";
import colors from "../styles/colors";
import {
  MapScreen,
  PerfilScreen,
  QrCodeScreen,
  CameraScreen,
  SairScreen,
  ArquivoScreen,
  VideoAudioScreen,
  AcelerometroScreen,
  PedometroScreen,
  MagnetoScreen,
  GyroscopioScreen
} from "../screens";
import ChatNavigation from "./chat.navigation";

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
        drawerStyle: {
          backgroundColor: colors.secondary,
        },
        drawerInactiveTintColor: colors.white,
        drawerActiveTintColor: colors.white,
      }}
    >
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          drawerLabel: "Perfil",
          drawerIcon: () => (
            <Ionicons name="person" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="ChatNavigation"
        component={ChatNavigation}
        options={{
          title: "Chat",
          drawerLabel: "Chat",
          drawerIcon: () => (
            <Ionicons name="chatbubbles" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Mapa"
        component={MapScreen}
        options={{
          drawerLabel: "Mapa",
          drawerIcon: () => (
            <Ionicons name="map" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="QrCode"
        component={QrCodeScreen}
        options={{
          drawerLabel: "Qrcode",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          drawerLabel: "Câmera",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="camera"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Arquivos"
        component={ArquivoScreen}
        options={{
          drawerLabel: "Arquivos",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="file-account"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="AudioVideo"
        component={VideoAudioScreen}
        options={{
          drawerLabel: "Áudio Vídeo",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="video"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Acelerometro"
        component={AcelerometroScreen}
        options={{
          drawerLabel: "Acelerômetro",
          drawerIcon: () => (
            <FontAwesome
              name="car"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Pedometro"
        component={PedometroScreen}
        options={{
          drawerLabel: "Pedômetro",
          drawerIcon: () => (
            <Foundation name="foot" size={24} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Magneto"
        component={MagnetoScreen}
        options={{
          drawerLabel: "Magneto",
          drawerIcon: () => (
            <FontAwesome name="magnet"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Gyroscopio"
        component={GyroscopioScreen}
        options={{
          drawerLabel: "Gyroscópio",
          drawerIcon: () => (
            <FontAwesome
              name="balance-scale"
              size={24}
              color={colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Sair"
        component={SairScreen}
        options={{
          drawerLabel: "Sair",
          drawerIcon: () => (
            <Ionicons name="exit" size={24} color={colors.white} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
