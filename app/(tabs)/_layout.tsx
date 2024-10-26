import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused ? 'bar-chart' : 'bar-chart-outline';
          } else if (route.name === 'statements') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'budget') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4a8af4',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#1f2937',
          borderTopColor: '#374151',
        },
        headerStyle: {
          backgroundColor: '#1f2937',
        },
        headerTintColor: '#fff',
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Report',
        }}
      />
      <Tabs.Screen
        name="statements"
        options={{
          title: 'Statements',
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: 'Budget',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}