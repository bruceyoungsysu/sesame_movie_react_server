export default class MovieService{
    static addOneRating(m_id,rate){
        fetch("https://gentle-hamlet-03315.herokuapp.com/movies/update",{
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

}