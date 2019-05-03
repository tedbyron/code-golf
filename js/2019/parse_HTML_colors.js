/**
 * "Parse RGB colors represented by strings. The formats are primarily used in
 * HTML and CSS. Your task is to implement a function which takes a color as a
 * string and returns the parsed color as a map. The input string represents a
 * 6-digit hexadecimal number, 3-digit hexadecimal number, or preset color name
 * stored in the map PRESET_COLORS. The keys of the presets are the names of
 * the preset colors in lowercase and their values are the corresponding
 * 6-digit hexadecimal number."
 */

/**
 * golfed
 */
f=(a,b=(PRESET_COLORS[a.toLowerCase()]||a).slice(1))=>{if(b.length^6)b=b.replace(/./g,'$&$&');c=b.match(/.{2}/g).map(d=>parseInt(d,16));return{r:c[0],g:c[1],b:c[2]}}

/**
 * ungolfed
 * @param   {string} hexColor a hex string color
 * @returns {Object}          the color in RGB format
 */
function parseHTMLColor(hexColor) {
  // if argument is in preset colors, use that value instead; slice pound sign
  let hex = (PRESET_COLORS[hexColor.toLowerCase()] || hexColor).slice(1);

  // if in format #abc, expand to #aabbcc
  if (hex.length === 3) {
    hex = hex.replace(/./g, '$&$&');
  }

  // match every 2 characters, parse each match from hex string
  const dec = hex.match(/.{2}/g).map(cur => {
    return parseInt(cur, 16);
  });

  // return formatted object
  return {
    r: dec[0],
    g: dec[1],
    b: dec[2],
  };
}
