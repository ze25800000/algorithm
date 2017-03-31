function commafy(num) {
    return num && num.toString()
            .replace(/(\d)(?=(\d{3})+\.)/g, function ($1, $2, $3) {
                return $2 + ',';
            });
}
console.log(
    commafy(1200023.12)
);
