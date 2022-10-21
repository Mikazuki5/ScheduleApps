import { ThemeVariables } from "./theme";

export default function ({}: ThemeVariables) {
  return {
    splash_animation: require('@/Assets/Animation/animation1.json'),
    notification: require('@/Assets/Animation/notif_animation.json'),
    refresh: require('@/Assets/Animation/refresh_animation.json'),
    scanner: require('@/Assets/Animation/scanner_animation.json'),
  }
}