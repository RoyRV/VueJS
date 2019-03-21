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
          <h3>Clientes</h3>
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
              <vs-tab vs-label="SECTOR EDUCATIVO">
                <div class="con-tab-ejemplo">
                  SECTOR EDUCATIVO desc
                </div>
              </vs-tab>
              <vs-tab vs-label="BROADCASTING">
                <div class="con-tab-ejemplo">
                  BROADCASTING desc
                </div>
              </vs-tab>
              <vs-tab vs-label="TELCOS">
                <div class="con-tab-ejemplo">
                  TELCOS desc
                </div>
              </vs-tab>
              <vs-tab vs-label="SECTOR SALUD">
                <div class="con-tab-ejemplo">
                  SECTOR SALUD desc
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
  name: "Clientes"
};
</script>

<style>
</style>
