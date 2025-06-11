// src/data.js

export const categories = [


  {
    id: 'movies',
    icon: '/icons/clapperboard.svg',
    title: 'Movies/Shows',
    description: 'Stream your favorite movies and TV shows',
    sections: [
      {
        title: 'Admins Recommendation',
        links: [
          { label: '↓ TUTORIAL | PStream (4K) Setup ↓', href: 'https://vimeo.com/1059834885/c3ab398d42' },
          { label: '↑ PStream | *Watch Tutorial for 4K* ↑', href: 'https://pstream.org/' },
        ],
      },
      {
        title: 'Movies & TV',
        links: [
          { label: 'Flixer | Most Popular *NO ADS*', href: 'https://flixer.su/' },
          { label: 'Cineby | *Netflix UI*',           href: 'https://www.cineby.app/' },
          { label: 'BitCine | *Netflix UI*',          href: 'https://www.bitcine.app/' },
          { label: 'XPrime TV | *Netflix UI*',        href: 'https://xprime.tv/' },
          { label: 'Fmovies | Movies & TV',           href: 'https://www.fmovies.cat/' },
          { label: 'MKV Cinemas | Bollywood & Hollywood', href: 'https://mkvcinemas.pet/' },
          { label: '1377x | *Torrents*',              href: 'https://www.1377x.to/home/' },
          { label: 'Docplus | *Documentaries*',       href: 'https://www.docplus.com/' },
          { label: 'Documentary Area | *Documentaries*', href: 'https://www.documentaryarea.com/' },
        ],
      },
    ],
  },

  {
    id: 'anime',
    icon: '/icons/anime.svg',
    title: 'Anime',
    description: 'Anime streaming and manga resources',
    sections: [
      {
        title: 'Admins Recommendation',
        links: [
          { label: 'AnimeKai | Hard-sub Anime',              href: 'https://animekai.to/' },   
        ],
      },
      {
        title: 'Anime & Manga',
        links: [
          { label: 'XPrime TV | Anime, Movies & TV',         href: 'https://xprime.tv/' },
          { label: 'KickAssAnime | Anime',                   href: 'https://kaa.mx/' },
          { label: 'HiAnime | Anime Dub & Sub',              href: 'https://hianimez.to/' },
          { label: 'AnimeNoSub | Anime',                     href: 'https://animenosub.to/' },
          { label: 'RiveStream | Anime, Movies & Live TV',   href: 'https://rivestream.org/' },
        ],
      },
    ],
  },

  {
    id: 'games',
    icon: '/icons/gamepad.svg',
    title: 'Games',
    description: 'Discover amazing games and gaming resources',
    sections: [
      {
        title: 'Popular Repacks',
        links: [
          { label: 'Fitgirl Repacks | Popular Repacks',       href: 'https://fitgirl-repacks.site/' },
          { label: 'GOGgames | Free GOG Games',               href: 'https://gog-games.to/' },
          { label: 'Dodi Repacks | Repacks',                  href: 'https://dodi-repacks.download/' },
          { label: 'AnkerGames | Wide selection of Games',    href: 'https://ankergames.net/' },
          { label: 'SteamGG | *Free* Preinstalled Steam Games',href: 'https://steamgg.net/' },
          { label: 'SteamRip | *Free* Preinstalled Steam Games',href: 'https://steamrip.com/' },
          { label: 'MagiPack Games | Old PC Games',           href: 'https://www.magipack.games/' },
          { label: 'Elamigos | *Juegos Españoles*',           href: 'https://elamigos.site/' },
          { label: 'Online-Fix | Online for Cracked Games',   href: 'https://online-fix.me/' },
        ],
      },
      {
        title: 'Emulator Roms',
        links: [
          { label: 'CDRomance',   href: 'https://cdromance.org/' },
          { label: 'Emuparadise', href: 'https://www.emuparadise.me/' },
        ],
      },
      {
        title: 'Trainers',
        links: [
          { label: 'WeMod | Trainers App',                 href: 'https://www.wemod.com/' },
          { label: 'FearlessRevolution | Tables & Trainers', href: 'https://fearlessrevolution.com/' },
          { label: 'FLiNGTrainer | Separate Trainers',     href: 'https://flingtrainer.com/' },
        ],
      },
    ],
  },


  {
    id: 'streaming',
    icon: '/icons/tv.svg',
    title: 'Streaming',
    description: 'Live Sports & TV',
    sections: [
      {
        title: 'Streaming Sites',
        links: [
          { label: 'StreamEast *All Mirrors*', href: 'https://gostreameast.link/' },
          { label: 'RiveLive',               href: 'https://rivestream.org/livesports' },
          { label: 'WatchSports | *10 Sports*', href: 'https://watchsports.to/' },
          { label: 'Streamed | Live Sports', href: 'https://streamed.su/' },
          { label: 'TVPass | *USA*',         href: 'https://tvpass.org/' },
          { label: 'Sportsurge | Live Sports', href: 'https://v3.sportsurge.to/home39' },
          { label: 'LiveHDTV',               href: 'https://www.livehdtv.com/' },
          { label: 'EasyWebTV *All Countries*', href: 'https://zhangboheng.github.io/Easy-Web-TV-M3u8/routes/countries.html' },
          { label: 'RGShows *International Live TV*', href: 'https://www.rgshows.me/livetv/' },
        ],
      },
    ],
  },



  {
    id: 'books',
    icon: '/icons/books.svg',
    title: 'Books',
    description: 'Digital libraries and reading resources',
    sections: [
      {
        title: 'E-Book Libraries',
        links: [
          { label: "Z-Lib | E-books",                   href: 'https://z-lib.gd/' },
          { label: 'RiveManga | Manga',                  href: 'https://rivestream.org/manga' },
          { label: 'Libgen | E-books',                   href: 'https://libgen.rs/' },
          { label: "Anna's Archive | E-books & Research papers", href: 'https://annas-archive.org/' },
          { label: 'Liber3 | E-books',                   href: 'https://liber3.eth.limo/' },
          { label: 'Audiobookbay | Audiobooks',          href: 'https://audiobookbay.lu/' },
          { label: 'Full Length Audiobooks | *No Account Required*', href: 'https://fulllengthaudiobooks.net/' },
          { label: 'Tokyobook | Audiobooks *Smaller Catalog*', href: 'https://tokybook.com/' },
        ],
      },
    ],
  },

  {
    id: 'music',
    icon: '/icons/music-note.svg',
    title: 'Music',
    description: 'Music streaming and audio platforms',
    sections: [
      {
        title: 'Music Downloaders & Streams',
        links: [
          { label: 'Racoon | Multi Media Downloader', href: 'https://shailen.dedyn.io/racoon/' },
          { label: 'AZMP3 | YouTube to MP3',          href: 'https://azmp3.cc/' },
          { label: 'Ezmp3 | YouTube to MP3',          href: 'https://ezmp3.io/h520' },
          { label: 'Cobalt | YT, IG, Twitch etc… *Downloader*', href: 'https://cobalt.tools/' },
          { label: 'DoubleDouble | Download *HiFi* Music', href: 'https://doubledouble.top/' },
          { label: 'NCS | Non-Copyrighted Music',     href: 'https://ncs.io/' },
          { label: 'Music School | Bandcamp to MP3',  href: 'https://downloadmusicschool.com/bandcamp/' },
          { label: 'CnvMP3 | Media Downloader',       href: 'https://cnvmp3.com/' },
          { label: 'Megathread | Everything Music Related', href: 'https://github.com/MoonWalker440/Music-Megathread/' },
        ],
      },
    ],
  },

  {
    id: 'software',
    icon: '/icons/laptop.svg',
    title: 'Software',
    description: 'Essential software and development tools',
    sections: [
      {
        title: 'Software Repositories',
        links: [
          { label: 'Appdoze | *Latest Softwares*', href: 'https://appdoze.net/' },
          { label: 'Scloud | Windows Software',    href: 'https://scloud.ws/' },
          { label: 'DownloadPirate | VFX + Much More', href: 'https://www.downloadpirate.com/' },
          { label: 'AeDownload | Premiere & After Effects Plugins', href: 'https://aedownload.com/' },
          { label: 'Audioz | Music Production Software', href: 'https://audioz.download/' },
          { label: 'DAIKOV | *Russian*',           href: 'https://diakov.net/' },
          { label: 'DownloadHa | *Persian*',       href: 'https://www.downloadha.com/' },
        ],
      },
    ],
  },


  {
    id: 'vpn',
    icon: '/icons/lock.svg',
    title: 'VPN',
    description: 'Virtual private networks and security tools',
    sections: [
      {
        title: 'VPN Providers',
        links: [
          { label: 'NordVPN',               href: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=124563' },
          { label: 'Private Internet Access', href: 'https://www.kqzyfj.com/click-1-14087892' },
          { label: 'Surfshark',             href: 'https://www.jdoqocy.com/click-101452304-15438544' },
        ],
      },
    ],
  },

  {
    id: 'adblockers',
    icon: '/icons/shield.svg',
    title: 'AdBlockers',
    description: 'Ad blocking tools and privacy extensions',
    sections: [
      {
        title: 'AdBlockers',
        links: [
          { label: 'AdGuard | AdBlocker',             href: 'https://adguard.com/?aid=135720' },
          { label: 'Adblock Plus | AdBlocker',        href: 'https://adblockplus.org/' },
          { label: 'uBlockOrigin | Content Blocker *Ads & more*', href: 'https://ublockorigin.com/' },
        ],
      },
    ],
  },
];
