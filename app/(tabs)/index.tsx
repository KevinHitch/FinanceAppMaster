import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ReportScreen() {
  const diversificationData = {
    labels: ['Savings', 'Checking', 'IRA', 'Stock'],
    datasets: [
      {
        data: [630, 192, 948, 946],
        backgroundColor: ['#ff9800', '#ffc107', '#4caf50', '#03a9f4'],
        hoverBackgroundColor: ['#ff9800', '#ffc107', '#4caf50', '#03a9f4'],
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Financial Report</Text>
        <Text style={styles.subtitle}>May 31 - July 23 (53 days)</Text>

        <View style={styles.overviewContainer}>
          <View style={[styles.overviewItem, { backgroundColor: '#2196f3' }]}>
            <Text style={styles.overviewLabel}>Net</Text>
            <Text style={styles.overviewValue}>2,304</Text>
          </View>
          <View style={[styles.overviewItem, { backgroundColor: '#4caf50' }]}>
            <Text style={styles.overviewLabel}>Asset</Text>
            <Text style={styles.overviewValue}>2,716</Text>
          </View>
          <View style={[styles.overviewItem, { backgroundColor: '#f44336' }]}>
            <Text style={styles.overviewLabel}>Debt</Text>
            <Text style={styles.overviewValue}>413</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Performance</Text>
          <Text style={styles.emptyText}>No content in table</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Composition</Text>
          <View style={styles.chartContainer}>
            <Pie data={diversificationData} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Diversification</Text>
          <View style={styles.chartContainer}>
            <Pie data={diversificationData} />
            <View style={styles.accountList}>
              {diversificationData.labels.map((label, index) => (
                <View key={label} style={styles.accountItem}>
                  <Text style={styles.accountName}>{label}</Text>
                  <Text style={styles.accountValue}>
                    ${diversificationData.datasets[0].data[index]}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Debt</Text>
          <Text style={styles.emptyText}>No content in table</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2937',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
    marginLeft: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#9ca3af',
    marginLeft: 16,
    marginBottom: 16,
  },
  overviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  overviewItem: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 4,
  },
  overviewLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  overviewValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#374151',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  emptyText: {
    color: '#9ca3af',
    textAlign: 'center',
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountList: {
    flex: 1,
    marginLeft: 16,
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  accountName: {
    color: '#fff',
  },
  accountValue: {
    color: '#fff',
    fontWeight: 'bold',
  },
});