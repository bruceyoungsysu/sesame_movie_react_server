export default class RatingService{
    static addOneRating(m_id,rate){
        fetch("http://localhost:8080/api/ratings/add",{
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
        fetch("http://localhost:8080/api/ratings/"+m_id, {
            method: 'get',
            credentials: 'include',
        })
            .then(response=> response.json())
            .then(rating => console.log(rating.rating));
    }

}