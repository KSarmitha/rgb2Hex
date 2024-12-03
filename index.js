module.exports = {
    rgbToHex: (r, g, b) => `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`,
    hexToRgb: (hexa) => {
      const bigint = parseInt(hexa.slice(1), 16);
      return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
    }
};