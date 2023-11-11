function github_unicorns(ghes_version, memory) {
  if (ghes_version == '2.20' || ghes_version == '3.0') {
    return github_unicorns_2_20(memory);
  } else if (ghes_version == '2.22') {
    return github_unicorns_2_22(memory);
  }
}

function github_unicorns_2_20(memory) {
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

function github_unicorns_2_22(memory) {
  var ghuni_budget = memory * 0.25;
  if (ghuni_budget >= 18) {
    return 30;
  }
  if (ghuni_budget >= 16) {
    return 24;
  }
  if (ghuni_budget >= 8) {
    return 16;
  }
  if (ghuni_budget >= 4) {
    return 8;
  }
  return 4;
}

function github_ernicorns(ghes_version, memory) {
  if (ghes_version == '2.20' || ghes_version == '3.0') {
    return github_ernicorns_2_20(memory);
  } else if (ghes_version == '2.22') {
    return github_ernicorns_2_22(memory);
  }
}

function github_ernicorns_2_20(memory) {
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

function github_ernicorns_2_22(memory) {
  var gherni_budget = memory * 0.10;
  if (gherni_budget >= 15.4) {
    return 30;
  }
  if (gherni_budget >= 7.2) {
    return 15;
  }
  if (gherni_budget >= 6.4) {
    return 12;
  }
  if (gherni_budget >= 3.2) {
    return 8;
  }
  if (gherni_budget >= 1.6) {
    return 4;
  }
  return 2;
}

function gitauth_unicorns(ghes_version, memory) {
  if (ghes_version == '2.20' || ghes_version == '3.0') {
    return gitauth_unicorns_2_20(memory);
  } else if (ghes_version == '2.22') {
    return gitauth_unicorns_2_22(memory);
  }
}

function gitauth_unicorns_2_20(memory) {
  var gauni_budget = memory * 0.25;
  if (gauni_budget > 16) {
    return 6;
  }
  if (gauni_budget > 6) {
    return 4;
  }
  return 2;
}

function gitauth_unicorns_2_22(memory) {
  var gauni_budget = memory * 0.25;
  if (gauni_budget >= 16) {
    return 6;
  }
  if (gauni_budget >= 6) {
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
