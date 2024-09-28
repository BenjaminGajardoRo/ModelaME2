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

      <!-- FILTRO -->
      <div class="chip-container">
        <ion-chip @click="filterCategory('Publicidad')">
          <ion-label>Publicidad</ion-label>
        </ion-chip>
        <ion-chip @click="filterCategory('Comercial')">
          <ion-label>Comercial</ion-label>
        </ion-chip>
        <ion-chip @click="filterCategory('Shooting')">
          <ion-label>Shooting</ion-label>
        </ion-chip>
        <ion-chip @click="filterCategory('Fotografía')">
          <ion-label>Fotografía</ion-label>
        </ion-chip>
        <ion-chip @click="clearFilter">
          <ion-label>Todos</ion-label>
        </ion-chip>
      </div>

      <!-- CASTING, LO MISMO QUE MODELO PERO AQUI -->
      <div class="casting-grid">
        <ion-card class="custom-card" v-for="casting in filteredCastings" :key="casting.title">
          <ion-card-header>
            <ion-card-title>{{ casting.title }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p><strong>Fecha:</strong> {{ casting.date }} / {{ casting.location }}</p>
            <p><strong>Requisitos:</strong> {{ casting.requirements }}</p>
            <p><strong>Descripción:</strong> {{ casting.description }}</p>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>
<!-- CASTING, LO MISMO QUE MODELO PERO AQUI -->
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonChip } from '@ionic/vue';
import { ref } from 'vue';
const castings = ref([
  { title: 'Publicidad para COCA-COLA', date: '15 Octubre 2024', location: 'Santiago', requirements: 'Modelos de 18-30 años, cualquier género', description: 'Casting para campaña publicitaria de Bebida nueva', category: 'Publicidad' },
  { title: 'Comercial para DUOC UC', date: '10 Noviembre 2024', location: 'Santiago', requirements: 'Actores y modelos de 25-40 años, experiencia en comerciales', description: 'Casting para un comercial de Duoc UC', category: 'Comercial' },
  { title: 'Shooting para VOUGE', date: '22 Octubre 2024', location: 'Ciudad de México', requirements: 'Modelos femeninas, 20-35 años, cualquier estilo', description: 'Shooting para portada de revista de moda', category: 'Shooting' },
  { title: 'Fotografía para PLAYBOY', date: '30 Noviembre 2024', location: 'Madrid', requirements: 'Modelos masculinos, 18-35 años, físicos atléticos', description: 'Fotografía para una campaña de lencería', category: 'Fotografía' },
  { title: 'Evento para EXPO-OTAKU', date: '5 Diciembre 2024', location: 'Bogotá', requirements: 'Promotores de 20-35 años, carismáticos', description: 'Casting para ser promotores de una marca de cómics', category: 'Publicidad' },
  { title: 'Fotografía Editorial MARGOT', date: '12 Diciembre 2024', location: 'Lima', requirements: 'Modelos femeninas de 18-28 años, aspecto único', description: 'Fotografía editorial para colección de invierno', category: 'Fotografía' }
]);

const filteredCastings = ref(castings.value);

// Función para filtrar los castings por categoría
const filterCategory = (category: string) => {
  filteredCastings.value = castings.value.filter(casting => casting.category === category);
};

// Función para limpiar el filtro
const clearFilter = () => {
  filteredCastings.value = castings.value;
};
</script>
