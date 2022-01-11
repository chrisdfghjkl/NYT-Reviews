import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GetReview from './reviews'

function getElements(response) {
  if (response.results) {
    $('#results').html("<h4>" + `${response.results[0].display_title}` + "</h4>" +
    "<p>" + `${response.results[0].byline}` + "</p>" +
    "<p>" + `${response.results[0].summary_short}` + "</p>" +
    "<a href=" + `${response.results[0].link.url}` + ">" + `${response.results[0].link.suggested_link_text}` + "</a>"); 
  }
}

async function makeApiCall(keyword) {
  const response = await GetReview.getReview(keyword);
  getElements(response);
}

$(document).ready(function() {
  $('#reviewSearch').click(function() {
    let keyword = $('#keyword').val();
    makeApiCall(keyword);
    $("#disclaimer").show();
  });
});
