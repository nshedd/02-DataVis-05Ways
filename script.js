import { select, csv } from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

csv('cars-sample.csv').then(data => {
  console.log(data);
});
