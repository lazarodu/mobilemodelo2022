import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  cardOrange: {
    backgroundColor: colors.thirdLight,
    borderRadius: 5,
    margin: 10,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    minWidth: "90%",
    height: 45,
  }
})

export default styles