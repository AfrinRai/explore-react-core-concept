export default function User ({user}){
    console.log(user);
    const {email, name} = user;
    return (
        <div className="box">
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
        </div>
    )
}