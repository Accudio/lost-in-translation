# Lost In Translation

Uses the Google Translate API to take input text, translate through a configured number of random languages and then back to English again. Probably quite garbled and hopefully funny.

I wrote a [blog post inspired by this code that is a small rambling nostalgia trip](https://alistairshepherd.uk/writing/lost-in-translation-and-nostalgia/). Check it out I guess.

## Examples

```
Start: The quick brown fox jumped over the lazy dog.
Languages: Lao, Scots Gaelic, Welsh, Japanese, Kurdish, Yoruba, Portugese, Finnish
End: The speed of the coffee cup is wasted.
```

```
Start: Look you stupid bastard, you've got no arms left
Languages: Dutch, Romanian, Uzbek, Zulu, Chinese (Simplified), Esperanto, Tajik, Finnish
End: New prostate cells
```

## Install

```sh
npm install
```

## Use

Add your Google Cloud API Key, text to translate, and number of languages within `translate.js`. Run with `npm start`.

## Copyright / License

MIT, do what you want
