function fixPackages(packages) {
  while (/\([^()]*\)/.test(packages)) { // Mientras haya paréntesis sin anidar
    packages = packages.replace(/\(([^()]*)\)/g, (_, content) => {
      return content.split('').reverse().join('')
    });
  }
  return packages;
}

console.log(fixPackages('a(cb)de'))
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

console.log(fixPackages('a(b(c)d)e'))
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

console.log(fixPackages('a(b(c)de)fg'))
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

console.log(fixPackages('a(b(c))e'))
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"