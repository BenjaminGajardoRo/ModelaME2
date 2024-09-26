<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil del Modelo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="profile-container">
        <!-- Imagen circular del modelo -->
        <div class="profile-image-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Lana_Rhoades_cropped.jpg/330px-Lana_Rhoades_cropped.jpg" alt="Foto del Modelo" class="profile-image" />
        </div>

        <!-- Nombre del modelo -->
        <ion-label class="profile-name">Amara Gonzales</ion-label>

        <!-- Características del modelo -->
        <ion-list>
          <!-- Edad -->
          <ion-item>
            <ion-input
              label="Edad"
              label-placement="stacked"
              :clear-input="true"
              placeholder="Ingresa la edad"
              value="28"
            >
            </ion-input>
          </ion-item>

          <!-- Altura -->
          <ion-item>
            <ion-input
              label="Altura"
              label-placement="stacked"
              :clear-input="true"
              placeholder="Ingresa la altura"
              value="1.60m"
            >
            </ion-input>
          </ion-item>

          <!-- Locación -->
          <ion-item>
            <ion-input
              label="Locación"
              label-placement="stacked"
              :clear-input="true"
              placeholder="Ingresa la locación"
              value="Estados Unidos"
            >
            </ion-input>
          </ion-item>

          <!-- Tipo de Cuerpo -->
          <ion-item>
            <ion-input
              label="Tipo de Cuerpo"
              label-placement="stacked"
              :clear-input="true"
              placeholder="Ingresa el tipo de cuerpo"
              value="Delgada"
            >
            </ion-input>
          </ion-item>

          <!-- Cualidades adicionales -->
          <ion-item>
            <ion-input
              label="Cualidades Adicionales"
              label-placement="stacked"
              :clear-input="true"
              placeholder="Ingresa otras cualidades"
              value="Cabello castaño, ojos verdes"
            >
            </ion-input>
          </ion-item>
        </ion-list>

        <ion-button expand="block" class="semi-transparent-btn">Guardar Cambios</ion-button>
      </div>

      <!-- Sección de reseñas -->
      <div class="review-section">
        <ion-label class="review-title">Reseñas</ion-label>

        <ion-list>
          <ion-card class="review-card">
            <ion-card-header>
              <div class="review-header">
                <ion-card-title>Juan Pérez</ion-card-title>
                
                <div class="review-stars">
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                </div>
              </div>
              <ion-card-subtitle>Gran trabajo en la última sesión</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              Camila fue muy profesional y cumplió con todas las expectativas del proyecto.
            </ion-card-content>
          </ion-card>

          <ion-card class="review-card">
            <ion-card-header>
              <div class="review-header">
                <ion-card-title>María López</ion-card-title>
                
                <div class="review-stars">
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                </div>
              </div>
              <ion-card-subtitle>Fotografía publicitaria</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              Excelente modelo, tiene una gran capacidad para adaptarse a diferentes estilos.
            </ion-card-content>
          </ion-card>

          <ion-card class="review-card">
            <ion-card-header>
              <div class="review-header">
                <ion-card-title>Carlos García</ion-card-title>
                
                <div class="review-stars">
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                  <img class="star-icon" src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="Star" />
                </div>
              </div>
              <ion-card-subtitle>Recomendación</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              La recomendaría sin duda, tiene una energía positiva y se involucra en cada proyecto.
            </ion-card-content>
          </ion-card>
        </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonLabel, IonItem, IonList, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/vue';
</script>
