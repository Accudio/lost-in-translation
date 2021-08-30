import translate from 'translate'

(async function(){

  // config
  const inputText = "Your text here"
  const numLanguages = 8
  translate.engine = 'google'
  translate.key = 'YOUR_API_KEY_HERE'

  // list of all languages available on Google Translate API
  const allLanguages = ["af","sq","am","ar","hy","az","eu","be","bn","bs","bg","ca","zh","co","hr","cs","da","nl","eo","et","fi","fr","fy","gl","ka","de","el","gu","ht","ha","he","hi","hu","is","ig","id","ga","it","ja","jv","kn","kk","km","rw","ko","ku","ky","lo","lv","lt","lb","mk","mg","ms","ml","mt","mi","mr","mn","my","ne","no","ny","or","ps","fa","pl","pt","pa","ro","ru","sm","gd","sr","st","sn","sd","si","sk","sl","so","es","su","sw","sv","tl","tg","ta","tt","te","th","tr","tk","uk","ur","ug","uz","vi","cy","xh","yi","yo","zu"]

  // get random n languages and run input text through them all
  const langs = ['en', ...getRandom(allLanguages, numLanguages), 'en']
  let results = [{ lang: 'en', text: inputText }]
  for (let i = 0; i < langs.length - 1; i++) {
    results[i + 1] = {
      lang: langs[i + 1],
      text: await translate(results[i].text, { from: langs[i], to: langs[i + 1] })
    }
  }

  // output to console
  console.log(results)

})()

// get a random n number of items from the input array
function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}
