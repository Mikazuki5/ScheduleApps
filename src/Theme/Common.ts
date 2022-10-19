/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import { CommonParams } from './theme'

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      line: {
        height: 5,
        width: 60,
        backgroundColor: '#e5e5e5',
        marginVertical: 15,
        alignSelf: 'center',
        borderRadius: 10
      },
      verticleDivider: {
        height: 74,
        width: 1,
        backgroundColor: 'grey',
        opacity: 0.4,
      },
      dash: {
        height: 0.5,
        marginBottom: 18,
        borderStyle: 'dashed',
        borderWidth: 0.5,
        borderColor: Colors.gray2
      },
      horizontalLined: {
        borderBottomWidth: 1, borderColor: Colors.gray2
      },
      cardShadows: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
      cardShadows2: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
      }
    }),
  }
}
