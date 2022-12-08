import { ButtonProps } from "react-native"

export interface ButtonProp extends ButtonProps {
  onPress: () => void
  title: string
  type: 'primary' | 'secondary' | 'third'
}