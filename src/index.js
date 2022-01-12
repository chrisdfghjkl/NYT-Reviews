import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GetReview from './reviews'

function clearFields() {
  $('#keyword').val("");
  $('.showErrors').text("");
  $('#results').text("");
}

function getElements(response) {
  if (response.num_results >= 1) {
    for (let i = 0; i < response.results.length; i++) {
      $('#results').append("<li><h4>" + `${response.results[i].display_title}` + "</h4></li>" +
      "<p> By " + `${response.results[i].byline}` + "</p>" +
      "<p>" + `${response.results[i].summary_short}` + "</p>" +
      "<a id='reviewLink' href=" + `${response.results[i].link.url}` + ">" + `${response.results[i].link.suggested_link_text}` + "</a>");
    } 
  }
}


async function makeApiCall(keyword) {
  const response = await GetReview.getReview(keyword);
  getElements(response);
}

$(document).ready(function() {
  $('#reviewSearch').click(function() {
    let keyword = $('#keyword').val();
    clearFields();
    makeApiCall(keyword);
    $(".disclaimer").show();
  });
});
