console.log("start");


async function communicate(_url: "https://jirkadelloro.github.io/EIA2-Inverted/L05_Client/Material/Test.txt"): Promise<void> {
    let response: Response = await fetch(_url);

    console.log("Response", response);

    console.log("End");

}

