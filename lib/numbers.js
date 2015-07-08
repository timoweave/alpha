
function all_number(a, b) {
    if ((parseInt(a) !== a) || (parseInt(b) !== b)) { return null; }
    
    var numbers = [];
    for (var i = a; i < b; i++) {
	numbers.push(i);
    } 
    return numbers;
}

function all_odd_number(a, b) {
    if ((parseInt(a) !== a) || (parseInt(b) !== b)) { return null; }

    if ((a % 2) == 0) {
	a = a + 1;
    }

    var numbers = [];
    for (var i = a; i < b; i = i + 2) {
	numbers.push(i);
    } 
    return numbers;
}

function all_number_and_accumulated_sum(a, b) {
    if ((parseInt(a) !== a) || (parseInt(b) !== b)) { return null; }

    var numbers = [];
    var sum = 0;
    for (var i = a; i < b; i = i + 1) {
	sum = sum + i;
	numbers.push({"num": i, "sum": sum});
    } 
    return numbers;
}

function iter_thur_array(items) {
    if (!Array.isArray(items)) {
	return;
    }
    
    for (var item in items) {
	console.log(item);
    }
}

function find_max(items) {
    if (!Array.isArray(items)) { return null; }

    if (items.length == 0) {
	return null;
    }
    
    var max_item = items[0];
    for (var ith in items) {
	if (items[ith] > max_item) {
	    max_item = items[ith];
	}
    }
    return max_item;
}

function get_average(items) {
    if (!Array.isArray(items)) { return null; }

    if (items.length == 0) {
	return null;
    }
    
    var avg = 0;
    for (var ith in items) {
	avg += items[ith];
    }
    avg = avg / items.length;

    return avg;
    
}

function greater_than_y(y, items) {
    // count the number of items greater than y
    if (!Array.isArray(items)) { return null; }
    
    var count = 0;
    for (var ith in items) {
	if (items[ith] > y) {
	    count += 1;
	}
    }
    return count;
}

function square_values(items) {
    if (!Array.isArray(items)) { return null; }

    for (var ith in items) {
	var item = items[ith];
	items[ith] = item * item;
    }
    return items;
}

function eliminate_negative_items(items) {
    if (!Array.isArray(items)) { return null; }

    var numbers = [];
    for (var ith in items) {
	var item = items[ith];
	if (items[ith] <= 0) {
	    item = 0;
	}
	numbers.push(item);
    }
    return numbers;
}

module.exports = { "all_number" : all_number,
		   "all_odd_number" : all_odd_number,
		   "all_number_and_accumulated_sum" : all_number_and_accumulated_sum,
		   "find_max" : find_max,
		   "get_average" : get_average,
		   "greater_than_y" : greater_than_y,
		   "square_values" : square_values,
		   "eliminate_negative_items" : eliminate_negative_items
};
