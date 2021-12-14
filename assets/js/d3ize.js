function d3ize(elem) {
  var par = elem.parentElement;
  par.classList.add('graphviz-pre');
  console.log(elem);
  console.log(elem.clientWidth);
  /*d3.select(par).append('div').graphviz().renderDot(elem.innerText);*/
  d3.select(par).append('div').attr('class', 'graphviz-svg').graphviz().width(
    par.clientWidth - 3 * parseFloat(getComputedStyle(par).fontSize)
  ).renderDot(elem.innerText);
  d3.select(elem).style('display', 'none');
}
console.log(document.getElementsByClassName(".language-dot"));
var dotelems = document.getElementsByClassName("language-dot");
for (let elem of dotelems) {
  d3ize(elem);
}