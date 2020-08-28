import React, {Component} from 'react'
import {getList, addItem, deleteItem, updateItem} from './ListFunctions'

class List extends Component {
    constructor(){
        super()
        this.state = {
            id: '',
            title: '',
            editDisabled:false,
            items:[]
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount(){
        this.getAll()
    }


    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getAll = async () => {
        const result = await getList();
        console.log(result)
        this.setState({
            items: result
        });
    }
    onSubmit = async() => {
        const tempe = await addItem(this.state.title);
        console.log(tempe);
        this.getAll();
        this.setState({title:''})
    }
    onEdit = async (title, id) => {
        this.setState({title: title, id: id, editDisabled: true})
    }

    onEditAction = async () => {
        const t = await updateItem(this.state.id, this.state.title);
        console.log(t);
        this.getAll();
        this.setState({title: '', id: '', editDisabled: false})
    }


    onDelete = async(id) => {
        const tahu = await deleteItem(id);
        console.log(tahu);
        this.getAll();
        this.setState({id:''})
    }

    render() {
        return (
            <div className="col-md-12">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <div className="row">
                            <div className="col-md-12">
                                <input type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={this.state.title}
                                onChange={this.onChange.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    {!this.state.editDisabled ? (
                        <button type="button"
                        className="btn btn-success btn-block"
                        onClick={this.onSubmit.bind(this)}>
                            Submit
                        </button>
                    ) : (
                        ''
                    )}
                    {this.state.editDisabled ? (
                        <button type="button"
                        onClick={this.onEditAction.bind(this)}
                        className="btn btn-primary btn-block">
                            Update
                        </button>
                        ) : (
                            ''
                    )}
                </form>
                <table className="table">
                    <tbody>
                        {this.state.items.map((item, index) => (
                            <tr key={index}>
                                <td className="text-left">{item.title}</td>
                                <td className="text-right">
                                    <button
                                    href=""
                                    className="btn btn-info mr-1"
                                    disabled={this.state.editDisabled}
                                    onClick={this.onEdit.bind(
                                        this,
                                        item.title,
                                        item.id
                                    )}>
                                    Edit    
                                    </button>
                                    <button
                                    href=""
                                    className="btn btn-danger"
                                    disabled={this.state.editDisabled}
                                    onClick={this.onDelete.bind(
                                        this,
                                        item.id
                                    )}>
                                    Delete    
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default List;