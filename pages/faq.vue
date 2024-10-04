<script setup>
useHead({
  title: "FAQ"
});
</script>

<template>
  <div class="bg-primary-subtle p-3">
    <FillsSmartSection
        id="daten"
    >
      <template v-slot:title>Woher kommen unsere Daten?</template>
      <p>
        Wir beziehen unsere Daten von der offilziellen Stelle der EU, welche sich mit der Erfassung von Emissionsdaten
        beschäftigt. EDGAR - Emissions Database for Global Atmospheric Research
      </p>
      <p>
        Die Daten, welche hier ausgewertet werden können stammen aus dem Report von 2023. Zum nachlesen klicke <a
          href="https://edgar.jrc.ec.europa.eu/report_2023">hier</a>.
      </p>
    </FillsSmartSection>
  </div>
</template>