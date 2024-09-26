<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <!-- Tab 1 - Buscar castings -->
        <ion-tab-button tab="Castings" href="/tabs/Castings">
          <img src="https://img.icons8.com/?size=100&id=6sRtDrVwv0Kb&format=png&color=000000" alt="Buscar Castings" style="width: 24px; height: 24px;" />
          <ion-label>Castings</ion-label>
        </ion-tab-button>

        <!-- Tab 2 - Publicar casting -->
        <ion-tab-button tab="Publicar" href="/tabs/Publish">
          <img src="https://img.icons8.com/?size=100&id=12779&format=png&color=000000" alt="Publicar" style="width: 24px; height: 24px;" />
          <ion-label>Publicar</ion-label>
        </ion-tab-button>

        <!-- Tab 3 - Buscar modelos -->
        <ion-tab-button tab="Models" href="/tabs/Models">
          <img src="https://img.icons8.com/?size=100&id=rI78xQuKfO22&format=png&color=000000" alt="Buscar Modelos" style="width: 24px; height: 24px;" />
          <ion-label>Modelos</ion-label>
        </ion-tab-button>

        <!-- Tab 4 - Notificaciones -->
        <ion-tab-button tab="Notifications" href="/tabs/Notifications">
          <img src="https://img.icons8.com/?size=100&id=HtWSip7clvaz&format=png&color=000000" alt="Notificaciones" style="width: 24px; height: 24px;" />
          <ion-label>Notificaciones</ion-label>
        </ion-tab-button>

        <!-- Tab 5 - Perfil -->
        <ion-tab-button tab="Profile" href="/tabs/Profile">
          <img src="https://img.icons8.com/?size=100&id=O9K5DaypaVKw&format=png&color=000000" alt="Perfil" style="width: 24px; height: 24px;" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
</script>
