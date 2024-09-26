<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Notificaciones</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content color="light">
      <!-- Sección: Castings Recientes -->
      <ion-list :inset="true" class="notification-section">
        <ion-item-divider class="section-divider">
          <ion-icon slot="start" name="people-outline"></ion-icon>
          <ion-label>Castings Recientemente Publicados</ion-label>
        </ion-item-divider>

        <ion-item class="notification-item">
          <img src="https://img.icons8.com/?size=100&id=24552&format=png&color=22C3E6" alt="Icono Casting" style="width: 24px; height: 24px;" />
          <ion-label>Publicidad para COCA-COLA</ion-label>
        </ion-item>
        <ion-item class="notification-item">
          <img src="https://img.icons8.com/?size=100&id=24552&format=png&color=22C3E6" alt="Icono Casting" style="width: 24px; height: 24px;" />
          <ion-label>Comercial para DUOC UC</ion-label>
        </ion-item>
        <ion-item class="notification-item">
          <img src="https://img.icons8.com/?size=100&id=24552&format=png&color=22C3E6" alt="Icono Casting" style="width: 24px; height: 24px;" />
          <ion-label>Shooting para VOUGE</ion-label>
        </ion-item>
      </ion-list>

      <!-- Sección: Nuevos Talentos -->
      <ion-list :inset="true" class="notification-section">
        <ion-item-divider class="section-divider">
          <ion-icon slot="start" name="people-outline"></ion-icon>
          <ion-label>Nuevos Talentos</ion-label>
        </ion-item-divider>

        <ion-item class="notification-item">
          <img src="https://img.icons8.com/?size=100&id=37170&format=png&color=22C3E6" alt="Icono Nuevos Talentos" style="width: 24px; height: 24px;" />
          <ion-label>Camila Sánchez</ion-label>
        </ion-item>
        <ion-item class="notification-item">
          <img src="https://img.icons8.com/?size=100&id=37170&format=png&color=22C3E6" alt="Icono Nuevos Talentos" style="width: 24px; height: 24px;" />
          <ion-label>Diego Ramírez</ion-label>
        </ion-item>
        <ion-item class="notification-item">
          <img src="https://img.icons8.com/?size=100&id=37170&format=png&color=22C3E6" alt="Icono Nuevos Talentos" style="width: 24px; height: 24px;" />
          <ion-label>Isabella López</ion-label>
        </ion-item>
      </ion-list>

      <!-- Sección: Avisos de Selección para Castings -->
      <ion-list :inset="true" class="notification-section">
        <ion-item-divider class="section-divider">
          <ion-icon slot="start" name="checkmark-done-outline"></ion-icon>
          <ion-label>Avisos de Selección para Castings</ion-label>
        </ion-item-divider>

        <ion-item class="notification-item">
          <img src="https://img.icons8.com/?size=100&id=11208&format=png&color=22C3E6" alt="Icono Selección Casting" style="width: 24px; height: 24px;" />
          <ion-label>SELECCIONADO Fotografía para PLAYBOY</ion-label>
        </ion-item>
        <ion-item class="notification-item">
          <img src="https://img.icons8.com/?size=100&id=11208&format=png&color=22C3E6" alt="Icono Selección Casting" style="width: 24px; height: 24px;" />
          <ion-label>SELECCIONADO Evento para EXPO-OTAKU</ion-label>
        </ion-item>
        <ion-item class="notification-item">
          <img src="https://img.icons8.com/?size=100&id=11208&format=png&color=22C3E6" alt="Icono Selección Casting" style="width: 24px; height: 24px;" />
          <ion-label>SELECCIONADO Fotografía Editorial MARGOT</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonItemDivider, IonIcon } from '@ionic/vue';
</script>