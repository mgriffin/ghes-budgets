function github_unicorns(memory) {
  var ghuni_budget = memory * 0.25;
  if (ghuni_budget > 18) {
    return 30;
  }
  if (ghuni_budget > 16) {
    return 24;
  }
  if (ghuni_budget > 8) {
    return 16;
  }
  if (ghuni_budget > 4) {
    return 8;
  }
  return 4;
}

function github_ernicorns(memory) {
  var gherni_budget = memory * 0.10;
  if (gherni_budget > 15.4) {
    return 30;
  }
  if (gherni_budget > 7.2) {
    return 15;
  }
  if (gherni_budget > 6.4) {
    return 12;
  }
  if (gherni_budget > 3.2) {
    return 8;
  }
  if (gherni_budget > 1.6) {
    return 4;
  }
  return 2;
}

function gitauth_unicorns(memory) {
  var gauni_budget = memory * 0.25;
  if (gauni_budget > 16) {
    return 6;
  }
  if (gauni_budget > 6) {
    return 4;
  }
  return 2;
}

function total_workers(cpu) {
  var total_workers = Math.floor(cpu * 1.5);
  if (total_workers > 18) {
    return 18;
  }
  return total_workers;
}

document.getElementById('memory').addEventListener('input', function() {
  if (this.value < 16) {
    this.value = 16;
  }
  document.getElementById('githubunicorns').innerHTML = github_unicorns(this.value);
  document.getElementById('githubernicorns').innerHTML = github_ernicorns(this.value);
  document.getElementById('gitauthunicorns').innerHTML = gitauth_unicorns(this.value);
});

document.getElementById('cpus').addEventListener('change', function() {
  if (this.value < 2) {
    this.value = 2;
  }
  document.getElementById('highworkers').innerHTML = total_workers(this.value) - 2;
});
