<template>
  <FillsSection
      title="Unsere Mission"
      id="mission"
  >
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
  </FillsSection>

  <FillsSection
      title="CO₂ Fußabdruck"
      id="co2_tabelle"
  >
    <CO2Table data-url="countries"/>
  </FillsSection>

  <FillsSection
      title="Deine Hilfe Ist gefragt!"
      id="mach-mit"
  >
    <FillsCardImageText
        title="Du willst mitmachen?"
        src="/img/liam.jpg"
        alt="Liam, ziemlich happy!"
    >
      <p>Super dann komm doch in unser Team. Die Kontaktdaten findest du im
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
  </FillsSection>
</template>
<script setup lang="ts">
</script>