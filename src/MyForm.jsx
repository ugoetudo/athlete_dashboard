export default function MyForm() {
  var [name, setVnumber] = useState("");
  
  const myFirstElement = <h1>Welcome to Class Finder!</h1>
  const submitVNUM = (e) => {
    const vn = name
    e.preventDefault()
    alert(new FormData(e.target))
    /*
    fetch(`${endpoints.auth_endpoint}?vnum=${vn}`)
      .then((res) => res.json())
        .then((data) => setUName({...data})) //ellipsis is the unwrap operator similar to ** in python
    */
        }
  return (
    <div>
      {myFirstElement}
      <form onSubmit={submitVNUM}>
        <label>Enter Your V Number:&nbsp;

          <input
            type="text"
            value={name}
            onChange={(e) => setVnumber(e.target.value)} />
        </label>
        <input type="submit" />
      </form>
      
    </div>
  )
}