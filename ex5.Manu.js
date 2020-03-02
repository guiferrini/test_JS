let world = "hola mundo";

const ContarLetras = (world) => {
    let letters = Array.from(world);
    let count = 0;

    let letterResume = [];
    let countResume = [];

    for (let i = 0; i < letters.length; i++) {
        let reference = letters[i];

        for (let j = 0; j < letters.length; j++) {
            let letter = letters[j];

            if (letter == reference) {
                count =+ 1;
            }
        }

        letterResume.push(reference);
        countResume.push(count);
    }

    console.log(letterResume);
    console.log(countResume);
}