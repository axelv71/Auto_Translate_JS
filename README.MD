# Auto Translate Javascript | Version 0.5.1

> ## How it works ?

To start, download and insert the _"auto_translate.js"_ file at the bottom of your HTML page 

```
<script src="./auto_translate.js"></script>
```

Then, on a _"div"_ or the _"body"_ at the top of the page, add the id _"trlInit"_ and _data-trlfrom = ""_ and _data-trlto = ""_.

```
<div id="trlInit" data-trlfrom="" data-trlto=""></div>
```

In _"data-trlfrom"_ enter the language of your page and in _"data-trlto"_ enter in which language you want to translate it.

The list of languages is :

* English  = 'eng'
* French = 'fra'
* Arabic = 'ara'
* Chinese = 'chi'
* Dutch = 'dut'
* German = 'ger'
* Hebrew = 'heb'
* Italian = 'ita'
* Japanese = 'jpn'
* Polish = 'pol'
* Portuguese = 'por'
* Romanian = 'rum'
* Russian = 'rus'
* Spanish = 'spa'
* Turkish = 'tur'


```
<div id="trlInit" data-trlfrom="eng" data-trlto="fra"></div>
```

Finally add the class _"trlText_" on all the tags containing text

```
<p class="trlText">Hello<p>
<p class="trlText">I love cat<p>
<p class="trlText">I am tired<p>
```

The plugin works the same way with the _input_ _placeholders_

```
<input class="trlText" type="text" placeholder="Hello" >
```

## Enjoy !


***
***
This plugin use [Reverso](https://www.reverso.net/text_translation.aspx?lang=EN) API


