import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#242424',
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 60,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }
        }}>
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-variant" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorite"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bookmark-outline" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bell-outline" size={28} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-outline" size={28} color={color} />,
                }}
            />
        </Tabs>
    );
}