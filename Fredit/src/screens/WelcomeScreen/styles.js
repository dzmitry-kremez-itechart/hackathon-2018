import { StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 64,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.background
  },
  welcomeText: {
    color: COLORS.primaryDark,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20
  },
  welcomeDescriptionText: {
    color: COLORS.primary,
    fontSize: 24
  },
  buttonWrapper: {
    marginVertical: 32
  }
});
