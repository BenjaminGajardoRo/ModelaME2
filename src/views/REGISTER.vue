<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Registrarse</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="register-container">
        <ion-list>
          <!-- NOMBRE DE USUARIO -->
          <ion-item>
            <ion-input labelPlacement="floating" type="text" placeholder="Nombre de usuario" required>
              <div slot="label">Usuario <ion-text color="danger">(Required)</ion-text></div>
            </ion-input>
          </ion-item>

          <!-- CORREO -->
          <ion-item>
            <ion-input labelPlacement="floating" type="email" placeholder="email@ejemplo.com" required>
              <div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
            </ion-input>
          </ion-item>

          <!-- CONTRASEÑA -->
          <ion-item>
            <ion-input labelPlacement="floating" type="password" placeholder="Tu contraseña" required>
              <div slot="label">Contraseña <ion-text color="danger">(Required)</ion-text></div>
            </ion-input>
          </ion-item>

          <!-- CONFIRMACIÓN DE CONTRASEÑA -->
          <ion-item>
            <ion-input labelPlacement="floating" type="password" placeholder="Confirma tu contraseña" required>
              <div slot="label">Confirmar Contraseña <ion-text color="danger">(Required)</ion-text></div>
            </ion-input>
          </ion-item>
        </ion-list>

        <!-- BOTONCITOS -->
        <ion-button class="semi-transparent-btn" @click="handleCreateAccount">Crear cuenta</ion-button>
        <ion-button class="semi-transparent-btn" @click="$router.push('/login')">Iniciar sesión</ion-button>

        <!-- Alertas -->
        <ion-alert
          :is-open="isSuccessAlertOpen"
          header="Éxito"
          message="Cuenta creada exitosamente."
          buttons="OK"
          @didDismiss="isSuccessAlertOpen = false"
        ></ion-alert>

        <ion-alert
          :is-open="isErrorAlertOpen"
          header="Error"
          message="Hubo un error al crear la cuenta. Por favor, inténtalo de nuevo."
          buttons="OK"
          @didDismiss="isErrorAlertOpen = false"
        ></ion-alert>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAlert, IonButton } from '@ionic/vue';

// Estado de las alertas
const isSuccessAlertOpen = ref(false);
const isErrorAlertOpen = ref(false);

// Función para manejar la creación de cuenta
const handleCreateAccount = () => {
  // aqui hay que poner para que se registre en algun lado
  const success = Math.random() > 0.5; // Simulación de éxito o error

  if (success) {
    isSuccessAlertOpen.value = true; 
  } else {
    isErrorAlertOpen.value = true; 
  }
};
</script>
