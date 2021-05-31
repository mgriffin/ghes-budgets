var assert = require('assert');
let budget = require("../js/budgets.js");

assert_budgets = function(ghes_version, cpus, host_mem, unicorn, ernicorn, gitauth, resque) {
	it('should should return ' + unicorn + ' unicorns when there is ' + host_mem + 'GB of RAM', function() {
		assert.equal(unicorn, budget.github_unicorns(ghes_version, host_mem));
	});
	it('should should return ' + ernicorn + ' ernicorns when there is ' + host_mem + 'GB of RAM', function() {
		assert.equal(ernicorn, budget.github_ernicorns(ghes_version, host_mem));
	});
	it('should should return ' + gitauth + ' gitauth when there is ' + host_mem + 'GB of RAM', function() {
		assert.equal(gitauth, budget.gitauth_unicorns(ghes_version, host_mem));
	});
}

describe('Budgets', function() {
	describe('#2.22()', function() {
		assert_budgets('2.22', 2, 13, 4, 2, 2, 4);
		assert_budgets('2.22', 4, 7, 4, 2, 2, 4);
		assert_budgets('2.22', 4, 14, 4, 2, 2, 5);
		assert_budgets('2.22', 8, 15, 4, 2, 2, 6);

		assert_budgets('2.22', 2, 16, 8, 4, 2, 4);
		assert_budgets('2.22', 2, 17, 8, 4, 2, 4);
		assert_budgets('2.22', 4, 19, 8, 4, 2, 6);
		assert_budgets('2.22', 4, 21, 8, 4, 2, 6);
		assert_budgets('2.22', 4, 24, 8, 4, 4, 6);
		assert_budgets('2.22', 4, 25, 8, 4, 4, 6);
		assert_budgets('2.22', 4, 30, 8, 4, 4, 6);
		assert_budgets('2.22', 4, 31, 8, 4, 4, 6);
		assert_budgets('2.22', 6, 23, 8, 4, 2, 9);
		assert_budgets('2.22', 8, 27, 8, 4, 4, 11);
		assert_budgets('2.22', 16, 29, 8, 4, 4, 12);

		assert_budgets('2.22', 2, 32, 16, 8, 4, 4);
		assert_budgets('2.22', 3, 35, 16, 8, 4, 4);
		assert_budgets('2.22', 4, 33, 16, 8, 4, 6);
		assert_budgets('2.22', 6, 39, 16, 8, 4, 9);
		assert_budgets('2.22', 8, 47, 16, 8, 4, 12);
		assert_budgets('2.22', 8, 49, 16, 8, 4, 12);
		assert_budgets('2.22', 8, 51, 16, 8, 4, 12);
		assert_budgets('2.22', 8, 55, 16, 8, 4, 12);
		assert_budgets('2.22', 8, 60, 16, 8, 4, 12);
		assert_budgets('2.22', 16, 38, 16, 8, 4, 16);
		assert_budgets('2.22', 16, 58, 16, 8, 4, 18);
		assert_budgets('2.22', 16, 61, 16, 8, 4, 18);
		assert_budgets('2.22', 16, 62, 16, 8, 4, 18);
		assert_budgets('2.22', 16, 63, 16, 8, 4, 18);
		assert_budgets('2.22', 31, 46, 16, 8, 4, 18);
		assert_budgets('2.22', 36, 59, 16, 8, 4, 18);

		assert_budgets('2.22', 24, 70, 24, 12, 6, 18);

		assert_budgets('2.22', 8, 74, 30, 15, 6, 12);
		assert_budgets('2.22', 8, 126, 30, 15, 6, 12);
		assert_budgets('2.22', 10, 78, 30, 15, 6, 15);
		assert_budgets('2.22', 10, 80, 30, 15, 6, 15);
		assert_budgets('2.22', 12, 82, 30, 15, 6, 18);
		assert_budgets('2.22', 12, 118, 30, 15, 6, 18);
		assert_budgets('2.22', 12, 369, 30, 30, 6, 18);
		assert_budgets('2.22', 16, 88, 30, 15, 6, 18);
		assert_budgets('2.22', 16, 94, 30, 15, 6, 18);
		assert_budgets('2.22', 16, 102, 30, 15, 6, 18);
		assert_budgets('2.22', 16, 110, 30, 15, 6, 18);
		assert_budgets('2.22', 16, 120, 30, 15, 6, 18);
		assert_budgets('2.22', 16, 122, 30, 15, 6, 18);
		assert_budgets('2.22', 16, 124, 30, 15, 6, 18);
		assert_budgets('2.22', 16, 157, 30, 30, 6, 18);
		assert_budgets('2.22', 18, 141, 30, 15, 6, 18);
		assert_budgets('2.22', 23, 108, 30, 15, 6, 18);
		assert_budgets('2.22', 24, 98, 30, 15, 6, 18);
		assert_budgets('2.22', 24, 377, 30, 30, 6, 18);
		assert_budgets('2.22', 28, 503, 30, 30, 6, 18);
		assert_budgets('2.22', 30, 196, 30, 30, 6, 18);
		assert_budgets('2.22', 31, 445, 30, 30, 6, 18);
		assert_budgets('2.22', 32, 186, 30, 30, 6, 18);
		assert_budgets('2.22', 32, 188, 30, 30, 6, 18);
		assert_budgets('2.22', 32, 189, 30, 30, 6, 18);
		assert_budgets('2.22', 32, 204, 30, 30, 6, 18);
		assert_budgets('2.22', 32, 240, 30, 30, 6, 18);
		assert_budgets('2.22', 32, 249, 30, 30, 6, 18);
		assert_budgets('2.22', 32, 252, 30, 30, 6, 18);
		assert_budgets('2.22', 32, 328, 30, 30, 6, 18);
		assert_budgets('2.22', 40, 125, 30, 15, 6, 18);
		assert_budgets('2.22', 40, 432, 30, 30, 6, 18);
		assert_budgets('2.22', 44, 238, 30, 30, 6, 18);
		assert_budgets('2.22', 48, 330, 30, 30, 6, 18);
		assert_budgets('2.22', 48, 433, 30, 30, 6, 18);
		assert_budgets('2.22', 48, 440, 30, 30, 6, 18);
		assert_budgets('2.22', 48, 454, 30, 30, 6, 18);
		assert_budgets('2.22', 52, 692, 30, 30, 6, 18);
		assert_budgets('2.22', 55, 222, 30, 30, 6, 18);
		assert_budgets('2.22', 58, 484, 30, 30, 6, 18);
		assert_budgets('2.22', 60, 472, 30, 30, 6, 18);
		assert_budgets('2.22', 64, 113, 30, 15, 6, 18);
		assert_budgets('2.22', 64, 220, 30, 30, 6, 18);
		assert_budgets('2.22', 64, 236, 30, 30, 6, 18);
		assert_budgets('2.22', 64, 251, 30, 30, 6, 18);
		assert_budgets('2.22', 64, 409, 30, 30, 6, 18);
		assert_budgets('2.22', 64, 480, 30, 30, 6, 18);
		assert_budgets('2.22', 64, 492, 30, 30, 6, 18);
		assert_budgets('2.22', 64, 494, 30, 30, 6, 18);
		assert_budgets('2.22', 64, 498, 30, 30, 6, 18);
		assert_budgets('2.22', 64, 688, 30, 30, 6, 18);
		assert_budgets('2.22', 72, 137, 30, 15, 6, 18);
		assert_budgets('2.22', 76, 980, 30, 30, 6, 18);
		assert_budgets('2.22', 80, 187, 30, 30, 6, 18);
		assert_budgets('2.22', 80, 629, 30, 30, 6, 18);
		assert_budgets('2.22', 96, 184, 30, 30, 6, 18);
		assert_budgets('2.22', 96, 373, 30, 30, 6, 18);
		assert_budgets('2.22', 96, 747, 30, 30, 6, 18);
		assert_budgets('2.22', 96, 1411, 30, 30, 6, 18);
		assert_budgets('2.22', 104, 1007, 30, 30, 6, 18);
		assert_budgets('2.22', 127, 446, 30, 30, 6, 18);
		assert_budgets('2.22', 128, 1921, 30, 30, 6, 18);
		assert_budgets('2.22', 128, 1968, 30, 30, 6, 18);
		assert_budgets('2.22', 128, 2015, 30, 30, 6, 18);
		assert_budgets('2.22', 160, 3783, 30, 30, 6, 18);
	});
});
