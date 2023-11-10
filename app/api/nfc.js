export default function handler(req, res) {
  if (req.method === "POST") {
    // Spracovanie údajov z NFC čítačky
    const uid = req.body.uid;
    console.log("Prijaté UID z NFC:", uid);

    // Tu môžete pridať logiku na spracovanie UID, napríklad ukladanie do databázy

    res.status(200).json({ message: "Údaje prijaté" });
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: "Metóda nie je povolená" });
  }
}
