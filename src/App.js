import React from 'react';
import './App.css'
import SelectInput from './components/SelectInput';

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      nome: '',
      email: '',
      enganjamento: '',
      checkbox: false,
      age: '',
    }
    
    this.sendMessage = this.sendMessage.bind(this)
    this.HandleAllEvents = this.HandleAllEvents.bind(this)
  }

  sendMessage() {
    alert("Agradecemos por realizar o seu cadastro!")
    this.setState({
      nome: '',
      email: '',
      enganjamento: '',
      checkbox: false,
      age: '',
    })
  }

  HandleAllEvents({target}) {
    const {name} = target
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value
    })
    
  }
  render () {
    const {nome, email, enganjamento, checkbox, age} = this.state
    return (

      <div className='form-father'>
        <header>
          <h1>Preencha o formulário para participar do sorteio da nova coleção de primaveira</h1>
        </header>

        <main>
          <form>
            <fieldset> 
              <legend>Informações pessoais</legend>

              <label htmlFor='name'>
                <input 
                placeholder='Nome completo'
                className='input-text'
                type='text' 
                name='nome' 
                onChange={this.HandleAllEvents} 
                value={nome}
                />
              </label>
              
              <label htmlFor='email'>
                <input 
                placeholder='Email'
                className='input-text'
                type='text' 
                name='email' 
                onChange={this.HandleAllEvents} 
                value={email} 
                />
              </label>

              <SelectInput 
              age={ age }
              handleChange={this.HandleAllEvents}
              />

              <label htmlFor='options'>
                A quanto tempo te temos como cliente?
                <select 
                name='enganjamento' 
                onChange={this.HandleAllEvents} 
                value={enganjamento}
                > 
                  <option>Selecionar</option>
                  <option>Mais de um ano</option>
                  <option>Um ano</option>
                  <option>Poucos meses</option>
                  <option>Ainda não sou cliente</option>
                </select>
              </label>

              <label htmlFor='require'  >
                <input 
                  type='checkbox' 
                  onClick={this.HandleAllEvents} 
                  value={checkbox}
                  />
                Desejo receber email com novas promoções
              </label> 

            </fieldset>
            <button type='button' onClick={this.sendMessage}>ENVIAR</button> 
          </form>
        </main>      
        
        <footer>
          <p>Produzido por Tayane Cristina em 28 de abril de 2023</p>
        </footer>
      </div>
    )
  }
}

export default App;
