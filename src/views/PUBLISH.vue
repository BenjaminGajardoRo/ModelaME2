<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Publicar Casting</ion-title>
        <ion-buttons slot="start">
          <ion-button shape="round" @click="$router.push('/tabs/Models')">
            <ion-icon slot="icon-only" :icon="close"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="casting-container">
        <ion-list>
          <!-- Nombre del Casting -->
          <ion-item>
            <ion-input
              label="Nombre del Casting"
              label-placement="stacked"
              :clear-input="true"
              placeholder="Ingresa el nombre del casting"
              required
            >
            </ion-input>
          </ion-item>

          <!-- Qué se necesita -->
          <ion-item>
            <ion-textarea
              label="Qué se necesita"
              label-placement="stacked"
              placeholder="Especifica qué tipo de modelos se necesitan"
              required
            >
            </ion-textarea>
          </ion-item>

          <!-- Dónde es -->
          <ion-item>
            <ion-input
              label="Dónde es"
              label-placement="stacked"
              :clear-input="true"
              placeholder="Ingresa la ubicación del casting"
              required
            >
            </ion-input>
          </ion-item>

          <!-- Mini descripción -->
          <ion-item>
            <ion-textarea
              label="Mini Descripción"
              label-placement="stacked"
              placeholder="Escribe una breve descripción del casting"
              required
            >
            </ion-textarea>
          </ion-item>

          <!-- Nombre del Estudio -->
          <ion-item>
            <ion-input
              label="Nombre del Estudio"
              label-placement="stacked"
              :clear-input="true"
              placeholder="Ingresa el nombre del estudio"
              required
            >
            </ion-input>
          </ion-item>
        </ion-list>

        <!-- Botón de publicar -->
        <ion-button class="semi-transparent-btn" @click="handlePublishCasting">Publicar</ion-button>
      </div>

      <!-- Alertas de éxito y error -->
      <ion-alert
        :is-open="isSuccessAlertOpen"
        header="Éxito"
        message="El casting se ha publicado exitosamente."
        buttons="OK"
        @didDismiss="isSuccessAlertOpen = false"
      ></ion-alert>

      <ion-alert
        :is-open="isErrorAlertOpen"
        header="Error"
        message="Hubo un error al publicar el casting. Por favor, inténtalo de nuevo."
        buttons="OK"
        @didDismiss="isErrorAlertOpen = false"
      ></ion-alert>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonAlert, IonButton, IonInput, IonTextarea, IonIcon, IonButtons } from '@ionic/vue';
import { close } from 'ionicons/icons';

// Estado de las alertas
const isSuccessAlertOpen = ref(false);
const isErrorAlertOpen = ref(false);

// Función para manejar la publicación del casting
const handlePublishCasting = () => {
  // aqui deberia ir el coso pa publicar el casting
  const success = Math.random() > 0.5; // Simulación de éxito o error

  if (success) {
    isSuccessAlertOpen.value = true;
  } else {
    isErrorAlertOpen.value = true; 
  }
};
</script>