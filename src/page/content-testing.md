---
layout: layouts/page.njk
title: Content Testing
hero:
  header: A whole lot of content
  hero:
    alt: ''
    base: 'https://res.cloudinary.com/coolguy/image/upload/'
    dominant:
      - 216
      - 209
      - 207
    filename: stock%20images/erol-ahmed-q9Vt4pVnGzc-unsplash_fijcx7.jpg
    height: 2000
    src: >-
      https://res.cloudinary.com/coolguy/image/upload/v1577885105/stock%20images/erol-ahmed-q9Vt4pVnGzc-unsplash_fijcx7.jpg
    version: v1577885105
    width: 3000
  preHeader: We got content
genericContentBlocks:
  - backgroundColour: false
    content:
      - header: Test Single Header
        preHeader: Header One Column
        textAlign: center
        type: header
      - text: >-
          Rich text with markdown features...


          Here's a new paragraph


          And some **bold and** also some *italic* text.


          [This is a link](https://sleeping.kiwi)


          And finally an image:


          ![](https://res.cloudinary.com/coolguy/image/upload/v1577102523/example%20images/300by300-b_p4rcuc.png)


          Leaving things on an image triggers saving errors...
        textAlign: center
        type: text
    type: oneColumn
  - backgroundColour: true
    content:
      - quoteAttribution: Joe Baggaley - Dorchester
        quoteText: Here it is the fantastic quote you want to hear
        textAlign: center
        type: quote
    type: oneColumn
  - backgroundColour: false
    content:
      - header: To test images and CTA
        preHeader: Another single column
        textAlign: left
        type: header
      - image:
          alt: ''
          base: 'https://res.cloudinary.com/coolguy/image/upload/'
          dominant:
            - 44
            - 44
            - 44
          filename: example%20images/download_sfq8ot.png
          height: 1080
          src: >-
            https://res.cloudinary.com/coolguy/image/upload/v1577102523/example%20images/download_sfq8ot.png
          version: v1577102523
          width: 1920
        type: image
      - cta: One external link
        ctaURL: 'https://sleeping.kiwi'
        textAlign: center
        type: cta
      - cta: And one popup launcher
        textAlign: center
        type: cta
    type: oneColumn
transparentHeader: true
footerPartners: true
footerCTA: true
---

