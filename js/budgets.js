var tangle = new Tangle (document.getElementById("budgets"), {
  initialize: function () {
    this.cpu = 2;
    this.memory = 16;
    this.ghes = "2.0";
  },
  update: function () {
    var ghuni_budget = this.memory * 0.25;
    if (ghuni_budget > 18) {
      this.githubunicorn = 30;
    } else if (ghuni_budget > 16) {
      this.githubunicorn = 24;
    } else if (ghuni_budget > 8) {
      this.githubunicorn = 16;
    } else if (ghuni_budget > 4) {
      this.githubunicorn = 8;
    } else {
      this.githubunicorn = 4;
    }

    var gherni_budget = this.memory * 0.10;
    if (gherni_budget > 15.4) {
      this.githubernicorn = 30;
    } else if (gherni_budget > 7.2) {
      this.githubernicorn = 15;
    } else if (gherni_budget > 6.4) {
      this.githubernicorn = 12;
    } else if (gherni_budget > 3.2) {
      this.githubernicorn = 8;
    } else if (gherni_budget > 1.6) {
      this.githubernicorn = 4;
    } else {
      this.githubernicorn = 2;
    }

    var gauni_budget = this.memory * 0.25;
    if (gauni_budget > 16) {
      this.gitauthunicorn = 6;
    } else if (gauni_budget > 6) {
      this.gitauthunicorn = 4;
    } else {
      this.gitauthunicorn = 2;
    }

    var total_workers = (this.cpu * 1.5).floor();
    if ((this.memory * 0.25) > 2) {
      if (total_workers > 18) {
        total_workers = 18;
      }
    } else {
      total_workers = 4;
    }

    this.workers = total_workers;
  }
});
