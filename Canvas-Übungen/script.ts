// Die Klasse "Snowflake" repräsentiert eine einzelne Schneeflocke
class Snowflake {
    // Die Eigenschaft "position" speichert die aktuelle Position der Schneeflocke
    public position: { x: number, y: number };

    // Die Methode "update" wird aufgerufen, um die Position der Schneeflocke zu aktualisieren
    public update(): void {
        // Die Y-Position der Schneeflocke wird um 1 erhöht, um sie nach unten fallen zu lassen
        this.position.y += 1;

        // Wenn die Schneeflocke den unteren Bildschirmrand erreicht hat, wird ihre Y-Position wieder auf 0 gesetzt,
        // um sie wieder von oben nach unten fallen zu lassen
        if (this.position.y >= screen.height) {
            this.position.y = 0;
        }
    }

    // Die Methode "draw" wird aufgerufen, um die Schneeflocke auf dem Bildschirm zu zeichnen
    public draw(): void {
        // Hier wird Code zum Zeichnen der Schneeflocke an der aktuellen Position eingefügt
    }
}

// Die Klasse "SnowScene" repräsentiert die gesamte Szene mit den fallenen Schneeflocken
class SnowScene {
    // Die Eigenschaft "snowflakes" speichert ein Array mit allen Schneeflocken
    public snowflakes: Snowflake[] = [];

    // Die Methode "update" wird aufgerufen, um die Positionen aller Schneeflocken zu aktualisieren
    public update(): void {
        for (const snowflake of this.snowflakes) {
            snowflake.update();
        }
    }

    // Die Methode "draw" wird aufgerufen, um die Schneeflocken auf dem Bildschirm zu zeichnen
    public draw(): void {
        for (const snowflake of this.snowflakes) {
            snowflake.draw();
        }
    }
}

// Erstellen einer neuen Instanz der "SnowScene" -Klasse
// tslint:disable-next-line: typedef
const scene = new SnowScene();

// Erstellen von 100 Schneeflocken und Hinzufügen zur Szene
// tslint:disable-next-line: typedef
for (let i = 0; i < 100; i++) {
    // tslint:disable-next-line: typedef
    const snowflake = new Snowflake();
    // Zufällige X- und Y-Position für die Schneeflocke festlegen
    snowflake.position = {
        x: Math.random() * screen.width,
        y: Math.random() * screen.height
    };
    scene.snowflakes.push(snowflake); }