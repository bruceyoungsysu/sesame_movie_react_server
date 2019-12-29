export default class RatingService{
    static addOneRating(m_id,rate){
        fetch("https://gentle-hamlet-03315.herokuapp.com/api/ratings/add",{
            method: 'post',
            body: JSON.stringify({
                key:{movie_id:m_id,
                    user_id:-1},
                rating:rate
            }),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json());
    }

    static getRatingById(m_id){
        fetch("https://gentle-hamlet-03315.herokuapp.com/api/ratings/"+m_id, {
            method: 'get',
            credentials: 'include',
        })
            .then(response=> response.json())
            .then(rating => console.log(rating.rating));
    }

}