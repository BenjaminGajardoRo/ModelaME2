<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio de Sesión</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div class="login-container">
        <ion-list>
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
        </ion-list>

        <!-- BOTONCITOS -->
        <ion-button class="semi-transparent-btn" @click="$router.push('/tabs/models') ">Iniciar sesión</ion-button>
        <ion-button class="semi-transparent-btn" @click="$router.push('/register')">Registrarse</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { IonButton } from '@ionic/vue';
</script>