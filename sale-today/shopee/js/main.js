var headers = {'Authorization': 'Token NJX0ajmdmDlubnsfBHrvCJQjWIehzXcA','Content-Type': 'application/json'}

var fetch_datafeeds_url = `https://api.accesstrade.vn/v1/datafeeds?domain=shopee.vn&update_to=08-06-2022&status_discount=1`;

fetch(fetch_datafeeds_url, { headers })
.then(response => response.json())
.then(data => {
    console.log(data)
})
        
