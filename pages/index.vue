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

  <FillsImageFiller src="/img/wildflowers.jpg" alt="Wiese"/>

  <FillsSmartSection
      id="co2_tabelle"
  >
    <template v-slot:title>CO₂ Fußabdruck</template>
    <template v-slot:default>
      <p>Und so geht's:</p>
      <p>Wähle mit "Datenset" die Daten aus, die du dir angucken möchtest. Dort kannst du die Daten filtern, sortieren und selber darin suchen.</p>
      <CO2Table data-url="countries"/>
    </template>
  </FillsSmartSection>
  <div class="bg-primary-subtle p-3">
    <FillsSmartSection
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
  </div>
</template>
<script setup lang="ts">
</script>