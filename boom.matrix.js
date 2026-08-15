export function BOOM_MATRIX(csv) {
  return csv.map((row, i) => ({
    index: i,
    etage: row.etage,
    modul: row.modul,
    aufgabe: row.aufgabe,
    depth: i * 0.33,
    pulse: Math.sin(i * 0.25),
    warp: Math.cos(i * 0.18)
  }));
}
