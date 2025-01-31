/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/sign-in` | `/(auth)/sign-up` | `/(auth)/welcome` | `/(root)` | `/(root)/(tabs)` | `/(root)/(tabs)/chatBot` | `/(root)/(tabs)/home` | `/(root)/(tabs)/profile` | `/(root)/(tabs)/reel` | `/(root)/chatBot` | `/(root)/home` | `/(root)/profile` | `/(root)/reel` | `/(root)\About` | `/(subject)` | `/(subject)/ImportantTopics` | `/(subject)/coding` | `/(subject)/electronic` | `/(tabs)` | `/(tabs)/chatBot` | `/(tabs)/home` | `/(tabs)/profile` | `/(tabs)/reel` | `/ImportantTopics` | `/_sitemap` | `/chatBot` | `/coding` | `/electronic` | `/home` | `/profile` | `/reel` | `/sign-in` | `/sign-up` | `/welcome`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
