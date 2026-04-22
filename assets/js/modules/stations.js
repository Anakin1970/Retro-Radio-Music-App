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
        text: "Hip-hop radio helped break new records by turning local street culture into a mainstream force.",
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
            text: "Rock The Bells is known for its hard-hitting beat and confident delivery that defined mid-1980s rap energy.",
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
            text: "It’s Like That mixed social commentary with a raw beat, showing that hip-hop could speak on real-life struggles.",
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
            text: "Brass Monkey became memorable for its playful hook and party-ready energy.",
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
            text: "GZA was known in Wu-Tang Clan for sharp lyricism and cerebral writing.",
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
            text: "Planet Rock became a landmark record for merging rap rhythms with electronic dance production.",
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
            text: "Egypt, Egypt became a staple for dancers and DJs because of its hypnotic groove and machine-driven beat.",
          },
        ],
      },
      {
        song: "Purple Rain",
        artist: "Prince",
        duration: "8:40",
        src: "assets/audio/purple_rain.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Prince was a musical innovator who blended rock, funk, pop, and electronic elements into a unique sound.",
          },
          {
            label: "Song Fact",
            text: "The soundtrack, Purple Rain, was the first Prince album to reach #1 on the Billboard 200, spending 24 consecutive weeks at the top.",
          },
        ],
      }, 
      {
        song: "Flash Light",
        artist: "Funkadelic",
        duration: "4:27",
        src: "assets/audio/flashlight.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Funkadelic, led by George Clinton, was known for their psychedelic take on funk music.",
          },
          {
            label: "Song Fact",
            text: "Flash Light is a funk classic that features a long groove and became a favorite for sampling in hip-hop.",
          },
        ],
      },
      {
        song: "Atomic Dog",
        artist: "George Clinton",
        duration: "4:42",
        src: "assets/audio/atomic.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "George Clinton is a key figure in funk music, known for his eccentric style and influential productions.",
          },
          {
            label: "Song Fact",
            text: "Atomic Dog became one of George Clinton's most famous songs, known for its catchy hook and playful lyrics.",
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
            text: "Computer Love became a classic for its futuristic title and smooth electro-funk romance feel.",
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
            text: "Shake Your Body became popular for its dance-floor energy and unforgettable hook.",
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
            text: "Kendrick Lamar often mixes sharp lyricism with musical ideas rooted in Black music history.",
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
            text: "Snoh Aalegra’s music often leans into lush arrangements and emotionally detailed vocals.",
          },
          {
            label: "Mood Fact",
            text: "Songs like this fit late-night radio because they feel personal, soft, and intimate.",
          },
        ],
      },
      {
        song: "Natural Woman",
        artist: "Aretha Franklin",
        duration: "2:46",
        src: "assets/audio/natural_woman.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Aretha Franklin became known as the Queen of Soul because of her powerhouse voice and commanding delivery.",
          },
          {
            label: "Legacy Fact",
            text: "Her recordings helped define what emotional honesty could sound like in soul music.",
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
            text: "Maxwell helped lead the neo-soul movement with smooth vocals and sophisticated songwriting.",
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
            text: "Bruno Mars is known for his versatile singing and dancing abilities, often blending pop, R&B, and funk influences.",
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
            text: "Sade is known for her smooth, sultry vocals and sophisticated songwriting.",
          },
          {
            label: "Song Fact",
            text: "Ordinary Love is a classic example of Sade's signature sound, blending jazz, R&B, and pop influences.",
          },
        ],
      },
      {
        song: "Back To Life",
        artist: "Soul II Soul",
        duration: "3:48",
        src: "assets/audio/back2life.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Soul II Soul was known for their innovative approach to R&B and their ability to blend different musical styles.",
          },
          {
            label: "Song Fact",
            text: "Back To Life is a standout track that showcases the group's signature sound and emotional depth.",
          },
        ],
      },
      {
        song: "Superman Lover",
        artist: "Johnny 'Guitar' Watson",
        duration: "5:45",
        src: "assets/audio/superman.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Johnny 'Guitar' Watson is a legendary blues guitarist known for his smooth playing and soulful delivery.",
          },
          {
            label: "Song Fact",
            text: "Superman Lover is one of Johnny 'Guitar' Watson's most popular tracks, showcasing his signature style.",
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
    name: "Late Night Drive Radio",
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
            text: "Snoh Aalegra often creates songs that feel cinematic, which makes them a natural fit for night-drive playlists.",
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
            text: "Keyshia Cole became known for emotionally direct vocals and storytelling rooted in classic R&B traditions.",
          },
          {
            label: "Song Fact",
            text: "Songs that blend melodic hooks with rap influence help bridge R&B and hip-hop audiences.",
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
            text: "Jodeci brought gospel-influenced vocals and hip-hop swagger into 1990s R&B.",
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
            text: "Till The Cops Come Knockin' is a standout track from Maxwell's critically acclaimed album, further establishing his reputation for emotional depth and musical sophistication.",
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
            text: "Mariah Carey is known for her powerful vocals and wide vocal range, often incorporating pop, R&B, and gospel influences.",
          },
          {
            label: "Song Fact",
            text: "Always Be My Baby is a classic R&B track that showcases Mariah Carey's signature vocal style and production techniques.",
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
            text: "Snoh Aalegra is known for blending modern soul and R&B with atmospheric production.",
          },
          {
            label: "Mood Fact",
            text: "Tracks like Whoa show how electronic textures still shape contemporary soul music today.",
          },
        ],
      },
      {
        song: "Que Sera Sera",
        artist: "Sly & The Family Stone",
        duration: "5:19",
        src: "assets/audio/que_sera.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Sly & The Family Stone were pioneers of funk and soul, known for their energetic performances and socially conscious lyrics.",
          },
          {
            label: "Song Fact",
            text: "Que Sera Sera is a soulful track that combines catchy melodies with a laid-back groove, making it a great fit for late-night listening.",
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
        text: "Jazz radio can also teach listeners about eras, artists, and styles without needing a separate lesson page.",
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
            text: "Ray Charles blended gospel, blues, jazz, and soul into a sound that changed American music.",
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
            text: "Sam Cooke was a major figure in soul music, known for smooth vocals and deeply expressive songwriting.",
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
      {
        song: "Twinkle Twinkle",
        artist: "Stevie Wonder",
        duration: "3:12",
        src: "assets/audio/twinkle.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Stevie Wonder is a legendary musician known for his soulful voice, multi-instrumental talents, and innovative songwriting.",
          },
          {
            label: "Song Fact",
            text: "Twinkle Twinkle is a lesser-known track that showcases Stevie Wonder's ability to create intimate and heartfelt music.",
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
  {
    id: "classic-rock",
    name: "Classic Rock Revival",
    frequency: "101.1 FM",
    slogan: "Guitars, drums, and timeless anthems",
    host: "DJ Thunderstrum",
    showTitle: "Classic Rock Revival",
    city: "Los Angeles, CA",
    tag: "Rock",
    signal: "Powerful Signal",
    theme: "rock",
    djVoiceSrc: "assets/audio/dj_voices/rock.mp3",
    stationFacts: [
      {
        label: "Genre Fact",
        text: "Classic rock radio often focuses on guitar-driven songs from the 1960s to the 1980s.",
      },
      {
        label: "Cultural Fact",
        text: "Many classic rock songs became anthems for youth culture and are still celebrated today.",
      },
    ],
    tracks: [
      {
        song: "What's Up",
        artist: "Four Non-Blondes",
        duration: "4:52",
        src: "assets/audio/whatsup.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Four Non-Blondes were a one-hit wonder band from the early 1990s, known for their distinctive sound and the powerful vocals of lead singer Linda Perry.",
          },
          {
            label: "Song Fact",
            text: "What's Up is the band's most famous song, released in 1992, and it became an anthem for its catchy chorus and relatable lyrics about frustration and searching for meaning.",
          },
        ],
      },
      {
        song: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        duration: "5:03",
        src: "assets/audio/sweetchild.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Guns N' Roses is a legendary rock band known for their raw energy, powerful vocals, and iconic guitar riffs.",
          },
          {
            label: "Song Fact",
            text: "Sweet Child O' Mine is one of the band's most famous songs, released in 1987, and it features one of the most recognizable guitar intros in rock history.",
          },
        ],
      },
      {
        song: "Back In Black",
        artist: "AC/DC",
        duration: "4:13",
        src: "assets/audio/backinblack.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "AC/DC is an Australian rock band formed in 1973, known for their high-energy live performances and hit songs.",
          },
          {
            label: "Song Fact",
            text: "Back In Black is one of the best-selling albums of all time, featuring the iconic title track and other memorable songs.",
          },
        ],
      },
      {
        song: "Take On Me",
        artist: "a-ha",
        duration: "4:04",
        src: "assets/audio/takeonme.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "a-ha is a Norwegian synth-pop band formed in 1982, known for their catchy melodies and innovative music videos.",
          },
          {
            label: "Song Fact",
            text: "Take On Me is one of the most recognizable songs from the 1980s, featuring a distinctive music video that was groundbreaking for its time.",
          },
        ],
      },
      {
        song: "I Was Made For Lovin' You",
        artist: "Kiss",
        duration: "3:58",
        src: "assets/audio/lovingyou.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Kiss is an American rock band formed in 1973, known for their theatrical live performances and hit songs.",
          },
          {
            label: "Song Fact",
            text: "I Was Made For Lovin' You is one of Kiss's most popular songs, released in 1979, and it features their signature guitar riffs and powerful vocals.",
          },
        ],
      },
      {
        song: "Smells Like Teen Spirit",
        artist: "Nirvana",
        duration: "4:38",
        src: "assets/audio/teen_spirit.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Nirvana was a groundbreaking grunge band from the early 1990s, known for their raw sound and influential music.",
          },
          {
            label: "Song Fact",
            text: "Smells Like Teen Spirit is one of Nirvana's most famous songs, released in 1991, and it became an anthem for Generation X with its powerful guitar riffs and rebellious lyrics.",
          },
        ],
      },
      {
        song: "Every Breath You Take",
        artist: "The Police",
        duration: "3:48",
        src: "assets/audio/breath.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "The Police were a British rock band formed in 1977, known for their unique blend of rock, reggae, and punk influences.",
          },
          {
            label: "Song Fact",
            text: "Every Breath You Take is one of The Police's most famous songs, released in 1983, and it features a memorable guitar riff and haunting lyrics about obsession.",
          },
        ],
      },
      {
        song: "Heathens",
        artist: "Twenty One Pilots",
        duration: "3:37",
        src: "assets/audio/heathens.mp3",
        facts: [
          {
            label: "Artist Fact",
            text: "Twenty One Pilots is an American musical duo formed in 2009, known for their eclectic style that blends elements of rock, hip-hop, and pop.",
          },
          {
            label: "Song Fact",
            text: "Heathens is one of the band's most popular songs, released in 2016, and it was featured on the soundtrack for the film Suicide Squad, gaining widespread acclaim for its dark and moody atmosphere.",
          },
        ],
      }
    ],
    recentlyPlayed: [
      {
        song: "Bohemian Rhapsody",
        artist: "Queen",
        duration: "5:55",
      },
      {
        song: "Hotel California",
        artist: "Eagles",
        duration: "6:30",
      },
    ],  
  }
];