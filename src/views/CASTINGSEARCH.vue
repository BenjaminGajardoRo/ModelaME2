<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Castings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Castings</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div class="casting-grid">
        <ion-card class="custom-card">
          <ion-card-header>
            <ion-card-title>Publicidad para COCA-COLA</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p><strong>Fecha:</strong> 15 Octubre 2024 / Santiago</p>
            <p><strong>Requisitos:</strong> Modelos de 18-30 años, cualquier género</p>
            <p><strong>Descripción:</strong> Casting para campaña publicitaria de Bebida nueva</p>
          </ion-card-content>
        </ion-card>

        <ion-card class="custom-card">
          <ion-card-header>
            <ion-card-title>Comercial para DUOC UC</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p><strong>Fecha:</strong> 10 Noviembre 2024 / Santiago</p>
            <p><strong>Requisitos:</strong> Actores y modelos de 25-40 años, experiencia en comerciales</p>
            <p><strong>Descripción:</strong> Casting para un comercial de Duoc UC</p>
          </ion-card-content>
        </ion-card>

        <ion-card class="custom-card">
          <ion-card-header>
            <ion-card-title>Shooting para VOUGE</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p><strong>Fecha:</strong> 22 Octubre 2024 / Ciudad de México</p>
            <p><strong>Requisitos:</strong> Modelos femeninas, 20-35 años, cualquier estilo</p>
            <p><strong>Descripción:</strong> Shooting para portada de revista de moda</p>
          </ion-card-content>
        </ion-card>

        <ion-card class="custom-card">
          <ion-card-header>
            <ion-card-title>Fotografía para PLAYBOY</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p><strong>Fecha:</strong> 30 Noviembre 2024 / Madrid</p>
            <p><strong>Requisitos:</strong> Modelos masculinos, 18-35 años, físicos atléticos</p>
            <p><strong>Descripción:</strong> Fotografía para una campaña de lencería</p>
          </ion-card-content>
        </ion-card>

        <ion-card class="custom-card">
          <ion-card-header>
            <ion-card-title>Evento para EXPO-OTAKU</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p><strong>Fecha:</strong> 5 Diciembre 2024 / Bogotá</p>
            <p><strong>Requisitos:</strong> Promotores de 20-35 años, carismáticos</p>
            <p><strong>Descripción:</strong> Casting para ser promotores de una marca de cómics</p>
          </ion-card-content>
        </ion-card>

        <ion-card class="custom-card">
          <ion-card-header>
            <ion-card-title>Fotografía Editorial MARGOT</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p><strong>Fecha:</strong> 12 Diciembre 2024 / Lima</p>
            <p><strong>Requisitos:</strong> Modelos femeninas de 18-28 años, aspecto único</p>
            <p><strong>Descripción:</strong> Fotografía editorial para colección de invierno</p>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>