import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name="person"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          headerTitle: "Workouts",
          title: "workouts",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="barbell-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="recipes"
        options={{
          headerTitle: "Recipes",
          title: "Recipes",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="restaurant-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          headerTitle: "Community",
          title: "Community",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="people-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          headerTitle: "Progress",
          title: "Progress",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="stats-chart-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
