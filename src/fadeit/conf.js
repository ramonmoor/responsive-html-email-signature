/*
 * NB: for images, if you pass in a relative path ('assets/logo.png'), they will be automatically embedded (base64). If you pass in a URL, it will stay as it is.
 */

module.exports = [
  {
    id: 'vtg', // Will be appended to the built templates.
    signature: 'Met vriendelijke groet,',
    name: 'Arjan de Waard',
    welcome: 'Geachte heer/ mevrouw,',
    introParagraph: '<br>',
    contactMain: 'U kunt ons bereiken op telefoonnummer <a href="tel:0031251744027"><span>+31 (0) 251 - 744 027</span></a> of stuur een email naar ', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'info@vtgboren-zagen.nl',
    contactSecondary: '<strong>VTG Boren &amp; Zagen B.V.</strong><br><br>Rooswijkweg 216<br>1951 MD  Velsen-Noord<br>Nederland',
    logoUrl: 'assets/vtg-logo.png',
    logoAlt: 'VTG Boren & Zagen B.V.',
    website: 'http://www.vtgboren-zagen.nl'
  }
]