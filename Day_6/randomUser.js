//random user generator 

fetch('https://randomuser.me/api/').then((res)=>{
    return res.json()
}).then((data)=>{
    // Extracting the user details
    const user = data.results[0];
    const fullName = `${user.name.first} ${user.name.last}`;
    const email = user.email;
    const location = `${user.location.city}, ${user.location.country}`;

    // Logging the details
    console.log('Name:', fullName);
    console.log('Email:', email);
    console.log('Location:', location);
})
.catch((error)=>{
    console.log("'Error fetching user details:', error");
})