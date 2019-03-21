<template>
  <vs-row>
    <vs-col
      vs-justify="center"
      vs-align="center"
      vs-w="12"
    >
      <vs-row vs-w="12">
        <vs-col
          vs-justify="center"
          vs-align="center"
          vs-w="12"
        >
          <h3>Servicios</h3>
        </vs-col>
      </vs-row>
      <vs-row vs-w="12">
        <vs-col
          vs-justify="center"
          vs-align="center"
          vs-w="12"
        >
          <div class="">
            <vs-tabs>
              <vs-tab vs-label="MANTENIMIENTO PREVENTIVO">
                <div class="con-tab-ejemplo">
                  PREVENTIVO : SOLICITA COTIZACION
                </div>
              </vs-tab>
              <vs-tab vs-label="MANTENIMIENTO CORRECTIVO">
                <div class="con-tab-ejemplo">
                  CORRECTIVO : SOLICITA COTIZACION
                </div>
              </vs-tab>
              <vs-tab vs-label="INSTALACION Y CONFIGURACION">
                <div class="con-tab-ejemplo">
                  SERVIDORES , STORAGE , NETWORKING
                </div>
              </vs-tab>
              <vs-tab vs-label="VISITA TECNICA">
                <div class="con-tab-ejemplo">
                  FORMULARIO PARA VISITA
                </div>
              </vs-tab>
            </vs-tabs>
          </div>
        </vs-col>
      </vs-row>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  name: "Servicios"
};
</script>

<style>
</style>
