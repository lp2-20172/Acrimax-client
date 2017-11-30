import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
//import Typography from 'material-ui/Typography'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import { getList as getProductoList } from '../../actions/producto-action'
import { save, getById, update } from '../../actions/Tipo_Producto-action'
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
            producto_nombre: props.data ? props.data.producto_nombre : '',
            descripcion: props.data ? props.data.descripcion : '',
            producto: props.data ? props.data.producto : ''
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
         this.props.getProductoList("")
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
                    producto_nombre: data.producto_nombre,
                    descripcion: data.descripcion,
                    producto: data.producto
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
        let { producto_list } = this.props
        //const { data } = this.props
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                          
                          </Avatar>
                    }
                    title="Lista de Tipo_Producto"
                    subheader="Acrimax"
                />
                <CardContent>
                    <form onSubmit={this.handleSubmit}>
                        <br/>

                        <label>
                            producto_nombre:
                            <input type="text" name="producto_nombre" value={this.state.producto_nombre} onChange={this.handleChange} />
                        </label>
                        <label>
                            descripcion:
                            <input type="text" name="descripcion" value={this.state.descripcion} onChange={this.handleChange} />
                        </label>

                         <form >
                        <InputLabel >Producto :</InputLabel>

                        <TextField

                            id="select-currency-native"
                            select

                            name="producto"
                            value={this.state.producto}
                            onChange={this.handleChange}

                            helperText="...............Seleccione un producto.................."
                            margin="normal"
                            SelectProps={{
                                shrink: true,
                                native: true,
                                MenuProps: {
                                    name: "producto"
                                },
                            }}

                        >
                            {producto_list.map((d, index) =>
                                <option key={index} value={d.id}>
                                    {d.nombre}
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
    producto_list: PropTypes.array
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.producto.list.find(item => item.id + '' === props.match.params.id + ''),
            producto_list: state.producto.list,
            
        }
    }
    return {
        data: null,
        producto_list: state.producto.list,
        
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
    getProductoList,

})(Form)