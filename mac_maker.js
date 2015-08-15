function make_mac() {
    var letters_possible = "ABCDEF";
    var total_string = "";
    for (var i = 0; i < 6; i ++) {
        var current_value = "";
        for (var j = 0; j <= 1; j++) {
            var letter_or_number = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
            if (letter_or_number === 0) {
                var letter = letters_possible.charAt(Math.floor(Math.random() * letters_possible.length));
                current_value += letter;
            }
            else {
                var nmbr = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
                current_value += nmbr
            }

        }
        if (i <= 4) {
            total_string += current_value;
            total_string += ":";
        } else {
            total_string += current_value;
        }
    }
    console.log(total_string);
}

make_mac()