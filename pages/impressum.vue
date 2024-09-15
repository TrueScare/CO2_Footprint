<template>
  <section id="impressum" aria-labelledby="impressum_headline" class="container">
    <h1 id="impressum_headline">Impressum</h1>
    <p>
      Im Impressum müssen alle Informationen zum Hauptverantworlichen der Website der Öffentlichkeit bereit gestellt
      werden.
    </p>
    <p>Das könnte z.B. so Aussehen:</p>

    <table>
      <tr>
        <td>Seiteninhaber</td>
        <td>MaxMusetermann</td>
      </tr>
      <tr>
        <td>Adresse</td>
        <td>Musterstraße 53</td>
      </tr>
      <tr>
        <td>Stadt</td>
        <td>Musterstadt</td>
      </tr>
      <tr>
        <td>Postleitzahl</td>
        <td>123456</td>
      </tr>
      <tr>
        <td>Land</td>
        <td>Deutschland</td>
      </tr>
      <tr>
        <td>E-Mail</td>
        <td><a href="mailto:mustermail@musterdomain.de">mustermail@musterdomain.de</a></td>
      </tr>
      <tr>
        <td>Telefon</td>
        <td><a href="tel:+4901234555555555">+4901234555555555</a></td>
      </tr>
    </table>
  </section>
</template>

<script setup lang="js">
useHead({
  title: 'Impressum',
});
</script>