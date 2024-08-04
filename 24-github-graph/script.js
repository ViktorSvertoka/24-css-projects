function generateRandomContributionStats() {
  const contributions = [];
  const levels = [0, 3, 5, 10];

  // For each week of the year (52 weeks)
  for (let i = 0; i < 52; i++) {
    const week = [];
    // Make 7 squares and randomly assign levels
    for (let j = 0; j < 7; j++) {
      week.push(levels[Math.floor(Math.random() * levels.length)]);
    }
    contributions.push(week);
  }
  return contributions;
}

function makeGraph() {
  const graph = document.querySelector('.graph');
  const contributions = generateRandomContributionStats();

  contributions.forEach((week, weekIndex) => {
    // Create a container for each week
    const graphWeek = document.createElement('ul');
    graphWeek.classList.add(`week-${weekIndex + 1}`);

    week.forEach(level => {
      // Create a square for each contribution level
      const square = document.createElement('li');
      square.classList.add('square');
      square.setAttribute('data-value', level);
      graphWeek.appendChild(square);
    });

    graph.appendChild(graphWeek);
  });
}

// Call makeGraph on page load
document.addEventListener('DOMContentLoaded', makeGraph);
