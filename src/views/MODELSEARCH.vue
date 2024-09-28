<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Modelos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Modelos</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- ESTE ES EL FILTRO -->
      <div class="chip-container">
        <ion-chip @click="filterCategory('Editorial')">
          <ion-label>Editorial</ion-label>
        </ion-chip>
        <ion-chip @click="filterCategory('Pasarela')">
          <ion-label>Pasarela</ion-label>
        </ion-chip>
        <ion-chip @click="filterCategory('Publicidad')">
          <ion-label>Publicidad</ion-label>
        </ion-chip>
        <ion-chip @click="clearFilter">
          <ion-label>Todos</ion-label>
        </ion-chip>
      </div>

      <!-- MODELOS SE SUPONE QUE ESTO ES UN COMPONENTE PERO POR MIENTRAS PARA TESTEAR -->
      <div class="model-grid">
        <ion-card class="custom-card" v-for="model in filteredModels" :key="model.name">
          <img class="card-image" :alt="model.name" :src="model.img" />
          <ion-card-header>
            <ion-card-title>{{ model.name }}</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>{{ model.age }} años / {{ model.city }}</p>
            <p>Contextura: {{ model.height }}m, cabello {{ model.hair }}, ojos {{ model.eyes }}</p>
            <p>Especialidad: {{ model.specialty }}</p>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>
<!-- MODELOS SE SUPONE QUE ESTO ES UN COMPONENTE PERO POR MIENTRAS PARA TESTEAR -->
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonChip } from '@ionic/vue';
import { ref } from 'vue';

const models = ref([
  { name: 'Patricia Buenardopolis', age: 60, city: 'Santiago', height: 1.65, hair: 'morado', eyes: 'cafe', specialty: 'Editorial', img: 'https://static.theclinic.cl/media/2016/12/Paty-Maldonado-sin-ningu%E2%95%A0%C3%BCn-filtro-foto1-alejandro-olivares.jpg' },
  { name: 'Miguel Echevarria', age: 80, city: 'Bajos de Mena', height: 2.00, hair: 'negro', eyes: 'marrones', specialty: 'Pasarela', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-CJwP2wByxDPw1k3t0GSzN6YYA4CTf3h3seHmYk0lf8UQR1q9YCIANzR5MXdP_WOR5s&usqp=CAU' },
  { name: 'Nayadeth Easy', age: 25, city: 'Maipu', height: 1.70, hair: 'rubio', eyes: 'azules', specialty: 'Editorial', img: 'https://cloudfront-us-east-1.images.arcpublishing.com/prisachile/RT3KWN3WZVCTFCXXCNWGYS6OAI.jpg' },
  { name: 'Rene Bridge', age: 30, city: 'Colina', height: 1.85, hair: 'negro', eyes: 'verdes', specialty: 'Publicidad', img: 'https://diarioeldia-s3.cdn.net.ar/s3i233/2024/03/diarioeldia/images/60/54/605402_960e3df3ab35e213096d322124b8b3c4f33d24234403ab352c4fcaaa86d9aedf/md.webp' },
  { name: 'Akriila', age: 20, city: 'Santiago', height: 1.60, hair: 'rojo', eyes: 'marrones', specialty: 'Pasarela', img: 'https://i0.wp.com/expectador.cl/wp-content/uploads/2024/08/image1.jpg?resize=1020%2C600&ssl=1' },
  { name: 'Hardcorito', age: 26, city: 'Lima', height: 1.78, hair: 'castaño claro', eyes: 'azules', specialty: 'Editorial', img: 'https://img.soy-chile.cl/Fotos/2018/07/26/file_20180726130634.jpg' }
]);

const filteredModels = ref(models.value);

// Función para filtrar los modelos por categoría
const filterCategory = (category: string) => {
  filteredModels.value = models.value.filter(model => model.specialty === category);
};

// Función para limpiar el filtro
const clearFilter = () => {
  filteredModels.value = models.value;
};
</script>
