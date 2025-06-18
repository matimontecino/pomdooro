import * as Notifications from "expo-notifications";

// Configurar cómo se comportan las notificaciones en primer y segundo plano
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Función para programar una notificación
export const enviarNotificacion = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "⏳ Pomodoro Finalizado",
      body: "Tu tiempo ha terminado. ¡Tómate un descanso!",
      sound: true,
    },
    trigger: null, // Se envía de inmediato
  });
};

// Función para pedir permisos de notificación
export const pedirPermisoNotificaciones = async () => {
  const { status } = await Notifications.getPermissionsAsync();

  if (status !== 'granted') {
    const { status: nuevoStatus } = await Notifications.requestPermissionsAsync();
    if (nuevoStatus !== 'granted') {
      console.warn('Permiso de notificaciones no concedido');
      return false;
    }
  }

  return true;
};
