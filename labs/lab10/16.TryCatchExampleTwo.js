function validateAge(age) {
    return (age<=0 || age>120) ?
        new Error(`Invalid value for age: ${age}`)
        : age;
}

try {
    // const validatedAge = validateAge(s);
    // const validatedAge = validateAge(5);
    const validatedAge = validateAge(-5);

    if(validatedAge instanceof Error) {
        console.error(`Anticipated Error: ${validatedAge.message}`);
    } else {
        console.log(`Valid age: ${validatedAge}`);
    }
} catch(err) {
    console.error(`Opps, something went wrong ! (${err.message})`);
}