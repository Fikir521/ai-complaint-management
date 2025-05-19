import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Pressable,
  Platform,
  StatusBar,
} from 'react-native';
import { Slot, useRouter, usePathname, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function Layout() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [translateX] = useState(new Animated.Value(-SCREEN_WIDTH));
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(translateX, {
        toValue: -SCREEN_WIDTH,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  const navigate = (path: string) => {
    Animated.timing(translateX, {
      toValue: -SCREEN_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setMenuVisible(false);
      router.push(path);
    });
  };

  const getTitle = () => {
    switch (true) {
      case pathname.includes('/help-support'):
        return 'Help & Support';
      case pathname.includes('/user-profile'):
        return 'User Profile';
      case pathname.includes('/make-complaint'):
        return 'Make Complaint';
      case pathname.includes('/complaint-history'):
        return 'Complaint History';
      case pathname.includes('/change-password'):
        return 'Change Password';
      case pathname.includes('/settings-privacy'):
        return 'Settings & Privacy';
      default:
        return 'EEU Complaint System';
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => (
            <View style={[styles.headerContainer]}>
              <View style={styles.header}>
                <TouchableOpacity onPress={toggleMenu}>
                  <Ionicons name="menu" size={28} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>{getTitle()}</Text>
              </View>
            </View>
          ),
          headerShown: true,
        }}
      />

      {menuVisible && (
        <Pressable style={styles.overlay} onPress={toggleMenu} />
      )}

      <Animated.View style={[styles.sideMenu, { transform: [{ translateX }] }]}>
        <TouchableOpacity onPress={() => navigate('/(authenticated)/user-profile')}>
          <Text style={styles.menuItem}>User Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('/(authenticated)/make-complaint')}>
          <Text style={styles.menuItem}>Make Complaint</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('/(authenticated)/complaint-history')}>
          <Text style={styles.menuItem}>Complaint History</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('/(authenticated)/change-password')}>
          <Text style={styles.menuItem}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('/(authenticated)/settings-privacy')}>
          <Text style={styles.menuItem}>Settings & Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('/(authenticated)/help-support')}>
          <Text style={styles.menuItem}>Help & Support</Text>
        </TouchableOpacity>
      </Animated.View>

      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    gap: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 9,
  },
  sideMenu: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: '75%',
    height: '100%',
    backgroundColor: '#f0f0f0',
    padding: 20,
    zIndex: 10,
  },
  menuItem: {
    paddingVertical: 15,
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});






