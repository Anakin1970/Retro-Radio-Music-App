export const stations = [
  {
    id: "hiphop-classics",
    name: "Hip-Hop Classics",
    frequency: "91.5 FM",
    slogan: "Golden age of hip-hop",
    host: "DJ Backspin",
    showTitle: "The Golden Age Mix",
    city: "Indianapolis, IN",
    tag: "BASS",
    signal: "Strong Signal",
    theme: "hiphop",
    djVoiceSrc: "assets/audio/dj_voices/hip_hop.mp3",
    stationFacts: [
      {
        label: "Radio History",
        text: "In the early 90's Hip-hop radio helped break new records by turning local street culture into a mainstream force.",
      },
      {
        label: "Genre Fact",
        text: "Sampling, DJ scratching, and lyric battles all helped define the sound of classic hip-hop.",
      },
    ],
    tracks: [
      {
        song: "Rock The Bells",
        artist: "LL Cool J",
        duration: "4:02",
        src: "assets/audio/rock_the_bells.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "LL Cool J became one of Def Jam’s earliest breakout stars and helped bring rap to a wider audience.",
          },
          {
            label: "Song Fact",
            text: "Despite the title, there are actually no bells heard in the official album version. 'The Bell-Heavy' version was only released on the original 12-inch vinyl.",
          },
        ],
      },
      {
        song: "Follow The Leader",
        artist: "Eric B & Rakim",
        duration: "5:34",
        src: "assets/audio/follow_the_leader.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Rakim changed rap with a calmer delivery and more complex rhyme patterns than many early MCs used.",
          },
          {
            label: "Genre Fact",
            text: "Eric B & Rakim are often credited with helping move hip-hop lyricism into a more advanced era.",
          },
        ],
      },
      {
        song: "It's Like That",
        artist: "Run-D.M.C.",
        duration: "4:38",
        src: "assets/audio/like_that.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Run-D.M.C. helped make rap look and sound tougher, louder, and more stripped down than earlier styles.",
          },
          {
            label: "Song Fact",
            text: "VH1 ranked it #40 on their '100 Greatest Hip-Hop Songs' list.",
          },
        ],
      },
      {
        song: "Brass Monkey",
        artist: "Beastie Boys",
        duration: "2:37",
        src: "assets/audio/brass_monkey.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "The Beastie Boys helped prove that rap could cross into pop culture while still keeping a rebellious edge.",
          },
          {
            label: "Song Fact",
            text: "A classic hip-hop track by the Beastie Boys, released in 1986 as part of their debut album, Licensed to Ill.",
          },
        ],
      },
      {
        song: "Welcome To The Terrordome",
        artist: "Public Enemy",
        duration: "5:43",
        src: "assets/audio/terrordome.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Public Enemy built a politically charged sound that made hip-hop a platform for bold public commentary.",
          },
          {
            label: "Production Fact",
            text: "The Bomb Squad’s dense production style layered samples in a way that felt urgent and cinematic.",
          },
        ],
      },
      {
        song: "Shadowboxin'",
        artist: "GZA feat. Method Man",
        duration: "4:48",
        src: "assets/audio/shadow.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "GZA was known in 'Wu-Tang Clan' for sharp lyricism and cerebral writing.",
          },
          {
            label: "Album Fact",
            text: "Shadowboxin’ comes from Liquid Swords, a project often praised for its dark atmosphere and precise rhymes.",
          },
        ],
      },
      {
        song: "Around the Way Girl",
        artist: "LL Cool J",
        duration: "4:01",
        src: "assets/audio/around_the_way.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "LL Cool J became one of Def Jam’s earliest breakout stars and helped bring rap to a wider audience.",
          },
          {
            label: "Album Fact",
            text: "Around the Way Girl is a 1990 hip-hop classic, released as a single from LL Cool J's fourth album, Mama Said Knock You Out.",
          },
        ],
      },
    ],
    recentlyPlayed: [
      {
        song: "Planet Rock",
        artist: "Afrika Bambaataa",
        duration: "6:22",
      },
      {
        song: "A Perfect Beat",
        artist: "Afrika Bambaataa",
        duration: "7:02",
      },
    ],
  },

  {
    id: "electro-funk",
    name: "Electro Funk FM",
    frequency: "93.7 FM",
    slogan: "808s, synths, and grooves",
    host: "DJ Voltage",
    showTitle: "Midnight Machine Groove",
    city: "Chicago, IL",
    tag: "Electro",
    signal: "Crystal Clear",
    theme: "electro",
    djVoiceSrc: "assets/audio/dj_voices/funk.mp3",
    stationFacts: [
      {
        label: "Genre Fact",
        text: "Electro-funk blended drum machines, synth lines, and early hip-hop energy into a futuristic sound.",
      },
      {
        label: "Tech Fact",
        text: "The Roland TR-808 drum machine became one of the most iconic sounds in electro and hip-hop.",
      },
    ],
    tracks: [
      {
        song: "Planet Rock",
        artist: "Afrika Bambaataa",
        duration: "6:22",
        src: "assets/audio/planet_rock.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Afrika Bambaataa helped connect DJ culture, hip-hop, and electronic sounds in a groundbreaking way.",
          },
          {
            label: "Song Fact",
            text: "Released in 1982 by Afrika Bambaataa & the Soulsonic Force, this track is a cornerstone of electro-hip-hop.",
          },
        ],
      },
      {
        song: "A Perfect Beat",
        artist: "Afrika Bambaataa",
        duration: "7:02",
        src: "assets/audio/perfect_beat.mp3",
        facts: [
          {
            label: "Song Fact",
            text: "A Perfect Beat pushed the electro sound forward with robotic grooves and club-ready rhythm.",
          },
          {
            label: "Genre Fact",
            text: "Electro records like this influenced breakdancing, DJ sets, and early dance music scenes.",
          },
        ],
      },
      {
        song: "Egypt, Egypt",
        artist: "Egyptian Lover",
        duration: "6:51",
        src: "assets/audio/egypt.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Egyptian Lover became a major West Coast figure in electro, known for club beats and talkbox-flavored style.",
          },
          {
            label: "Song Fact",
            text: "is a landmark electro and hip-hop song released in 1984 by The Egyptian Lover (Greg Broussard).",
          },
        ],
      },
      {
        song: "Whoa",
        artist: "Snoh Aalegra",
        duration: "4:05",
        src: "assets/audio/whoa.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Snoh Aalegra (born Shahrzad Fooladi) is a Swedish-born R&B singer and songwriter based in Los Angeles.",
          },
          {
            label: "Mood Fact",
            text: "Tracks like Whoa show how electronic textures still shape contemporary soul music today.",
          },
        ],
      },
    ],
    recentlyPlayed: [
      {
        song: "Rock The Bells",
        artist: "LL Cool J",
        duration: "4:12",
      },
      {
        song: "Follow The Leader",
        artist: "Eric B & Rakim",
        duration: "3:42",
      },
    ],
  },

  {
    id: "soul-lounge",
    name: "Soul Lounge",
    frequency: "96.8 FM",
    slogan: "Slow jams after dark",
    host: "DJ Velvet",
    showTitle: "After Hours Slow Jam",
    city: "Muncie, IN",
    tag: "Soul",
    signal: "Smooth Signal",
    theme: "soul",
    djVoiceSrc: "assets/audio/dj_voices/soul.mp3",
    stationFacts: [
      {
        label: "Genre Fact",
        text: "Soul and R&B radio often creates a warm mood by pairing love songs with artist storytelling.",
      },
      {
        label: "Listening Fact",
        text: "Slow jams became a late-night radio favorite because of their emotional vocals and smooth grooves.",
      },
    ],
    tracks: [
      {
        song: "Computer Love",
        artist: "Zapp",
        duration: "4:44",
        src: "assets/audio/computer_luv.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Zapp became famous for funk grooves and Roger Troutman’s signature talkbox sound.",
          },
          {
            label: "Song Fact",
            text: "Released as the fourth single from the album The New Zapp IV U, this track is a staple of 80s 'robo-funk'.",
          },
        ],
      },
      {
        song: "Shake Your Body",
        artist: "The Jacksons",
        duration: "8:01",
        src: "assets/audio/shake.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "The Jacksons evolved from family pop stars into a group that also delivered strong disco and funk records.",
          },
          {
            label: "Song Fact",
            text: "It reached #7 on the Billboard Hot 100 in May 1979 and became the most successful recording they did for Epic Records.",
          },
        ],
      },
      {
        song: "Luther",
        artist: "Kendrick Lamar feat. SZA",
        duration: "2:57",
        src: "assets/audio/luther.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "As of April 2026, he has reached 27 career Grammy Awards, surpassing both Jay-Z and Kanye West.",
          },
          {
            label: "Mood Fact",
            text: "Modern R&B collaborations often nod to earlier soul traditions while still feeling current.",
          },
        ],
      },
      {
        song: "I Want You Around",
        artist: "Snoh Aalegra",
        duration: "3:28",
        src: "assets/audio/iwantyouaround.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Snoh Aalegra-(born Shahrzad Fooladi) is a Swedish-born R&B singer and songwriter based in Los Angeles.",
          },
          {
            label: "Mood Fact",
            text: "Songs like this fit late-night radio because they feel personal, soft, and intimate.",
          },
        ],
      },
      {
        song: "Natural Woman",
        artist: "H-Town",
        duration: "5:49",
        src: "assets/audio/natural_woman.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "A platinum-selling R&B vocal group from Houston, Texas, that rose to fame in the early 1990s.",
          },
          {
            label: "Legacy Fact",
            text: "Their music helped define the sound of 90s hip-hop and R&B.",
          },
        ],
      },
      {
        song: "This Woman's Work",
        artist: "Maxwell",
        duration: "4:00",
        src: "assets/audio/womans_work.mp3",
        facts: [
          {
            label: "Artist Fact",
            text:  "Gerald Maxwell Rivera, the influential American R&B and neo-soul singer known for his smooth falsetto.",
          },
          {
            label: "Song Fact",
            text: "This Woman's Work is remembered for its emotional depth and nuanced vocal delivery.",
          },
        ],
      },
      {
        song: "Just The Way You Are",
        artist: "Bruno Mars",
        duration: "3:56",
        src: "assets/audio/bruno.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "(born)Peter Gene Hernandez is currently headlining his global 'The Romantic Tour' in support of his latest studio album, The Romantic.",
          },
          {
            label: "Song Fact",
            text: "Just the Way You Are- is the debut solo single by Bruno Mars, released in 2010 as the lead track from his first studio album, Doo-Wops & Hooligans.",
          },
        ],
      },
      {
        song: "Ordinary Love",
        artist: "Sade",
        duration: "7:19",
        src: "assets/audio/sade.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "The group is fronted by Nigerian-born British singer-songwriter Sade Adu.",
          },
          {
            label: "Song Fact",
            text: "Ordinary Love is a classic example of Sade's signature sound, blending jazz, R&B, and pop influences.",
          },
        ],
      },
    ],
    recentlyPlayed: [
      {
        song: "Stay",
        artist: "Jodeci",
        duration: "4:52",
      },
      {
        song: "Do 4 Love",
        artist: "Snoh Aalegra",
        duration: "3:09",
      },
    ],
  },

  {
    id: "night-drive",
    name: "Night Drive Radio",
    frequency: "99.3 FM",
    slogan: "Cruise control after midnight",
    host: "DJ Headlights",
    showTitle: "Neon Highway Sessions",
    city: "Detroit, MI",
    tag: "Late",
    signal: "Wide Signal",
    theme: "nightdrive",
    djVoiceSrc: "assets/audio/dj_voices/late_night.mp3",
    stationFacts: [
      {
        label: "Radio Mood",
        text: "Night-drive playlists work best when the songs feel atmospheric, reflective, and smooth.",
      },
      {
        label: "Programming Fact",
        text: "A themed radio station feels stronger when the visuals, track order, and info cards all support the same mood.",
      },
    ],
    tracks: [
      {
        song: "Do 4 Love",
        artist: "Snoh Aalegra",
        duration: "3:09",
        src: "assets/audio/do4luv.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Snoh Aalegra-(born Shahrzad Fooladi) is a Swedish-born R&B singer and songwriter based in Los Angeles.",
          },
          {
            label: "Mood Fact",
            text: "Soft vocals and spacious production help songs like this feel intimate and reflective.",
          },
        ],
      },
      {
        song: "Playa Cards Right",
        artist: "Keyshia Cole feat. 2Pac",
        duration: "4:51",
        src: "assets/audio/playa_cards.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Keyshia Cole is a multi-platinum R&B singer and television personality currently celebrating the anniversary of her debut album, The Way It Is.",
          },
          {
            label: "Song Fact",
            text: "The track served as the lead single for Cole’s third studio album, A Different Me.",
          },
        ],
      },
      {
        song: "Stay",
        artist: "Jodeci",
        duration: "4:52",
        src: "assets/audio/stay.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Jodeci is an influential American R&B quartet known as the 'Bad Boys of R&B' for their gritty, soulful sound.",
          },
          {
            label: "Genre Fact",
            text: "Many 1990s slow jams became radio staples because they blended vulnerability with rich harmonies.",
          },
        ],
      },
      {
        song: "I Call Your Name",
        artist: "Switch",
        duration: "7:23",
        src: "assets/audio/icallyourname.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Switch helped shape late-1970s and early-1980s R&B with falsetto vocals and polished grooves.",
          },
          {
            label: "Song Fact",
            text: "Longer songs like this can create a more immersive cruise-style listening experience.",
          },
        ],
      },
      {
        song: "Till The Cops Come Knockin'",
        artist: "Maxwell",
        duration: "6:55",
        src: "assets/audio/cops.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Maxwell is known for his smooth vocals and innovative approach to R&B, often incorporating jazz and soul influences.",
          },
          {
            label: "Song Fact",
            text: "Till The Cops Come Knockin' is a standout track from Maxwell's critically acclaimed album.",
          },
        ],
      },
      {
        song: "Always Be My Baby",
        artist: "Mariah Carey",
        duration: "4:42",
        src: "assets/audio/mariah.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Mariah Carey is often referred to as the 'Songbird Supreme,' and is a legendary American singer-songwriter and producer.",
          },
          {
            label: "Song Fact",
            text: "Always Be My Baby is a classic R&B track that showcases Mariah Carey's signature vocal style and production techniques.",
          },
        ],
      },
    ],
    recentlyPlayed: [
      {
        song: "Computer Love",
        artist: "Zapp",
        duration: "4:43",
      },
      {
        song: "Luther",
        artist: "Kendrick Lamar feat. SZA",
        duration: "2:57",
      },
    ],
  },

  {
    id: "jazz-spot",
    name: "Jazz Sessions",
    frequency: "107.9 FM",
    slogan: "Smooth jazz & old school vibes...",
    host: "DJ Silky Sax",
    showTitle: "Starlight Jazz Sessions",
    city: "Oakland, CA",
    tag: "Jazz",
    signal: "Wide Signal",
    theme: "smoothjazz",
    djVoiceSrc: "assets/audio/dj_voices/jazz.mp3",
    stationFacts: [
      {
        label: "Genre Fact",
        text: "Jazz rewards repeated listening because improvisation lets each musician shape the performance in real time.",
      },
      {
        label: "History Fact",
        text: "It was created by the African-American community through a fusion of African rhythms and European harmonic structures.",
      },
    ],
    tracks: [
      {
        song: "Answer Me, My Love",
        artist: "Nat King Cole",
        duration: "2:56",
        src: "assets/audio/answer_me.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Nat King Cole was admired for both his piano playing and his smooth, elegant vocal delivery.",
          },
          {
            label: "Music Fact",
            text: "Classic vocal jazz often paired orchestral arrangements with intimate storytelling.",
          },
        ],
      },
      {
        song: "Don't Explain",
        artist: "Billie Holiday",
        duration: "3:21",
        src: "assets/audio/billie.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Billie Holiday influenced generations of singers with her phrasing, emotional control, and unmistakable tone.",
          },
          {
            label: "Style Fact",
            text: "Jazz vocalists often turn simple lines into powerful moments through timing and emotion.",
          },
        ],
      },
      {
        song: "In A Sentimental Mood",
        artist: "John Coltrane",
        duration: "4:20",
        src: "assets/audio/coltrane.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "John Coltrane helped shape modal jazz and became one of the most influential saxophonists in music history.",
          },
          {
            label: "Mood Fact",
            text: "Ballads like this show how jazz can feel deeply expressive even at a slower pace.",
          },
        ],
      },
      {
        song: "Georgia On My Mind",
        artist: "Ray Charles",
        duration: "3:37",
        src: "assets/audio/georgia.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "known professionally as Ray Charles, was a pioneering American musician often called 'The Genius'.",
          },
          {
            label: "Legacy Fact",
            text: "His phrasing and piano style helped bridge multiple genres instead of staying in just one lane.",
          },
        ],
      },
      {
        song: "A Change Is Gonna Come",
        artist: "Sam Cooke",
        duration: "3:10",
        src: "assets/audio/sam_cooke.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "was a pioneering American singer, songwriter, and entrepreneur often hailed as the 'King of Soul'.",
          },
          {
            label: "History Fact",
            text: "Songs like this showed that popular music could carry emotional depth and social meaning at the same time.",
          },
        ],
      },
      {
        song: "I Cover The Waterfront",
        artist: "Art Tatum",
        duration: "2:32",
        src: "assets/audio/waterfront.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Art Tatum was famous for virtuoso piano technique that amazed both jazz fans and fellow musicians.",
          },
          {
            label: "Piano Fact",
            text: "Tatum’s rich chord work and speed helped expand what jazz piano could sound like.",
          },
        ],
      },
    ],
    recentlyPlayed: [
      {
        song: "Take Five",
        artist: "Dave Brubeck Quartet",
        duration: "5:24",
      },
      {
        song: "Blue Train",
        artist: "John Coltrane",
        duration: "4:43",
      },
    ],
  },
];