<template>
  <FillsSmartSection
      id="mission"
      fullwidth
      class="bg-primary-subtle p-5 m-0"
  >
    <template v-slot:title>Unsere Mission</template>
    <template v-slot:default>
      <FillsCardImageText
          title="Aufklären!"
          alt="Fabrik"
          src="/img/fabrik_emissionen.jpg"
          image-right
      >
        <p>
          Oft hört man in den Medien: "Die Privatpersonen müssen auf ihren Konsum achten." oder "Die Haushalte müssen
          weniger CO2 verbrauchen um den Klimawandel zu stoppen." Wir wollen euch Zeigen, dass die Haushalte gar nicht
          der Hauptträger für die Emissionen sind und wer tatsächlich verantwortlich gemacht werden muss.
        </p>
      </FillsCardImageText>
    </template>
  </FillsSmartSection>

  <FillsImageFiller src="/img/wildflowers.jpg"
                    aria-label="Füll Element mit Slogan"
  >
    <h2 class="bg-primary rounded p-3 px-5 text-white">Schritt für Schritt ins Grüne</h2>
  </FillsImageFiller>

  <FillsSmartSection
      id="co2_tabelle"
  >
    <template v-slot:title>CO₂ Fußabdruck</template>
    <template v-slot:default>
      <p>Und so geht's:</p>
      <p>Wähle mit "Datenset" die Daten aus, die du dir angucken möchtest. Dort kannst du die Daten filtern, sortieren
        und selber darin suchen.</p>
      <DecorationsSteps
          left
          bottom
          green
      />
      <CO2Table data-url="countries"/>
      <DecorationsSteps
          right
          green
      />
    </template>
  </FillsSmartSection>
  <FillsSmartSection
      id="mach-mit"
      class="bg-primary-subtle p-5"
      fullwidth
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
          Alle Mitglieder arbeiten Ehrenamtlich und mit vollem Elan bei der Sache. Wir können dich zwar nicht monetär
          für deine Aufwände entschädigen, dafür aber mit einem guten Gefühl anderen zu helfen. Davon mal abgesehen
          halten wir regelmäßig Treffen ab, bei denen selbstverständlich alle versorgt werden.
        </p>
      </FillsCardImageText>
      <FillsCardImageText
          title="Jedes bisschen zählt"
          src="/img/support.jpg"
          alt="Unterstützung"
          image-right
      >
        <p>
          Du findest unsere Sache gut, hast aber keine Zeit dich einzusetzten? Gaaar kein Problem. Wir finanzieren uns
          durch Spenden und freuen uns über jedes bisschen Unterstützung.
        </p>
        <p>
          Du kannst uns einfach Geld überweisen. Stelle dabei nur Sicher, dass du im <strong>Verwendungszweck "Spende"</strong> mit
          angibst. Wenn du eine Spendenquittung benötigst kannst du uns gerne Kontaktieren.
        </p>

        <table class="bank-info">
          <tr>
            <td>Kontoinhaber:</td>
            <td>Steps to Green EV</td>
          </tr>
          <tr>
            <td>IBAN:</td>
            <td>DE12 1234 5678 0112 2233 45</td>
          </tr>
          <tr>
            <td>BIC:</td>
            <td>TESTEND1WAF</td>
          </tr>
        </table>
      </FillsCardImageText>
    </template>
  </FillsSmartSection>
</template>
<style lang="scss">
.bank-info td {
  padding: 5px 10px 0 0;
}
</style>