class SsnForm extends React.Component {
    // Input values in state
    state = {ssn: {value: ''}};
    setSsn = ssn => {
        this.setState({ssn: {value: ssn}});
    };
    render() {
        return (
            <form>
                <h1>New Folder</h1>
                <div className ="field">
                    <label htmlFor='folder-name-input'>
                        Name
                    </label>
                    <input type="text" id="folder-name-input"name='folder-name' onChange={e => this.updateName(e.target.value)}/>
                        <ValidateForm className="validationError" hasError={!this.state.name}message={this.state.validationMessage.name}></ValidateForm>
                    <button type ="submit" disable={!this.state.formValid}>
                        New Folder 4 You
                    </button>


                </div>
            </form>
        );
    }
}