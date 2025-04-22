import React , {useState} from 'react'

function Form() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submit, setSubmit] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmit(true);
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <button type='submit' disabled = {name === "" || email ===""}>submit</button>
      </form>

    <p>your name: {name}</p>
    <p>your email: {email}</p>

    </div>
  )
}

export default Form
