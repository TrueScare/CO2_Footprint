<template>
  <ContentSection title="Unsere Mission" id="mission">
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
    consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
    diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
    takimata sanctus est Lorem ipsum dolor sit amet.
  </ContentSection>

  <ContentSection title="CO₂ Fußabdruck" id="co2_tabelle">
    <CO2Table data-url="countries"/>
  </ContentSection>

  <ContentSection title="Sonstiges" id="sonstiges">
    <ContentCardImageText title="Du willst mitmachen?" src="/img/liam.jpg" alt="Liam, ziemlich happy!">
      Super dann komm doch in unser Team. Die Kontaktdaten findest du im
      <NuxtLink to="/impressum">Impressum</NuxtLink>.
    </ContentCardImageText>
  </ContentSection>
</template>
<script setup lang="js">
</script>