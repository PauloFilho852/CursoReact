import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
  const [name, setName] = useState(user.name || '')
  const [email, setEmail] = useState(user.email || '')
  const [bio, setBio] = useState(user.bio || '')
  const [role, setRole] = useState(user.role || '')

  const handleName = (e) => {
    setName(e.target.value)    
  }

  const handleSubmit = (e) => {
    e.preventDefault() //Evita o refresh da página (comportamento padrão do submit)
    console.log(`O nome é ${name} e o email é ${email}`)
    console.log(`A bio é ${bio}`)
    console.log(`A função é ${role}`)

    setName('')
    setEmail('')
    setBio('')
    //setRole('')
  }

  return (
    <div>
        {/*Criação de formulário*/}
        <form onSubmit={handleSubmit}>
            <div >
                <label htmlFor="name">Nome:</label>
                <input type="text"
                 id="name" name="name"
                 placeholder='Digite seu nome'
                 onChange={handleName}
                 value={name}/>
            </div>

            {/*Label envolvendo input*/}
            <label > 
                <span>E-mail:</span>
                <input type="email"
                 name="email"
                 placeholder='Digite seu email'
                 onChange={(e)=>setEmail(e.target.value)}
                 value={email}/>
            </label>
            
            <label>
                <span>Bio:</span>
                <textarea
                name="bio"
                placeholder='Escreva sobre você'
                onChange={(e)=>setBio(e.target.value)}
                value={bio}>                    
                </textarea>
            </label>

            <label>
                <span>Função:</span>
                <select name="role" onChange={(e)=>setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="admin">Administrador</option>
                    <option value="editor">Editor</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm