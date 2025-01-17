(function (window, document) {

  // a // after means it's additional names

  window.names = [
    // planets
    'mer', 'cury',
    've', 'nus',
    'ear', 'th',
    'mar',
    'ju', 'pit', 'er',
    'sa', 'turn',
    'ura', 'nus',
    'nep', 'tune',

    'magra', 'thea', // Deep thought
    'meste', // nice one

    // dwarf planets
    'cer', 'es',
    'plu', 'to',
    'hau', 'mea',
    //'make',
    'eris',
    'orcus',
    'sa', 'la', 'cia',
    'qua', 'oar',
    'sedna',

    // moons
    'cadu', 'ceus', // no, mercury doesn't actually have a moon
    'neith', // neither does venus
    'mun', 'mon', // some nice fragments as well
    'lu', 'lun',

    'pho', 'bos',
    'dei', 'mos',

    'me', 'tis',
    'adra', 'stea',
    'amal', 'thea',
    'the', 'be',
    'io',
    'eur', 'opa',
    'gany', 'mede',
    'call' , 'isto',
    'them', 'isto',
    'leda',
    'hima', 'lia',
    'lysi', 'thea',
    'ela', 'ra',
    'dia',
    'carpo',
    'eup', 'orie',
    'thel', 'xin', 'oe',
    'euan', 'the',
    'hel', 'ike',
    'orth', 'osie',
    'thos', //
    'ioc', 'aste',
    'praxi', 'dike',
    'harp', 'alyke',
    'mneme',
    'herm', 'ippe',
    'thy', 'one',
    'ana', 'nke',
    'her', 'se',
    'ait', 'ne',
    'kale',
    'tay', 'gete',
    'chal', 'dene',
    'eri', 'nome',
    'ome', //
    'aoede',
    'kalli', 'chore',
    'kal', 'li', 'cho', 're', //
    'ka', //
    'kal', 'yke',
    'car', 'me',
    'callir', 'rhoe',
    'cal', 'lir', 'rh', 'oe', //
    'eury', 'dome',
    'eur', 'ome', //
    'pasi', 'thee',
    'kore',
    'cyll', 'ene',
    'euk', 'el', 'ade',
    'pasi', 'phae',
    'pa', 'siph', 'ae', //
    'heg', 'emo', 'ne',
    'emone', //
    'hege', 'mone', //
    'arche',
    'ar', 'che', //
    'iso', 'noe',
    'sin', 'ope',
    'spo', 'nde',
    'auto', 'noe',
    'tone', //
    'mega', 'clite',
    'gecl', //

    'mo', 'nle', 'let', // from "moonlet
    'pan',
    'daph', 'nis',
    'phn', //
    'atlas',
    'atl', 'as', //
    'pro', 'me', 'the', 'us',
    'methe', 'theus',  //
    'pan', 'dora',
    'andor', 'ando', //
    'epi', 'meth', 'eus',
    'epim', 'theus', //
    'janus',
    'aeg', 'aeon',
    'egae', 'eon', //
    'mimas',
    'mim', 'as', //
    'meth', 'one',
    'tho', //
    'anthe',
    'pal', 'lene',
    'enc', 'ela', 'dus',
    'ncela', 'cela', 'elad', //
    'tethys',
    'tet', 'hys', //
    'tele', 'sto',
    'esto', //
    'caly', 'pso',
    'dio', 'ne',
    'ion', //
    'hel', 'ene', //
    'poly', 'deu', 'ces',
    'rhea',
    'tit', 'an',
    'itan', //
    'hyper', 'ion',
    'perio', 'eri', //
    'iap', 'etus',
    'pet', //
    'kivi', 'uq',
    'kiv', 'iu', //
    'iji', 'raq',
    'phoe', 'be',
    'ebe', //
    'pa', 'aliaq',
    'pa', 'liaq', //
    'ska', 'thi',
    'albio', 'rix',
    'ior', //
    'bebh', 'ionn',
    'bebh', 'hion', //
    'err', 'ia', 'pus',
    'ria', 'apu', //
    'skoll',
    'sko', //
    'siar', 'naq',
    'tar', 'qeq',
    'rqe', //
    'gre', 'ip',
    'rei', //
    'hyr', 'rok', 'kin',
    'yro', //
    'jarn', 'saxa',
    'arns', //
    'tar', 'vos',
    'mun', 'dil', 'fari',
    'ber', 'gel', 'mir',
    'ergel', 'elmi', //
    'nar', 'vi',
    'arvi', 'narvi', //
    'sut', 'tun', 'gr',
    'gur', //
    'hati',
    'ati', //
    'far', 'bau', 'ti',
    'arba', //
    'thry', 'mr',
    'ae', 'gir',
    'aeg',
    'bes', 'tla',
    'fen', 'rir',
    'enri', //
    'sur', 'tur',
    'kari',
    'ymir',
    'loge',
    'forn', 'jot',

    'cor', 'delia',
    'orde', 'lia', //
    'oph', 'elia',
    'phel', //
    'bia', 'nca',
    'ian', //
    'cres', 'sida',
    'essi', //
    'des', 'dem', 'ona',
    'esde', //
    'jul', 'iet',
    'por', 'tia',
    'rosa', 'lind',
    'cu', 'pid',
    'bel', 'inda',
    'eli', //
    'per', 'dita',
    'puck',
    'uck', //
    'mab',
    'mir', 'anda',
    'rand', //
    'ariel',
    'rie', 'riel', //
    'umb', 'riel',
    'rie', //
    'tit', 'ania',
    'ober', 'on',
    'ero', //
    'fran', 'cisco',
    'ancis', //
    'cali', 'ban',
    'alib', //
    'steph', 'ano',
    'trin', 'culo',
    'incu', //
    'syc', 'orax',
    'cora', //
    'mar', 'gar', 'et',
    'are', //
    'pros', 'pero',
    'osper', //,
    'sete', 'bos',
    'teb', //
    'ferd', 'in', 'and',
    'dina', //

    'na', 'iad',
    'nai', 'ad', //
    'thal', 'assa',
    'alas', //
    'des', 'pina',
    'espi', //
    'gala', 'tea',
    'alat', 'atea', //
    'lar', 'issa',
    'aris', //
    'pro', 'teus',
    'tri', 'ton',
    'rito', //
    'ner', 'eid',
    'hali', 'mede',
    'sao',
    'laom', 'edia',
    'psam', 'athe',
    'neso',

    'char', 'on',
    'aro', //
    'styx', //
    'nix',
    'ker', 'ber', 'os',
    'erbe', //
    'hy', 'dra',
    'ydra', //

    // asteroids
    // ceres is now a dwarf planet
    'pal', 'las',
    'alla', //
    'juno',
    'uno', //
    'vesta',
    'ves', 'ta', //
    'ast', 'raea',
    'rae', 'aea', //
    'hebe',
    'ebe', //
    'iris',
    'ris', //
    'flora',
    'ora', //
    'metis',
    'hyg', 'iea',
    'giea', //
    'par', 'the', 'nope',
    'vic', 'tor', 'ia',
    'oria', //
    'ege', 'ria',
    'eria', //
    'ire', 'ne',
    'rene', //
    'eun', 'omia',
    'psy', 'che',
    'the', 'tis',
    'melp', 'ome', 'ne',
    'lpo', //
    'fort', 'una',
    'ortu', //
    'prose', 'rpina',
    'oser', //
    'bel', 'lona',
    'amph', 'it', 'rite',
    'itr', //
    'leuk', 'othea',
    'euko', //
    'fid', 'es'
  ]

})(window, document);
