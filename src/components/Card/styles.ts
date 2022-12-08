import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  cardOrange: {
    backgroundColor: colors.thirdLight,
    borderRadius: 5,
    margin: 10,
    alignItems: "center",
    width: "95%",
    padding: 10
  },
  msg: {
    textAlign: "justify",
  },
  topicos: {
    flexDirection: "row",
  },
  topic: {
    backgroundColor: colors.third,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  },
  img: {
    width: 100,
    height: 100,
  },
})

export default styles
