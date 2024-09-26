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

      <div class="model-grid">
        <ion-card>
          <img class="card-image" alt="Modelo 1" src="https://static.theclinic.cl/media/2016/12/Paty-Maldonado-sin-ningu%E2%95%A0%C3%BCn-filtro-foto1-alejandro-olivares.jpg" />
          <ion-card-header>
            <ion-card-title>Patricia Buenardopolis</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>60 años / Santiago</p>
            <p>Contextura: 1.65m, cabello morado, ojos cafe</p>
            <p>Especialidad: Pegarle al Karol</p>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <img class="card-image" alt="Modelo 2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc-CJwP2wByxDPw1k3t0GSzN6YYA4CTf3h3seHmYk0lf8UQR1q9YCIANzR5MXdP_WOR5s&usqp=CAU" />
          <ion-card-header>
            <ion-card-title>Miguel Echevarria</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>80 años / Bajos de Mena</p>
            <p>Contextura: 2.00m, cabello negro, ojos marrones</p>
            <p>Especialidad: Stand Up</p>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <img class="card-image" alt="Modelo 3" src="https://cloudfront-us-east-1.images.arcpublishing.com/prisachile/RT3KWN3WZVCTFCXXCNWGYS6OAI.jpg" />
          <ion-card-header>
            <ion-card-title>Nayadeth Easy</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>25 años / Maipu</p>
            <p>Contextura: 1.70m, cabello rubio, ojos azules</p>
            <p>Especialidad: Editoriales de moda</p>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <img class="card-image" alt="Modelo 4" src="https://diarioeldia-s3.cdn.net.ar/s3i233/2024/03/diarioeldia/images/60/54/605402_960e3df3ab35e213096d322124b8b3c4f33d24234403ab352c4fcaaa86d9aedf/md.webp" />
          <ion-card-header>
            <ion-card-title>Rene Bridge</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>30 años / Colina</p>
            <p>Contextura: 1.85m, cabello negro, ojos verdes</p>
            <p>Especialidad: Campañas publicitarias</p>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <img class="card-image" alt="Modelo 5" src="https://i0.wp.com/expectador.cl/wp-content/uploads/2024/08/image1.jpg?resize=1020%2C600&ssl=1" />
          <ion-card-header>
            <ion-card-title>Akriila</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>20 años / Santiago</p>
            <p>Contextura: 1.60m, cabello rojo, ojos marrones</p>
            <p>Especialidad: Cantante</p>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <img class="card-image" alt="Modelo 4" src="https://img.soy-chile.cl/Fotos/2018/07/26/file_20180726130634.jpg" />
          <ion-card-header>
            <ion-card-title>Hardcorito</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <p>26 años / Lima</p>
            <p>Contextura: 1.78m, cabello castaño claro, ojos azules</p>
            <p>Especialidad: Fotografía editorial</p>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>
