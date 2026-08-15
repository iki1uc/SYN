export async function BOOM_PARSE(path = "./boom.csv") {
  const raw = await fetch(path).then(r => r.text());
  const lines = raw.trim().split("\n").slice(1);

  return lines.map(line => {
    const [etage, modul, aufgabe] = line.split(",");
    return { etage, modul, aufgabe };
  });
}
