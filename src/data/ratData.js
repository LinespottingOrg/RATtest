const ratData = {
  1: {
    statement: 'Jag mår bäst när jag...',
    options: {
      helper: {
        text: 'hjälper andra att göra vad de vill göra',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'får andra att göra det jag vill göra',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'gör vad jag vill göra utan att behöva tänka på andra',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  2: {
    statement: 'Mestadels är jag benägen att vara...',
    options: {
      helper: {
        text: 'en känslig person som är snar att bemöta andra människors önskemål',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'en energisk person som är snar att ta tillvara möjligheter',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'en praktisk person som är noga med att inte rusa iväg innan jag är färdig med det jag håller på med',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  3: {
    statement:
      'När jag för första gången möter andra människor är jag mestadels benägen att vara...',
    options: {
      helper: {
        text: 'angelägen att få reda på om dom tycker om mig',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'synnerligen nyfiken att lista ut om det är någonting för mig',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'artigt försiktig tills jag kommit på vad de väntar sig av mig',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  4: {
    statement: 'Mestadels tycker jag själv att jag är...',
    options: {
      helper: {
        text: 'en trevlig person som andra vanligen kan räkna med ger en hjälpande hand',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'en stark person som är ett föredöme för andra',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'en tänkande person som studerar saker och ting noggrant innan jag handlar',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  5: {
    statement: 'Jag känner mig mest nöjd när...',
    options: {
      helper: {
        text: 'större beslut har fattats av andra och hur jag kan bidra är uppenbart',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'andra räknar med att jag fattar större beslut och tala om för dem vad de ska göra',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'jag har haft tid att sätta mig in i ett större beslut och själv bestämt handlingsgången',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  6: {
    statement:
      'Människor som verkligen känner mig ser mig som en person som de kan räkna med',
    options: {
      helper: {
        text: 'att lita på och att jag alltid när lojal mot dem',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'att vara full av ambition och initiativ',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'att vara osviklig i mina övertygelser och principer',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  7: {
    statement: 'Det är mest likt mig att...',
    options: {
      helper: {
        text: 'göra mitt allra bästa och lita på att andra uppskattar min medverkan',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'inte missa att "höras" vid lägliga tillfällen och att påverka beslut',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'att vara lugn, praktisk och säker på vad jag gör',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  8: {
    statement:
      'Jag skulle vilja beskriva mig själv som en person som mestadels är...',
    options: {
      helper: {
        text: 'vänlig, öppen och som ser någonting gott i varje människa',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'energisk, självsäker och som ser tillfällen andra missar',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'försiktig och renhårig och som står för sitt ord',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  9: {
    statement: 'Jag är mest nöjd när jag får vara...',
    options: {
      helper: {
        text: 'ett stöd för en stark ledare som jag har förtroende för',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'den som står för ledarskapet och som andra önskar följa',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'varken en ledare eller en som följer strömmen utan en som går sina egna självständiga vägar',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  10: {
    statement: 'När jag är mitt rätta jag tycker jag bäst om att...',
    options: {
      helper: {
        text: 'se andra dra nytta av det som jag har lyckats lära dem',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'se andra vända sig till mig för att jag skall vägleda och bestämma tonen',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'vara in egen chef och göra saker för mig själv och av mig själv',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  11: {
    statement: 'När jag blir motarbetad är jag mest benägen att...',
    options: {
      helper: {
        text: 'strunta i mina egna intressen och göromål för att vara hjälpsam',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'vara stark och strida för mina egna rättigheter',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'vara dubbelt försiktig och försöka lägga band på mig',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  12: {
    statement:
      'Om jag beslutar att jag vill övervinna någons motstånd försöker jag att...',
    options: {
      helper: {
        text: 'ändra på det jag gör och försdöka att göra det mer lättfattligt för honom',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'finna luckorna i hans bevisföring och trycka på mina starka argument',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'vädja till hans sunda förnuft för logiskt och ärligt spel',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  13: {
    statement:
      'När jag har att göra med besvärliga människor brukar jag för det mesta...',
    options: {
      helper: {
        text: 'tycka det är lättast att hålla med dem för stunden',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'utmana dem för överbevisning',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'respektera deras synpunkter och vänta mig detsamma gentemot mig',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  14: {
    statement:
      'När någon verkligen har någon annan mening mot vad jag har brukar jag...',
    options: {
      helper: {
        text: 'ge upp och göra som han vill om det inte är någonting mycket angeläget för mig',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'utmana honom omedelbart och anföra så starka skäl som möjligt',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'stå avvaktande tills dess jag är säker på min sak',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  15: {
    statement: 'När någon öppet sätter sig emot mig brukar jag vanligtvis...',
    options: {
      helper: {
        text: 'ge upp för husfridens skull och lita på att han är renhårig',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'inse faktum att det är en strid och ge mig katten på att vinna',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'försöka dra mig undan kompanjonskapet och återgå till mina egna intressen',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  16: {
    statement:
      'Om jag inte får ut det jag väntar mig av ett kamratskap är jag mest benägen att...',
    options: {
      helper: {
        text: 'saker och ting ordnar upp sig inom rimlig tid',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'driva på mera övertygande för att få som jag vill',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'avstå från kamratskap och leta någon annanstans efter det som jag är ute efter',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  17: {
    statement:
      'När jag känner att andra försöker utnyttja min välvilja brukar jag...',
    options: {
      helper: {
        text: 'vända mig till människor med mera erfarenhet och fråga dem om råd',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'vidhålla mina idéer och strida för det jag anser jag är berättigad till',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'hålla strikt på mina rättigheter och stå fast vid att de ska respekteras i allt vårt samarbete',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  18: {
    statement: 'När någon insisterar på att få sin vilja igenom brukar jag...',
    options: {
      helper: {
        text: 'sätta mina egna önskemål åt sidan för ögonblicket och tillmötesgå honom',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'ta upp argument i motsatt riktning och försöka få honom att ändra sig',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'respektera hans rätt att få igenom sina intressen så länge inte mitt verksamhetsområde blir lidande',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  19: {
    statement: 'När någon öppet kritiserar mig är jag mest benägen att...',
    options: {
      helper: {
        text: 'försöka lugna honom och dämpa hans ilska mot mig',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'bli förnärmad och starkt ifrågasätta hans rätt att kritisera mig',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'bli dubbelt så försiktig och omsorgsfullt bena upp varje beskyllning',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
  20: {
    statement:
      'Om någon tydligt missbrukat mitt förtroende brukar jag visa att jag...',
    options: {
      helper: {
        text: 'tycker att han har gjort mera skada för sig själv än han har gjort mig',
        value: 0,
        inputSet: false,
      },
      influence: {
        text: 'blir arg på honom och försöker sedan lösa problemen',
        value: 0,
        inputSet: false,
      },
      autonomy: {
        text: 'försöker komma underfund med vad det var som gick snett och försöker undvika att det upprepas i framtiden',
        value: 0,
        inputSet: false,
      },
    },

    answered: false,
    usedAmount: 0,
  },
}

export default ratData
