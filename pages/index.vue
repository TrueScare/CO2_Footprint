<template>
  <FillsSmartSection
      id="mission"
  >
    <template v-slot:title>Unsere Mission</template>
    <template v-slot:default>
      <FillsCardImageText
          title="Aufklären!"
          alt="Fabrik"
          src="/img/fabrik_emissionen.jpg"
          image-right
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </FillsCardImageText>
    </template>
  </FillsSmartSection>

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

  <FillsSmartSection
      id="co2_tabelle"
  >
    <template v-slot:title>CO₂ Fußabdruck</template>
    <template v-slot:default>
      <CO2Table data-url="countries"/>
    </template>
  </FillsSmartSection>

  <FillsSmartSection
      title=""
      id="mach-mit"
  >
    <template v-slot:title>Deine Hilfe Ist gefragt!</template>
    <template v-slot:default>
      <FillsCardImageText
          title="Du willst mitmachen?"
          src="/img/liam.jpg"
          alt="Liam, ziemlich happy!"
      >
        <p>Super dann komm doch in unser Team. Wir können immer fleißige Hände gebrauchen. Wie und wo du uns erreichen
          kannst findest du in unserem
          <NuxtLink to="/impressum">Impressum</NuxtLink>
          .
        </p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </FillsCardImageText>
    </template>
  </FillsSmartSection>
</template>
<script setup lang="ts">
</script>