import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header} />

      {/* ÁREA PRINCIPAL */}
      <View style={styles.main}>

        {/* CARDS SUPERIORES */}
        <View style={styles.topCards}>
          <View style={styles.smallCard} />
          <View style={styles.smallCard} />
          <View style={styles.smallCard} />
        </View>

        {/* ÁREA INFERIOR */}
        <View style={styles.bottomArea}>
          <View style={styles.bigBox} />
          <View style={styles.sideBox} />
        </View>

      </View>

      {/* FOOTER */}
      <View style={styles.footer} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 60,
    backgroundColor: '#0F172A',
  },

  main: {
    flex: 1,
    padding: 10,
  },

  topCards: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  smallCard: {
    width: '30%',
    height: 90,
    backgroundColor: '#3B82F6',
  },

  bottomArea: {
    flexDirection: 'row',
    flex: 1,
    gap: 10,
  },

  bigBox: {
    flex: 3,
    backgroundColor: '#10B981',
  },

  sideBox: {
    flex: 1,
    backgroundColor: '#F59E0B',
  },

  footer: {
    height: 50,
    backgroundColor: '#020617',
  },
});
