var numbers = require("../lib/numbers");
var assert = require("chai").assert;
var expect = require("chai").expect;

describe("1. all linear 0-255", function() {
	it ("should return 0-255, 256th entries, begin w/ 0, end w/ 255, linearly", function() {
		var all_0_255 = numbers.all_number(0, 256);
		// 0, 1, 2, 3, 4, 5, ..., 255
		assert(Array.isArray(all_0_255));
		expect(all_0_255.length).to.equal(256);
		expect(all_0_255[0]).to.equal(0);
		expect(all_0_255[11]).to.equal(11);
		expect(all_0_255[255]).to.equal(255);
	    });
});

describe("2. all odd between 0-255", function() {
	it ("should return odd number between 0-255, 128th entries, begin w/ 1, end w/ 255, linearly", function() {
		var odd_0_255 = numbers.all_odd_number(0, 256);
		assert(Array.isArray(odd_0_255));
		expect(odd_0_255.length).to.equal(128);
		expect(odd_0_255[0]).to.equal(1);
		expect(odd_0_255[1]).to.equal(3);
		expect(odd_0_255[2]).to.equal(5);
		expect(odd_0_255[3]).to.equal(7); 
		// 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31,
		expect(odd_0_255[11]).to.equal(23);
		expect(odd_0_255[15]).to.equal(31);
		expect(odd_0_255[127]).to.equal(255);
	    });
});


describe("3. all between 0-255, and accumulated sum", function() {
	it ("should return 0-255 with accumulated sum", function() {
		var sum_0_255 = numbers.all_number_and_accumulated_sum(0, 256);
		// num: 0, 1, 2, 3,  4,  5, 6,   7, 8,   9, 10, ..., 255
		// sum: 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...,
		expect(sum_0_255).to.be.a('array');
		expect(sum_0_255).to.have.length(256);
		assert.deepEqual(sum_0_255[0], {"num": 0, "sum": 0});
		assert.deepEqual(sum_0_255[1], {"num": 1, "sum": 1});
		assert.deepEqual(sum_0_255[2], {"num": 2, "sum": 3});
		assert.deepEqual(sum_0_255[3], {"num": 3, "sum": 6}); 
		assert.deepEqual(sum_0_255[8], {"num": 8, "sum":36});
		assert.deepEqual(sum_0_255[15], {"num": 15, "sum":120});
		assert.deepEqual(sum_0_255[127], {"num": 127, "sum":8128});
	    });
});

describe("4. iterate thru list", function() {
	it ("should iterate ", function() {
		// assert.equal(0, 1, "TBD: not implemented yet");
        });
});

describe("5. find max", function() {
	it ("should find max", function() {
		assert.equal(numbers.find_max([0, -1, 1, 2]), 2);
		assert.equal(numbers.find_max([-1, -2, -3, -4]), -1);
		assert.equal(numbers.find_max([0, 20, 30, 40]), 40);
		assert.equal(numbers.find_max([-3, -5, -7]), -3);
		assert.equal(numbers.find_max([]), null);
		assert.equal(numbers.find_max("hello"), null);
		assert.equal(numbers.find_max(""), null);
        });
});


describe("6. get average", function() {
	it("should get average", function() {
		assert.equal(numbers.get_average([0, -1, 1, 2]), 0.5);		
		assert.equal(numbers.get_average([0, 1, 2, 3]), 1.5);		
	});
});

describe("7. odd between 0-255", function() {
	it ("should return odd number between 0-255", function() {
		var odd_0_255 = numbers.all_odd_number(0, 256);
		assert(Array.isArray(odd_0_255));
		assert.equal("see test 2.", "see test 2.");
        });
});

describe("8. greater than y", function() {
	it ("should count the number of item greater than give y from an array", function() {
		assert.equal(numbers.greater_than_y(-1, [1, 2, 3, 4, 5]), 5);
		assert.equal(numbers.greater_than_y(0, [1, 2, 3, 4, 5]), 5);
		assert.equal(numbers.greater_than_y(1, [ 1, 2, 3, 4, 5]), 4);
		assert.equal(numbers.greater_than_y(2, [ 1, 2, 3, 4, 5]), 3);
		assert.equal(numbers.greater_than_y(3, [1, 2, 3, 4, 5]), 2);
		assert.equal(numbers.greater_than_y(4, [1, 2, 3, 4, 5]), 1);
		assert.equal(numbers.greater_than_y(5, [1, 2, 3, 4, 5]), 0);
        });
});

describe("9. square values", function() {
	it ("should square each item in an array of item", function() {
		assert.deepEqual(numbers.square_values([1, 5, 10, -2]), [1, 25, 100, 4]);
		assert.deepEqual(numbers.square_values([-3, 0, 7]), [9, 0, 49]);
        });
});

describe("10. eliminate negative values", function() {
	it ("should replace negative items with zeros", function() {
		assert.deepEqual(numbers.eliminate_negative_items([1, 5, 10, -2]), [1, 5, 10, 0]);
		assert.deepEqual(numbers.eliminate_negative_items([-3, 0, 7]), [0, 0, 7]);
        });
});

describe("11. find max, min, and average", function() {
	it("should find 100, 0, 50", function(){
		assert.deepEqual(numbers.get_min_avg_max([0, 100]), {"min":0, "avg": 50, "max":100});
		assert.deepEqual(numbers.get_min_avg_max([0, 1, 2]), {"min":0, "avg": 1, "max":2});
		assert.deepEqual(numbers.get_min_avg_max([0, 1, -4]), {"min":-4, "avg": -1, "max":1});
	});
    });

describe("12. shift values by one (left-shift)", function() {
	it("should have last element as zero", function(){
		assert.deepEqual(numbers.shift_one_left([0, 100]), [100, 0]);
		assert.deepEqual(numbers.shift_one_left([0, 1, 2]), [1, 2, 0]);
		assert.deepEqual(numbers.shift_one_left([0, 1, -4]), [1, -4, 0]);
	});
    });

describe("13. convert negative number to string 'dojo'", function() {
	it("should have throw error for non-array input", function(){
		assert.throws(function() {
			var a = numbers.replace_neg_with_dojo(0);
		    });
		assert.throws(function() {
			var a = numbers.replace_neg_with_dojo("hello");
		    });
	});
	it("should have 'dojo' printed", function(){
		assert.deepEqual(numbers.replace_neg_with_dojo([0, 100]), [0, 100]);
		assert.deepEqual(numbers.replace_neg_with_dojo([0, 1, 2]), [0, 1, 2]);
		assert.deepEqual(numbers.replace_neg_with_dojo([-10, 1, -4]), ["dojo", 1, "dojo"]);
	});
    });