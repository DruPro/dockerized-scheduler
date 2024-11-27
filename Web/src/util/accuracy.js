 export function calculatePairAccuracy(internPairs) {
    console.log(internPairs)
    let isPairedByLocation = JSON.parse(sessionStorage.getItem('isPairedByLocation'));
    let isPairedByDepartment = JSON.parse(sessionStorage.getItem('isPairedByDepartment'));
    let isPairedByDifferentLocation = JSON.parse(sessionStorage.getItem('isPairedByDifferentLocation'));
    let isPairedByDifferentDepartment = JSON.parse(sessionStorage.getItem('isPairedByDifferentDepartment'));
    let validPairs = 0;

    internPairs.forEach(pair => {
        const [intern1, intern2] = pair;
        let isValid = true;
       
        if (isPairedByLocation) {
            isValid = isValid && intern1.location === intern2.location;
        }

        if (isPairedByDepartment) {
            isValid = isValid && intern1.department === intern2.department;
        }

        if (isPairedByDifferentLocation) {
            isValid = isValid && intern1.location !== intern2.location;
        }

        if (isPairedByDifferentDepartment) {
            isValid = isValid && intern1.department !== intern2.department;
        }

        if (isValid) {
            validPairs++;
        }
    });

    const totalPairs = internPairs.length;
    const accuracy = totalPairs > 0 ? (validPairs / totalPairs) * 100 : 0;

    console.log(`Pairing accuarcy: ${accuracy.toFixed(2)}%`);
}