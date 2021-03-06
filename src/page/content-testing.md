---
layout: layouts/page.njk
tags: page
title: Content Testing
hero:
  header: A whole lot of content
  hero:
    alt: ""
    base: https://res.cloudinary.com/coolguy/image/upload/
    dominant:
      - 216
      - 209
      - 207
    filename: stock%20images/erol-ahmed-q9Vt4pVnGzc-unsplash_fijcx7.jpg
    height: 2000
    src: https://res.cloudinary.com/coolguy/image/upload/v1577885105/stock%20images/erol-ahmed-q9Vt4pVnGzc-unsplash_fijcx7.jpg
    version: v1577885105
    width: 3000
  preHeader: We got content
genericContentBlocks:
  - type: articleLink
    backgroundColour: false
    collapseTop: false
    flavour: left
    article: An Example Article
  - type: articleLink
    backgroundColour: true
    collapseTop: false
    flavour: right
    article: An Example Article
  - type: articleLink
    backgroundColour: false
    collapseTop: false
    flavour: text
    article: An Example Article
    backgroundImage:
      src: https://res.cloudinary.com/coolguy/image/upload/v1593181985/highlights/_S1A3125_ngqp5x.jpg
      base: https://res.cloudinary.com/coolguy/image/upload/
      version: v1593181985
      filename: highlights/_S1A3125_ngqp5x.jpg
      width: 2500
      height: 1667
      dominant:
        - 208
        - 193
        - 187
      alt: ""
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
        quoteText: Here it is the fantastic quote that we think you would like to hear
        textAlign: center
        type: quote
    type: oneColumn
  - backgroundColour: false
    content:
      - header: To test images and CTA
        preHeader: Images and CTAs should collapse together when they go edge-to-edge...
        textAlign: left
        type: header
      - image:
          alt: ""
          base: https://res.cloudinary.com/coolguy/image/upload/
          dominant:
            - 44
            - 44
            - 44
          filename: example%20images/download_sfq8ot.png
          height: 1080
          src: https://res.cloudinary.com/coolguy/image/upload/v1577102523/example%20images/download_sfq8ot.png
          version: v1577102523
          width: 1920
        type: image
      - cta: One external link
        ctaURL: https://sleeping.kiwi
        textAlign: center
        type: cta
      - cta: And one popup launcher
        textAlign: center
        type: cta
      - image:
          alt: ""
          base: https://res.cloudinary.com/coolguy/image/upload/
          dominant:
            - 44
            - 44
            - 44
          filename: example%20images/download_sfq8ot.png
          height: 1080
          src: https://res.cloudinary.com/coolguy/image/upload/v1577102523/example%20images/download_sfq8ot.png
          version: v1577102523
          width: 1920
        type: image
    type: oneColumn
  - backgroundColour: true
    backgroundImage:
      alt: ""
      base: https://res.cloudinary.com/coolguy/image/upload/
      dominant:
        - 193
        - 195
        - 194
      filename: stock%20images/marcin-galusz-Xq0lte4P7rQ-unsplash_t8z03i.jpg
      height: 2002
      src: https://res.cloudinary.com/coolguy/image/upload/v1577892357/stock%20images/marcin-galusz-Xq0lte4P7rQ-unsplash_t8z03i.jpg
      version: v1577892357
      width: 3000
    columnAlignment: center
    columnWeighting: even
    leftColumnContent:
      - quoteText: A big old quote over here
        textAlign: center
        type: quote
    rightColumnContent:
      - header: Multiple Columns
        preHeader: And a header over here!
        textAlign: center
        type: header
    type: twoColumns
  - backgroundColour: true
    columnAlignment: center
    columnWeighting: right
    leftColumnContent:
      - text: A few words and CTA buttons on the left. CTA buttons and images need to
          collapse between columns too!
        textAlign: left
        type: text
      - cta: A Button...
        textAlign: left
        type: cta
    rightColumnContent:
      - image:
          alt: ""
          base: https://res.cloudinary.com/coolguy/image/upload/
          dominant:
            - 203
            - 162
            - 143
          filename: stock%20images/toa-heftiba-do6ouuCdsto-unsplash_wop3u2.jpg
          height: 2000
          src: https://res.cloudinary.com/coolguy/image/upload/v1577895800/stock%20images/toa-heftiba-do6ouuCdsto-unsplash_wop3u2.jpg
          version: v1577895800
          width: 3000
        type: image
    type: twoColumns
transparentHeader: true
footerPartners: true
footerCTA: true
---
