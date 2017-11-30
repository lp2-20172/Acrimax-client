import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
//import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { getList as getUsersList } from '../../actions/users-action'
import { save, getById, update } from '../../actions/venta-action'
import { getList as getClienteList } from '../../actions/cliente-action'
import { connect } from 'react-redux'

class Form extends Component {
    /*
        constructor(props) {
            super(props);
            this.state = {
                d: {
                    codigo: '',
                    nombre: '',
                },
                saving: false
            }
        }*/
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            nro_doc: props.data ? props.data.nro_doc : '',
            fecha: props.data ? props.data.fecha : '',
            total: props.data ? props.data.total : '',
            users: props.data ? props.data.users : '',
            cliente: props.data ? props.data.cliente : ''
        }
    }
    /*
        componentWillReceiveProps = (nextProps) => { // Load Asynchronously
            const { data } = nextProps;
            console.log('componentWillReceiveProps data:' + JSON.stringify(data))
            this.setState({
                id: data.id,
                codigo: data.codigo,
                nombre: data.nombre
            })
        }
    */
    componentWillMount = () => {
        this.props.getUsersList("")
        this.props.getClienteList("")
        /*
        const { id } = this.props.match.params
        if (id) {
            //this.props.getById(id)
            //this.props.getItemAsync(id)

            this.props.getById(id).then(data => {
                console.log('componentWillReceiveProps data:' + JSON.stringify(data))
                this.setState({
                    id: data.id,
                    codigo: data.codigo,
                    nombre: data.nombre
                })
            }).catch(e => {

            });
        }
        */
    }


    componentDidMount = () => {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    nro_doc: data.nro_doc,
                    fecha: data.fecha,
                    total: data.total,
                    users: data.users,
                    cliente: data.cliente
                });
            });
        }
    }

    handleChange = (event) => {
        //this.setState({ value: event.target.value });
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        const { id } = this.props.match.params
        if (id) {
            //console.log('handleSubmit state:' + JSON.stringify(this.state))
            this.props.update(this.state, this.props.history)
        } else {
            this.props.save(this.state, this.props.history)
        }
        //this.props.history.push('/categorias/list');
        event.preventDefault();
    }

    render() {

        //3
        let { users_list, cliente_list } = this.props
        //const { data } = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                          </Avatar>
                    }
                    title="lista de ventas"
                    subheader="Acrimax"
                />
                <CardContent>
                    <form onSubmit={this.handleSubmit}>
                        
                        <br />

                        <label>
                            nro_doc:
                            <input type="text" name="nro_doc" value={this.state.nro_doc} onChange={this.handleChange} />
                        </label>
                         <label>
                            fecha:
                            <input type="text" name="fecha" value={this.state.fecha} onChange={this.handleChange} />
                        </label>
                         <label>
                            total:
                            <input type="text" name="total" value={this.state.total} onChange={this.handleChange} />
                        </label>
                       

                        <form >
                        <InputLabel >Users :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="users"
                            value={this.state.users}
                            onChange={this.handleChange}

                            helperText="...............Seleccione un users.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "users"
                                },
                            }}

                        >
                            {users_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.username}
                                </option>
                            )}
                        </TextField>





                    </form>

                     <form >
                        <InputLabel >Cliente :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="cliente"
                            value={this.state.cliente}
                            onChange={this.handleChange}

                            helperText="...............Seleccione un cliente.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "cliente"
                                },
                            }}

                        >
                        {cliente_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.ruc}
                                </option>
                            )}
                        </TextField>





                    </form>
                    
                        <input type="submit" value="Submit" />
                    </form>
                </CardContent>
            </Card>
        )
    }
}

Form.propTypes = {
    data: PropTypes.object,
    users_list: PropTypes.array,
    cliente_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.producto.list.find(item => item.id + '' === props.match.params.id + ''),
            users_list: state.users.list,
            cliente_list: state.cliente.list,
        }
    }
    return {
        data: null,
        users_list: state.users.list,
        cliente_list: state.cliente.list,
    }

}
/*
const mapDispatchToProps = (dispatch) => {
    return {
        save: (d, h) => { dispatch(save(d, h)) },
        getList: (q) => { dispatch(getList(q)) },
        getById: (id) => { dispatch(getById(id)) },
        update: (d, h) => { dispatch(update(d, h)) },
    }
}
*/
export default connect(mapStateToProps, {
    save,
    getById,
    update,
    getUsersList,
    getClienteList,

})(Form)