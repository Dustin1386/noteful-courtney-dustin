import React, { Componnet } from "react"
import config from '../config'



export default class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValid: false,
      name: '',
      validationMessage: {
        name: ''
      }
    }
  }

  updateName(name) {
    this.setState({ name }, () => { this.validateName(name) })
  }

  validateName() {
    const name = { ...this.state.validationMessage }
    if (name.length === 0) {
      return 'Name is required'
    } else if (name.length < 3) {
      return ('Name must be at least 3 characters long')
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    //     const folderName = folder-name.value
   //console.log(this.state.name.value)

    const folderId = this.props.id

    fetch(`${config.API_ENDPOINT}/folder/${folderId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(folder),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(() => {
        this.context.addFolder(folderId)
        // allow parent to perform extra behaviour
        this.props.history.push(`folder/${folder.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }
}


render() {
  return (
    <form>
      <h1>New Folder</h1>
      <div className="field">
        <label htmlFor='folder-name-input'>
          Name
                    </label>
        <input type="text" id="folder-name-input" name='folder-name' onChange={e => this.updateName(e.target.value)} />
        <ValidateForm className="validationError" hasError={!this.state.name} message={this.validateName()}></ValidateForm>
        <button type="submit" disable={!this.state.formValid}>
          New Folder 4 You
                    </button>


      </div>
    </form>
  );
}
