export default class GetReview {  
  static async getReview(keyword) {
    try {
      const response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${keyword}&api-key=${process.env.API_KEY}
      `);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}