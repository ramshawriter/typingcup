// ============================================================
//  SYMBOL DATA
//  Each entry: [character, name, category, altCode?, keywords?, popular?]
//  - altCode: Windows Alt-code (string) where one reliably exists, else null
//  - popular: true to feature it on the homepage grid
//  To add a symbol, just add a row to RAW below. Codepoints are auto-generated.
// ============================================================

/** @type {[string, string, string, (string|null)?, string?, boolean?][]} */
const RAW = [
  // ---- Currency ----
  ['€', 'Euro sign', 'Currency', '0128', 'money euro europe', true],
  ['£', 'Pound sign', 'Currency', '0163', 'money pound sterling', true],
  ['¥', 'Yen sign', 'Currency', '0165', 'money yen yuan', true],
  ['¢', 'Cent sign', 'Currency', '0162', 'money cent', false],
  ['₹', 'Indian rupee', 'Currency', null, 'money rupee india', false],
  ['₽', 'Russian ruble', 'Currency', null, 'money ruble russia', false],
  ['₩', 'Korean won', 'Currency', null, 'money won korea', false],
  ['₺', 'Turkish lira', 'Currency', null, 'money lira turkey', false],
  ['₿', 'Bitcoin sign', 'Currency', null, 'money bitcoin crypto', false],
  ['¤', 'Currency sign', 'Currency', '0164', 'money generic currency', false],
  ['₴', 'Ukrainian hryvnia', 'Currency', null, 'money hryvnia', false],
  ['₫', 'Vietnamese dong', 'Currency', null, 'money dong', false],

  // ---- Math ----
  ['°', 'Degree sign', 'Math', '0176', 'degree temperature angle', true],
  ['±', 'Plus-minus sign', 'Math', '0177', 'plus minus tolerance', true],
  ['×', 'Multiplication sign', 'Math', '0215', 'times multiply', true],
  ['÷', 'Division sign', 'Math', '0247', 'divide division', true],
  ['≠', 'Not equal to', 'Math', null, 'not equal inequality', false],
  ['≈', 'Almost equal to', 'Math', null, 'approximately almost equal', false],
  ['≤', 'Less than or equal', 'Math', null, 'less equal', false],
  ['≥', 'Greater than or equal', 'Math', null, 'greater equal', false],
  ['∞', 'Infinity', 'Math', null, 'infinity endless', true],
  ['√', 'Square root', 'Math', null, 'root radical square', false],
  ['∑', 'Summation', 'Math', null, 'sum sigma total', false],
  ['∏', 'Product', 'Math', null, 'product pi', false],
  ['∫', 'Integral', 'Math', null, 'integral calculus', false],
  ['∂', 'Partial differential', 'Math', null, 'partial derivative', false],
  ['π', 'Pi', 'Math', null, 'pi math constant', true],
  ['µ', 'Micro sign', 'Math', '0181', 'micro mu', false],
  ['∆', 'Increment (delta)', 'Math', null, 'delta change difference', false],
  ['∇', 'Nabla', 'Math', null, 'nabla gradient', false],
  ['∈', 'Element of', 'Math', null, 'element member set', false],
  ['∉', 'Not an element of', 'Math', null, 'not element set', false],
  ['∩', 'Intersection', 'Math', null, 'intersection set', false],
  ['∪', 'Union', 'Math', null, 'union set', false],
  ['½', 'One half', 'Math', '0189', 'fraction half', false],
  ['¼', 'One quarter', 'Math', '0188', 'fraction quarter', false],
  ['¾', 'Three quarters', 'Math', '0190', 'fraction three quarters', false],
  ['‰', 'Per mille', 'Math', '0137', 'per mille thousand', false],
  ['²', 'Superscript two', 'Math', '0178', 'squared power two', false],
  ['³', 'Superscript three', 'Math', '0179', 'cubed power three', false],
  ['¹', 'Superscript one', 'Math', '0185', 'power one', false],

  // ---- Arrows ----
  ['→', 'Rightwards arrow', 'Arrows', null, 'arrow right', true],
  ['←', 'Leftwards arrow', 'Arrows', null, 'arrow left', true],
  ['↑', 'Upwards arrow', 'Arrows', null, 'arrow up', true],
  ['↓', 'Downwards arrow', 'Arrows', null, 'arrow down', true],
  ['↔', 'Left right arrow', 'Arrows', null, 'arrow both horizontal', false],
  ['↕', 'Up down arrow', 'Arrows', null, 'arrow both vertical', false],
  ['⇒', 'Rightwards double arrow', 'Arrows', null, 'arrow implies double', false],
  ['⇐', 'Leftwards double arrow', 'Arrows', null, 'arrow double left', false],
  ['⇔', 'Left right double arrow', 'Arrows', null, 'arrow iff double', false],
  ['↗', 'North east arrow', 'Arrows', null, 'arrow diagonal up right', false],
  ['↘', 'South east arrow', 'Arrows', null, 'arrow diagonal down right', false],
  ['↩', 'Leftwards with hook', 'Arrows', null, 'arrow return hook', false],
  ['➜', 'Heavy arrow', 'Arrows', null, 'arrow heavy bold', false],
  ['➤', 'Triangle arrowhead', 'Arrows', null, 'arrow play triangle', false],
  ['↻', 'Clockwise arrow', 'Arrows', null, 'refresh reload rotate', false],
  ['⟶', 'Long rightwards arrow', 'Arrows', null, 'arrow long right', false],

  // ---- Punctuation ----
  ['—', 'Em dash', 'Punctuation', '0151', 'em dash long dash', true],
  ['–', 'En dash', 'Punctuation', '0150', 'en dash range', true],
  ['•', 'Bullet', 'Punctuation', '0149', 'bullet point list dot', true],
  ['…', 'Ellipsis', 'Punctuation', '0133', 'ellipsis dots three', true],
  ['‘', 'Left single quote', 'Punctuation', '0145', 'quote curly single left', false],
  ['’', 'Right single quote', 'Punctuation', '0146', 'apostrophe curly single', false],
  ['“', 'Left double quote', 'Punctuation', '0147', 'quote curly double left', false],
  ['”', 'Right double quote', 'Punctuation', '0148', 'quote curly double right', false],
  ['«', 'Left guillemet', 'Punctuation', '0171', 'quote angle french', false],
  ['»', 'Right guillemet', 'Punctuation', '0187', 'quote angle french', false],
  ['§', 'Section sign', 'Punctuation', '0167', 'section legal', false],
  ['¶', 'Pilcrow', 'Punctuation', '0182', 'paragraph pilcrow', false],
  ['†', 'Dagger', 'Punctuation', '0134', 'dagger footnote', false],
  ['‡', 'Double dagger', 'Punctuation', '0135', 'double dagger footnote', false],
  ['·', 'Middle dot', 'Punctuation', '0183', 'interpunct middle dot', false],
  ['¿', 'Inverted question', 'Punctuation', '0191', 'question spanish inverted', false],
  ['¡', 'Inverted exclamation', 'Punctuation', '0161', 'exclamation spanish inverted', false],
  ['‐', 'Hyphen', 'Punctuation', null, 'hyphen', false],
  ['⁃', 'Hyphen bullet', 'Punctuation', null, 'bullet hyphen', false],

  // ---- Letters & Accents ----
  ['á', 'a acute', 'Accents', '0225', 'accent acute spanish a', true],
  ['é', 'e acute', 'Accents', '0233', 'accent acute french e', true],
  ['í', 'i acute', 'Accents', '0237', 'accent acute i', false],
  ['ó', 'o acute', 'Accents', '0243', 'accent acute o', false],
  ['ú', 'u acute', 'Accents', '0250', 'accent acute u', false],
  ['ñ', 'n tilde', 'Accents', '0241', 'enye tilde spanish n', true],
  ['ü', 'u umlaut', 'Accents', '0252', 'umlaut diaeresis german u', true],
  ['ö', 'o umlaut', 'Accents', '0246', 'umlaut german o', false],
  ['ä', 'a umlaut', 'Accents', '0228', 'umlaut german a', false],
  ['ç', 'c cedilla', 'Accents', '0231', 'cedilla french c', true],
  ['è', 'e grave', 'Accents', '0232', 'accent grave french e', false],
  ['à', 'a grave', 'Accents', '0224', 'accent grave a', false],
  ['ê', 'e circumflex', 'Accents', '0234', 'circumflex hat e', false],
  ['â', 'a circumflex', 'Accents', '0226', 'circumflex hat a', false],
  ['ô', 'o circumflex', 'Accents', '0244', 'circumflex hat o', false],
  ['ß', 'Sharp s (eszett)', 'Accents', '0223', 'german sharp s eszett', false],
  ['ø', 'o with stroke', 'Accents', '0248', 'danish norwegian o slash', false],
  ['å', 'a with ring', 'Accents', '0229', 'ring nordic a', false],
  ['æ', 'ae ligature', 'Accents', '0230', 'ligature ash ae', false],
  ['œ', 'oe ligature', 'Accents', '0156', 'ligature oe', false],
  ['Ñ', 'N tilde (capital)', 'Accents', '0209', 'enye capital spanish', false],
  ['É', 'E acute (capital)', 'Accents', '0201', 'accent acute capital e', false],

  // ---- Greek ----
  ['α', 'Alpha', 'Greek', null, 'greek alpha', false],
  ['β', 'Beta', 'Greek', null, 'greek beta', false],
  ['γ', 'Gamma', 'Greek', null, 'greek gamma', false],
  ['δ', 'Delta', 'Greek', null, 'greek delta small', false],
  ['Δ', 'Delta (capital)', 'Greek', null, 'greek delta change', true],
  ['θ', 'Theta', 'Greek', null, 'greek theta angle', false],
  ['λ', 'Lambda', 'Greek', null, 'greek lambda', false],
  ['μ', 'Mu', 'Greek', null, 'greek mu micro', false],
  ['σ', 'Sigma', 'Greek', null, 'greek sigma', false],
  ['Σ', 'Sigma (capital)', 'Greek', null, 'greek sigma sum', false],
  ['φ', 'Phi', 'Greek', null, 'greek phi golden', false],
  ['ω', 'Omega', 'Greek', null, 'greek omega', false],
  ['Ω', 'Omega (capital)', 'Greek', null, 'greek omega ohm', true],
  ['Φ', 'Phi (capital)', 'Greek', null, 'greek phi', false],
  ['Π', 'Pi (capital)', 'Greek', null, 'greek pi product', false],

  // ---- Symbols & Marks ----
  ['©', 'Copyright', 'Symbols', '0169', 'copyright legal', true],
  ['®', 'Registered', 'Symbols', '0174', 'registered trademark legal', true],
  ['™', 'Trademark', 'Symbols', '0153', 'trademark tm', true],
  ['℗', 'Sound recording copyright', 'Symbols', null, 'phonogram copyright', false],
  ['℠', 'Service mark', 'Symbols', null, 'service mark sm', false],
  ['°', 'Degree', 'Symbols', '0176', 'degree', false],
  ['№', 'Numero sign', 'Symbols', null, 'numero number', false],
  ['✓', 'Check mark', 'Symbols', null, 'check tick yes done', true],
  ['✔', 'Heavy check mark', 'Symbols', null, 'check tick bold', false],
  ['✗', 'Ballot x', 'Symbols', null, 'cross x no wrong', false],
  ['✘', 'Heavy ballot x', 'Symbols', null, 'cross x bold', false],
  ['★', 'Black star', 'Symbols', null, 'star filled favourite', true],
  ['☆', 'White star', 'Symbols', null, 'star outline', false],
  ['☀', 'Sun', 'Symbols', null, 'sun weather', false],
  ['☂', 'Umbrella', 'Symbols', null, 'umbrella rain', false],
  ['☆', 'Star outline', 'Symbols', null, 'star', false],
  ['☮', 'Peace', 'Symbols', null, 'peace sign', false],
  ['☯', 'Yin yang', 'Symbols', null, 'yin yang balance', false],
  ['♻', 'Recycling', 'Symbols', null, 'recycle environment', false],
  ['⚡', 'High voltage', 'Symbols', null, 'lightning bolt power', false],
  ['☑', 'Ballot box with check', 'Symbols', null, 'checkbox checked', false],
  ['☐', 'Ballot box', 'Symbols', null, 'checkbox empty', false],
  ['♦', 'Diamond suit', 'Symbols', null, 'diamond card', false],
  ['♣', 'Club suit', 'Symbols', null, 'club card', false],
  ['♠', 'Spade suit', 'Symbols', null, 'spade card', false],
  ['♥', 'Heart suit', 'Symbols', null, 'heart card', false],
  ['♪', 'Eighth note', 'Symbols', null, 'music note', false],
  ['♫', 'Beamed notes', 'Symbols', null, 'music notes', false],
  ['☎', 'Telephone', 'Symbols', null, 'phone call', false],
  ['✉', 'Envelope', 'Symbols', null, 'email mail', false],
  ['✂', 'Scissors', 'Symbols', null, 'cut scissors', false],
  ['✦', 'Black four point star', 'Symbols', null, 'sparkle star', false],
  ['❖', 'Black diamond minus', 'Symbols', null, 'diamond decorative', false],

  // ---- Hearts ----
  ['♥', 'Heart', 'Hearts', null, 'heart love', true],
  ['❤', 'Heavy heart', 'Hearts', null, 'heart love red', true],
  ['💕', 'Two hearts', 'Hearts', null, 'hearts love', false],
  ['♡', 'White heart', 'Hearts', null, 'heart outline', false],
  ['❣', 'Heart exclamation', 'Hearts', null, 'heart love', false],
  ['💖', 'Sparkling heart', 'Hearts', null, 'heart sparkle', false],
  ['💔', 'Broken heart', 'Hearts', null, 'heart broken', false],
  ['❦', 'Floral heart', 'Hearts', null, 'heart floral', false],

  // ---- Brackets ----
  ['«', 'Left angle quote', 'Brackets', '0171', 'bracket angle', false],
  ['»', 'Right angle quote', 'Brackets', '0187', 'bracket angle', false],
  ['⟨', 'Left angle bracket', 'Brackets', null, 'bracket angle math', false],
  ['⟩', 'Right angle bracket', 'Brackets', null, 'bracket angle math', false],
  ['【', 'Left black lenticular', 'Brackets', null, 'bracket cjk', false],
  ['】', 'Right black lenticular', 'Brackets', null, 'bracket cjk', false],
  ['「', 'Left corner bracket', 'Brackets', null, 'bracket cjk corner', false],
  ['」', 'Right corner bracket', 'Brackets', null, 'bracket cjk corner', false],
  ['〔', 'Left tortoise bracket', 'Brackets', null, 'bracket tortoise', false],
  ['〕', 'Right tortoise bracket', 'Brackets', null, 'bracket tortoise', false],
];

function toCodepoint(ch) {
  const cp = ch.codePointAt(0);
  return 'U+' + cp.toString(16).toUpperCase().padStart(4, '0');
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// De-duplicate by character (first occurrence wins) and build the final list.
const seen = new Set();
export const SYMBOLS = RAW.filter(([ch]) => {
  if (seen.has(ch)) return false;
  seen.add(ch);
  return true;
}).map(([char, name, category, altCode = null, keywords = '', popular = false]) => ({
  char,
  name,
  category,
  altCode,
  keywords,
  popular,
  codepoint: toCodepoint(char),
  slug: slugify(name),
}));

export const CATEGORIES = [...new Set(SYMBOLS.map((s) => s.category))];

export const POPULAR = SYMBOLS.filter((s) => s.popular);
