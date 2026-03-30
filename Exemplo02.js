import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header} />

      {/* CONTEÚDO */}
      <View style={styles.content}>

        {/* LINHA 1 - 3 CARDS */}
        <View style={styles.row}>
          <View style={styles.card} />
          <View style={styles.card} />
          <View style={styles.card} />
        </View>

        {/* LINHA 2 - PAINEL + SIDEBAR */}
        <View style={styles.row}>
          <View style={styles.mainPanel} />
          <View style={styles.sidePanel} />
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
    height: 50,
    backgroundColor: '#1E3A8A',
  },

  content: {
    flex: 1,
    padding: 8,
    gap: 8,
  },

  row: {
    flexDirection: 'row',
    gap: 8,
  },

  card: {
    flex: 1,
    height: 80,
    backgroundColor: '#60A5FA',
  },

  mainPanel: {
    flex: 2,
    height: 150,
    backgroundColor: '#34D399',
  },

  sidePanel: {
    flex: 1,
    height: 150,
    backgroundColor: '#FBBF24',
  },

  footer: {
    height: 40,
    backgroundColor: '#111827',
  },
});
