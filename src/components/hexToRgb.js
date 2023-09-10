export default function hexToRgb(hex){
    const hexInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!hexInput) {
    return false;
  }
  const rgb = {
    r: parseInt(hexInput[1], 16),
    g: parseInt(hexInput[2], 16),
    b: parseInt(hexInput[3], 16),
  };
  const output = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
  return output;
}